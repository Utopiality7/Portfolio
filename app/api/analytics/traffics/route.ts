import { NextResponse } from "next/server";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.NEXT_PUBLIC_GA_CLIENT_EMAIL!,
    private_key: process.env.NEXT_PUBLIC_GA_PRIVATE_KEY!.replace(/\n/gm, "\n"),
  },
});

export async function GET() {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.NEXT_PUBLIC_GA_PROPERTY_ID!}`,
      dateRanges: [
        {
          startDate: `30daysAgo`,
          endDate: "today",
        },
      ],
      dimensions: [{ name: "year" }],
      metrics: [{ name: "activeUsers" }],
    });

    let totalVisitors = 0;
    response.rows?.forEach((row: any) => {
      totalVisitors += parseInt(row.metricValues[0].value);
    });

    return NextResponse.json(totalVisitors);
  } catch (error) {
    console.error("Error fetching analytics data:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics data" },
      { status: 500 }
    );
  }
}

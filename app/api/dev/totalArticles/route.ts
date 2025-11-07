import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://dev.to/api/articles?username=utopiality"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch articles from Dev.to");
    }

    const articles = await response.json();

    return NextResponse.json(articles.length);
  } catch (error) {
    console.error("Error fetching total articles:", error);
    return NextResponse.json(
      { error: "Failed to fetch total articles" },
      { status: 500 }
    );
  }
}

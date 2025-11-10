import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://dev.to/api/articles?username=utopiality&per_page=9000000000000000000"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch articles from Dev.to");
    }

    const articles = await response.json();

    let reactions = 0;
    articles.forEach((row: any) => {
      reactions += parseInt(row.public_reactions_count);
    });

    return NextResponse.json(reactions);
  } catch (error) {
    console.error("Error fetching reactions:", error);
    return NextResponse.json(
      { error: "Failed to fetch reactions" },
      { status: 500 }
    );
  }
}

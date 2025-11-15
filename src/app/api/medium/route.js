import Parser from "rss-parser";

export async function GET() {
  const parser = new Parser();

  try {
    const feed = await parser.parseURL(
      "https://medium.com/feed/@rishibharadwajsai"
    );

    return Response.json(feed.items);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch Medium feed" },
      { status: 500 }
    );
  }
}

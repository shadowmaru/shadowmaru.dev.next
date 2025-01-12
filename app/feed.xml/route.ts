import fs from "fs";
import RSS from 'rss';
import { getSortedPostsData } from "../../lib/posts";


export async function GET() {

  const site_url =
    process.env.NODE_ENV === "production"
      ? "https://yasuda.dev.br"
      : "http://localhost:3000";

  const allPostsData = getSortedPostsData();

  const feed = new RSS({
    title: "Ricardo Yasuda, software developer",
    description: "I write things that turn into actions",
    generator: "RSS for Next.js",
    feed_url: `${site_url}/feed.xml`,
    site_url: site_url,
    managingEditor: "ricardo@yasuda.dev.br",
    language: "en-US",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  // Add each individual post to the feed.
  allPostsData.map((post) => {
    feed.item({
      title: post.title,
      description: post.title,
      url: `${site_url}/posts/${post.id}`,
      date: post.date,
    });
  });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync("./public/feed.xml", feed.xml({ indent: true }));

  // Headers
  return new Response(feed.xml({ident: true}), {
    headers: {
      'Content-type': 'application/xml; charset=utf-8',
    },
  });
}
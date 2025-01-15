import Home from './home'
import { getSortedPostsData } from "../lib/posts";
import { generateRssFeed } from '../lib/rss';

export default async function Page() {
  // Fetch data directly in a Server Component
  const allPostsData = getSortedPostsData();

  // Generate RSS feed
  generateRssFeed(allPostsData);

  // Forward fetched data to your Client Component
  return <Home allPostsData={allPostsData} />
}
import { Outlet, useParams, Link, useSearchParams } from "react-router-dom";
import { useData } from "../hooks/UseData"; 

export default function PostsPage() {
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
}

export function PostList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = searchParams.get("limit") ?? "5";

  const postsData = useData(
    "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
  );

  if (!postsData) return <p>Loading…</p>; // guard before .map

  const postList = postsData.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>Post #{post.id}: {post.title}</Link>
    </li>
  ));

  return (
    <>
      <ul>{postList}</ul>
      <Link to="/posts?limit=10">Load 10 Posts</Link>
      {/* optional: <input type="number" value={limit} onChange={(e)=>setSearchParams({limit:e.target.value})}/> */}
    </>
  );
}

export function Post() {
  const { id } = useParams();
  const post = useData("https://jsonplaceholder.typicode.com/posts/" + id);
  if (!post) return <div className="Post">Loading…</div>;

  return (
    <div className="Post">
      <h3>Post #{post.id}: {post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <>
      <h1 className="mb-32 text-7xl font-extrabold text-black">
        Welcome To Our Blog
      </h1>

      <div className="space-y-16">
        {posts.map((post) => (
          <div key={post.id} className="p-8 border-l-8 border-purple-600">
            <Link href={`/${post.slug}`}>
              <a>
                <h2 className="text-5xl font-extrabold bg-gradient-to-br from-purple-700 to-blue-900 bg-clip-text text-transparent">
                  {post.title}
                </h2>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();
  return { props: { posts } };
}

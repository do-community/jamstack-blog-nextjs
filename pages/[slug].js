import Link from "next/link";

export default function Post({ post }) {
  return (
    <div>
      <Link href="/">
        <a>Go Home</a>
      </Link>

      <h1 className="block text-9xl font-extrabold bg-gradient-to-br from-indigo-600 to-purple-800 bg-clip-text text-transparent">
        {post.title}
      </h1>
    </div>
  );
}

// STEP 1: tell next.js how many pages to generate
export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: true, // or false // See the "fallback" section below
  };
}

// STEP 2: tell next.js what content to get for a single page
export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:1337/posts?slug=${params.slug}`);
  const data = await res.json();
  const post = data[0];

  return { props: { post } };
} 

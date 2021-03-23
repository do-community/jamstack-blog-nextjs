import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-4xl mx-auto py-32">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

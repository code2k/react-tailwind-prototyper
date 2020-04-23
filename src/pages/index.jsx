import Head from "next/head";
import DocLink from "../components/DocLink";

export default function Home() {
  return (
    <div className="w-screen h-screen mt-4 leading-normal text-gray-900 bg-gray-100">
      <Head>
        <title>React Tailwind Prototyper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container p-4">
        <h1 className="text-3xl font-semibold">React Tailwind Prototyper</h1>

        <p className="mt-4">
          Get started by editing <code>src/pages/index.jsx</code>
        </p>

        <div className="mt-10">
          <h2 className="text-xl">Documentation:</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <DocLink href="https://reactjs.org/docs/" title="React" />
            </li>
            <li>
              <DocLink
                href="https://tailwindcss.com/docs/"
                title="Tailwind CSS"
              />
            </li>
            <li>
              <DocLink href="https://nextjs.org/docs/" title="Next.js" />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

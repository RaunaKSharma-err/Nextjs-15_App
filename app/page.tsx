import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      <Link href="/users">newUser</Link>
      <br />
      <Link href="/article/123?lang=en">english</Link>
      <br />
      <Link href="/article/458?lang=fr">french</Link>
      <br />
      <Link href="/article/112?lang=sp">spanish</Link>
    </main>
  );
}

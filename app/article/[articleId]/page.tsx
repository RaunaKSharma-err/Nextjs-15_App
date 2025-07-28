"use client";
import Link from "next/link";
import { use } from "react";
import { useRouter } from "next/navigation";

export default function ArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: "en" | "fr" | "sp" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);
  const router = useRouter();
  const handleDownload = () => {
    console.log("downloading...");
    router.push("/");
  };
  return (
    <>
      <h1>article {articleId}</h1>
      <h3>reading in {lang}</h3>

      <div>
        <Link href="/article/123?lang=en">english</Link>
        <br />
        <Link href="/article/458?lang=fr">french</Link>
        <br />
        <Link href="/article/112?lang=sp">spanish</Link>
      </div>
      <button onClick={handleDownload}>Download article</button>
    </>
  );
}

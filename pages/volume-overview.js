import Link from "next/link";
import { introduction } from "/resources/lib/data";
import { useRouter } from "next/router";
import { volumes } from "@/resources/lib/data";
import Head from "next/head";

export default function VolumeOverview() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>List of Volumes of LOTR</title>
      </Head>
      <h1>Lord Of The Rings - Book Series</h1>
      <p>{introduction}</p>

      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

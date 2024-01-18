import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { volumes } from "/resources/lib/data";

export default function Volumes({ volumeID }) {
  const router = useRouter();
  const { slug } = router.query;
  const index = volumes.indexOf(volumeID);

  const dataVolume = volumes.find((volume) => volume.slug === slug);
  if (!dataVolume) {
    return null;
  }

  const { title, description, cover, books } = dataVolume;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <p>{description}</p>
      <Image
        src={cover}
        height={230}
        width={140}
        alt={`Picture of: ${title}`}
      />
      <ul>
        {books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      {/*<br></br>
      <br></br>
      <button type="button">
        <Link href={`/${volumeID[index - 1].slug}`}>previous</Link>
      </button>
      <button type="button">
        <Link href={`/${volumeID[index + 1].slug}`}>next</Link>
        </button>*/}
    </>
  );
}

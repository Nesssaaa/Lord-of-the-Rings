import Image from "next/image";
import { volumes } from "/resources/lib/data";
import imageOne from "resources/public/images/imageOne.png";
import Link from "next/link";

export default function fellowshipOfTheRing() {
  const data = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <h1>The Fellowshig Of The Ring</h1>
      <p>{data.description}</p>
      <Image
        src={imageOne}
        height={230}
        width={140}
        alt="Picture of the series the fellwoship of the rings"
      />
      <ul>
        {data.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <br></br>
      <br></br>
      <button type="button">
        <Link href="/volume-overview">previous</Link>
      </button>
      <button type="button">
        <Link href="/the-two-towers">next</Link>
      </button>
    </>
  );
}

import Image from "next/image";
import { volumes } from "/resources/lib/data";
import imageThree from "resources/public/images/imageThree.png";
import Link from "next/link";

export default function twoTowers() {
  const data = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <h1>The Two Towers</h1>
      <p>{data.description}</p>

      <Image
        src={imageThree}
        height={230}
        width={140}
        alt="Picture of the series the two towers"
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
        <Link href="/the-fellowship-of-the-ring">previous</Link>
      </button>
      <button type="button">
        <Link href="/the-return-of-the-king">next</Link>
      </button>
    </>
  );
}

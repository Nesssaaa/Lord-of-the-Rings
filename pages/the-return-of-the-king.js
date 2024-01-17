import Image from "next/image";
import imageTwo from "resources/public/images/imageTwo.png";
import { volumes } from "/resources/lib/data";
import Link from "next/link";

export default function returnOfTheKing() {
  const data = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <>
      <h1>The Return Of The King</h1>
      <p>{data.description}</p>
      <Image
        src={imageTwo}
        height={230}
        width={140}
        alt="Picture of the return of the King"
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
        <Link href="/the-two-towers">previous</Link>
      </button>
    </>
  );
}

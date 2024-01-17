import Link from "next/link";
import { introduction } from "/resources/lib/data";

export default function volumeOverview() {
  return (
    <>
      <h1>Book series</h1>
      <p>{introduction}</p>

      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/the-fellowship-of-the-ring">
            The fellowship of the rings
          </Link>
        </li>

        <li>
          <Link href="/the-return-of-the-king">The return of the king</Link>
        </li>
        <li>
          <Link href="/the-two-towers">The two Towers</Link>
        </li>
      </ul>
    </>
  );
}

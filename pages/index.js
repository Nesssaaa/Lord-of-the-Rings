import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <Link href="/volume-overview">Volumes</Link>
      <br></br>
      <br></br>
      <button type="button">
        <Link href="/volume-overview">next</Link>
      </button>
    </div>
  );
}

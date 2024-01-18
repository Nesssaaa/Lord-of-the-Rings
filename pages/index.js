import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "@/resources/lib/data";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <Link href="/volume-overview">Volumes</Link>
    </div>
  );
}

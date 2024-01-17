import Image from "next/image";
import imageTwo from "resources/public/images/imageTwo.png";
import { volumes } from "/resources/lib/data";

export default function returnOfTheKing() {
  const data = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <>
      <h1>The Return Of The King</h1>
      <p>{data.description}</p>
      <ul></ul>
      <Image
        src={imageTwo}
        height={230}
        width={140}
        alt="Picture of the return of the King"
      />
    </>
  );
}

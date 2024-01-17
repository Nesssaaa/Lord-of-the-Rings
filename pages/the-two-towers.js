import Image from "next/image";
import { volumes } from "/resources/lib/data";
import imageThree from "resources/public/images/imageThree.png";

export default function twoTowers() {
  const data = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <h1>The Two Towers</h1>
      <p>{data.description}</p>
      <ul></ul>
      <Image
        src={imageThree}
        height={230}
        width={140}
        alt="Picture of the series the two towers"
      />
    </>
  );
}

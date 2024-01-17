import Image from "next/image";
import { volumes } from "/resources/lib/data";
import imageOne from "resources/public/images/imageOne.png";

export default function fellowshipOfTheRing() {
  const data = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <h1>The Fellowshig Of The Ring</h1>
      <p>{data.description}</p>
      <ul></ul>
      <Image
        src={imageOne}
        height={230}
        width={140}
        alt="Picture of the series the fellwoship of the rings"
      />
    </>
  );
}

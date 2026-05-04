
import Image from "next/image";
import vercel from "../../public/vercel.svg";
import { Eagle_Lake } from "next/font/google";


export default function Home() {
  return (
    <>
      <h1> Hello World</h1>
      <div className=" h-50 w-50">
        <Image src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-1536x864.png" alt="Next.js Logo" fill loading="eager" style={{ objectFit: "cover" }} />
      </div>
    </>

  );
}

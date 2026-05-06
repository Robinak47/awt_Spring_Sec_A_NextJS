import Image from "next/image";
import CustomHeader from "./component/customHeader";
import CustomFooter from "./component/customFooter";
import CustomCard from "./component/customCard";

export default function Home() {
  return (
    <>
      <CustomHeader />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomFooter />
    </>
  );
}

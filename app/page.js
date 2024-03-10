import Image from "next/image";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import Menu from "./components/Menu";

export default function Home() {
  return (
   <>
      <Header />
      <HomeSection />
      <Menu />
      </>
  );
}

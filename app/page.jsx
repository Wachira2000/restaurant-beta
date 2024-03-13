
import Image from "next/image";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/About";
import ContactPage from "./components/Contact";


export default function Home() {
  return (
   <>
     <Header/>
     <HomeSection/>
     <AboutSection/>
     <ContactPage />
      </>
  );
}

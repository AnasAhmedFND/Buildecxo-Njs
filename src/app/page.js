import Build from "@/Components/hero_/Build";
import Experience from "@/Components/hero_/Experience";
import Hero from "@/Components/hero_/Hero";
import Image from "next/image";



export default function Home() {
  return (
    <>
    <Hero  page={"About"} />
    <Experience />
    <Build />
   
    
    </>

   
  );
}

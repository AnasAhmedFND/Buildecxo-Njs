import Beku from "@/Components/hero_/Beku";
import Build from "@/Components/hero_/Build";
import Experience from "@/Components/hero_/Experience";
import Factory from "@/Components/hero_/Factory";
import Hero from "@/Components/hero_/Hero";
import Servics from "@/Components/hero_/Servics";
import Team from "@/Components/hero_/Team";
import Image from "next/image";



export default function Home() {
  return (
    <>
    <Hero  page={"About"} />
    <Experience />
    <Build />
    <Beku />
    <Servics />
    <Factory />
    <Team />
   
    
    </>

   
  );
}

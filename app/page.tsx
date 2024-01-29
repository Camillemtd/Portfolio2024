import Contact from "@/components/Contact";
import BackgroundHome from "@/components/BackgroundHome";

import CarouselProjects from "@/components/CarouselProjects";

export default function Home() {
  return (
    <div>
      <Contact />
      <div className="text-center flex flex-col pt-32 items-center gap-6 h-screen">
        <h1 className=" text-4xl md:text-7xl font-semibold">Camille Metard</h1>
        <span className="text-xl md:text-3xl ">Développeur web fullstack</span>
        <span className="w-3/4 md:w-1/2 text-md">
          Bonjour, je suis un jeune développeur web passionné qui souhaite
          constamment apprendre. J'ai un petit penchant pour les technologies
          front-end, en particulier React et Next.js. Pour ce qui est du
          back-end, je travaille avec Node.js. N'hésitez pas à me contacter pour
          discuter !
        </span>
        
      </div>
      <BackgroundHome />

      <section className="w-screen flex justify-center">
        <CarouselProjects/>
      </section>
      

    </div>
  );
}

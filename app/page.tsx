import Contact from "@/components/Contact"
import BackgroundHome from "@/components/BackgroundHome"
import project from "@/data/Project"
import Project from "@/components/Project"

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

      <section className="bg-white p-10">
        <h2 className="text-5xl text-black p-10">Projects</h2>
        <div className="grid grid-cols-3 gap-5 justify-around">
          {project.map((item) => {
            return <Project key={item.title} data={item} />
          })}
        </div>
      </section>
    </div>
  )
}

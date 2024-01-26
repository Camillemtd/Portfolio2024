import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import project from "@/data/Project";
import Project from "@/components/Project";
export default function CarouselProjects() {
  return (
    <div className="w-full justify-center flex">
      <Carousel className="w-4/6 md:w-5/6 ">
        <CarouselContent>
          {project.map((item) => {
            return (
              <CarouselItem key={item.title}>
                <Project key={item.title} data={item}/>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

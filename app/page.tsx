import { Photo } from "@/components/Main/Photo";
import { Social } from "@/components/Main/Social";
import { Stats } from "@/components/Main/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Programador FullStack</span>
            <h1 className="h1 mb-6">
              Hola soy <br /> <span className="text-accent">Juan Barrera</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Apasionado por la tecnología, busco constantemente mejorar mis habilidades y aprender nuevas tecnologías para afrontar nuevos desafíos en el ámbito de la informática. 
            <br />
            Titulado en Ingeniería en Informática y en el Ciclo Superior DAM.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Descargar CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
}

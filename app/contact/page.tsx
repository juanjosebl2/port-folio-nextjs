"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const dataContact = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefono",
    text: "+34 639 390 249",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    text: "juanjosebl2@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Direccion",
    text: "Granada, España",
  },
];

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Trabajemos juntos</h3>
              <p>Esto es una descripcion...</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="Nombre" />
                <Input placeholder="Apellido" />
                <Input placeholder="Email" />
                <Input placeholder="Telefono" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecciona un servicio</SelectLabel>
                    <SelectItem value="front">Frontend</SelectItem>
                    <SelectItem value="back">Backend</SelectItem>
                    <SelectItem value="fullSt">Full stack</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" placeholder="Deje su mensaje" />

              <div className="flex justify-end">
                <Button className="max-w-40">Enviar</Button>
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {dataContact.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[20px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.text}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

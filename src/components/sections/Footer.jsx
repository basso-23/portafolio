import React, { useState, useEffect } from "react";
import Github from "@/icons/Github";
import Linkedin from "@/icons/Linkedin";
import Send from "@/icons/Send";
import Visit from "@/icons/Visit";
import Acernity from "@/icons/technology/Acernity";
import Astro from "@/icons/technology/Astro";
import Css from "@/icons/technology/Css";
import Firebase from "@/icons/technology/Firebase";
import Git from "@/icons/technology/Git";
import Html from "@/icons/technology/Html";
import JS from "@/icons/technology/JS";
import Linux from "@/icons/technology/Linux";
import Next from "@/icons/technology/Next";
import NodeJS from "@/icons/technology/NodeJS";
import React_logo from "@/icons/technology/React";
import Shadcn from "@/icons/technology/Shadcn";
import Tailwind from "@/icons/technology/Tailwind";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Links = ({ icon, url }) => {
  return (
    <a target="_blank" href={url} className="hover:text-white cursor-pointer">
      {icon}
    </a>
  );
};

const Tech = ({ name, icon }) => {
  return (
    <div className="tech-content">
      {icon}
      {name}
    </div>
  );
};

const Job = ({ name, url }) => {
  return (
    <a target="_blank" href={url} className="job-content hover:text-white">
      {name}
      <Visit />
    </a>
  );
};

const Footer = () => {
  return (
    <section className="sm:mt-20 mt-10 footer">
      <div className="pageSize">
        {/*//*________________________________________________________________________________*/}
        <div className="banner-container lg:grid-cols-2 grid-cols-1 lg:items-start items-center lg:py-14 py-10 lg:px-10 px-6">
          <div>
            <div className="banner-title lg:text-start text-center">
              Descubre más sobre mí
            </div>
            <div className="banner-subtitle lg:text-start text-center">
              Conoce mi trayectoria y mis diversas aptitudes.
            </div>
          </div>
          <div className="w-full flex lg:justify-end justify-center">
            <div className="banner-download hover:bg-[#d1d1d1] text-[#222222] lg:mt-[16px] mt-6">
              <span>Ver Currículum</span> <Visit />
            </div>
          </div>
        </div>

        {/*//*________________________________________________________________________________*/}
        <div className="text-sm mt-20 lg:flex hidden">
          <div className="text-[#838586] w-[25%]">
            <div>©2024 CarlosBaso</div>
            <div className="pulse-container">
              <div className="invisible">.</div>
            </div>
            <div className="social-container">
              <Links icon={<Send />} url={"https://www.google.com/"} />
              <Links icon={<Github />} url={"https://www.google.com/"} />
              <Links icon={<Linkedin />} url={"https://www.google.com/"} />
            </div>
          </div>

          <div className="tech-container">
            <div className="font-medium">Tecnologías</div>
            <Tech name={"Javascript"} icon={<JS />} />
            <Tech name={"React JS"} icon={<React_logo />} />
            <Tech name={"Next JS"} icon={<Next />} />
            <Tech name={"Tailwind CSS"} icon={<Tailwind />} />
            <Tech name={"Shadcn/ui"} icon={<Shadcn />} />
            <Tech name={"Aceternity UI"} icon={<Acernity />} />
            <Tech name={"Astro"} icon={<Astro />} />
            <Tech name={"Firebase"} icon={<Firebase />} />
            <Tech name={"Git"} icon={<Git />} />
            <Tech name={"Node JS"} icon={<NodeJS />} />
            <Tech name={"React Native"} icon={<React_logo />} />
            <Tech name={"HTML 5"} icon={<Html />} />
            <Tech name={"CSS"} icon={<Css />} />
            <Tech name={"Linux"} icon={<Linux />} />
          </div>

          <div className="job-container">
            <div className="font-medium">Historial Laboral</div>
            <Job name={"Hong Kong Smart"} url={"https://www.google.com/"} />
            <Job name={"Realizando Metas"} url={"https://www.google.com/"} />
            <Job name={"Partido Alianza"} url={"https://www.google.com/"} />
            <Job name={"PAYÁ"} url={"https://www.google.com/"} />
          </div>
        </div>

        {/*//*________________________________________________________________________________*/}
        <div className="lg:hidden block">
          <div className="footer-mobile">
            <div>©2024 CarlosBaso</div>
            <div
              style={{ marginTop: 0, justifyContent: "end" }}
              className="social-container"
            >
              <Links icon={<Send />} url={"https://www.google.com/"} />
              <Links icon={<Github />} url={"https://www.google.com/"} />
              <Links icon={<Linkedin />} url={"https://www.google.com/"} />
            </div>
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Tecnologías</AccordionTrigger>
              <AccordionContent asChild>
                <div className="tech-mobile">
                  <Tech name={"Javascript"} icon={<JS />} />
                  <Tech name={"React JS"} icon={<React_logo />} />
                  <Tech name={"Next JS"} icon={<Next />} />
                  <Tech name={"Tailwind CSS"} icon={<Tailwind />} />
                  <Tech name={"Shadcn/ui"} icon={<Shadcn />} />
                  <Tech name={"Aceternity UI"} icon={<Acernity />} />
                  <Tech name={"Astro"} icon={<Astro />} />
                  <Tech name={"Firebase"} icon={<Firebase />} />
                  <Tech name={"Git"} icon={<Git />} />
                  <Tech name={"Node JS"} icon={<NodeJS />} />
                  <Tech name={"React Native"} icon={<React_logo />} />
                  <Tech name={"HTML 5"} icon={<Html />} />
                  <Tech name={"CSS"} icon={<Css />} />
                  <Tech name={"Linux"} icon={<Linux />} />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Historial Laboral</AccordionTrigger>
              <AccordionContent asChild>
                <div className="job-mobile">
                  <Job
                    name={"Hong Kong Smart"}
                    url={"https://www.google.com/"}
                  />
                  <Job
                    name={"Realizando Metas"}
                    url={"https://www.google.com/"}
                  />
                  <Job
                    name={"Partido Alianza"}
                    url={"https://www.google.com/"}
                  />
                  <Job name={"PAYÁ"} url={"https://www.google.com/"} />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Footer;

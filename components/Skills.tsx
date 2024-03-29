import React from "react";
import Image from 'next/image';

// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import javascript from "../assets/javascript.png";
// import reactImage from "../assets/react.png";
// import nextjs from "../assets/nextjs.png";
// import graphql from "../assets/graphql.png";
// import github from "../assets/github.png";
// import tailwind from "../assets/tailwind.png";
// import node from "../assets/node.png";
// import express from "../assets/express.png"
// import mongodb from "../assets/mongodb.png"
// import redux from "../assets/redux.png"

interface TechItem {
  id: number;
//   src: StaticImageData;
  title: string;
  style: string;
}

const Skills: React.FC = () => {
  const techs: TechItem[] = [
    {
      id: 1,
    //   source: html,
      title: "HTML",
      style: "shadow-white",
    },
    {
      id: 2,
    //   source: css,
      title: "CSS",
      style: "shadow-white",
    },
    {
      id: 3,
    //   source: javascript,
      title: "JavaScript",
      style: "shadow-white",
    },
    {
      id: 4,
    //   source: reactImage,
      title: "React",
      style: "shadow-white",
    },
    {
      id: 5,
    //   source: node,
      title: "NodeJs",
      style: "shadow-white",
    },
    {
      id: 6,
    //   source: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
    //   source: graphql,
      title: "GraphQL",
      style: "shadow-white",
    },
    {
      id: 8,
    //   source: github,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 9,
    //   source: tailwind,
      title: "Tailwind",
      style: "shadow-white",
    },
    {
      id: 10,
    //   source: express,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 11,
    //   source: mongodb,
      title: "MongoDB",
      style: "shadow-white",
    },
    {
      id: 12,
    //   source: redux,
      title: "Redux",
      style: "shadow-white",
    },
  ];

  return (
    <div
      data-name="Skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
           Skills
          </p>
          <p className="py-6">These are the technologies I&apos;ve worked with and used them in my projects.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, source, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <Image src={source} alt={title} width={80} height={80} />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

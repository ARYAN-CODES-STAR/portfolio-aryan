import React from "react";
import Image from 'next/image';
import api from "../assets/portfolio/api.jpg";
import apod from "../assets/portfolio/apod.jpg";
import iptracker from "../assets/portfolio/iptracker.jpg";
import nftportal from "../assets/portfolio/nftportal.jpg";
import webpostman from "../assets/portfolio/webpostman.jpg";
import waveportal from "../assets/portfolio/waveportal.jpg";

interface ProjectItem {
  id: number;
//   src: StaticImageData;
  link: string;
  repo: string;
}

const Projects: React.FC = () => {
  const projects: ProjectItem[] = [

    // {
    //   id: 1,
    //   source: ,
    //   link: '',
    //   repo: ''
    // },
    // {
    //   id: 2,
    //   source: ,
    //   link: '',
    //   repo: ''
    // },
    // {
    //   id: 3,
    //   source: apod,
    //   link: '',
    //   repo: ''
    // },
    // {
    //   id: 4,
    //   source: ,
    //   link: '',
    //   repo: ''
    // },
    // {
    //   id: 5,
    //   source: ,
    //   link: '',
    //   repo: ''
    // },
    // {
    //   id: 6,
    //   source: ,
    //   link: '',
    //   repo: ''
    // },
    // {
    //   id: 7,
    //   source: ,
    //   link: '',
    //   repo: ''
    // },
    // {
    //   id: 8,
    //   source: ,
    //   link: '',
    //   repo: ''
    // },

  ];

  return (
    <div
      data-name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen projects"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, source, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <Image
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
                width={300}
                height={200}
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

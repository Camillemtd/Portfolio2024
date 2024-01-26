"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectProps {
  data: {
    title: string;
    description: string;
    image: string;
    date: string;
    techno: string;
    lienGit?: string;
    link?: string;
  };
}

// Correction ici: 'const Project: React.FC<ProjectProps> = ...'
const Project: React.FC<ProjectProps> = ({ data }) => {
  // Vous pouvez maintenant utiliser 'data.title', 'data.description', etc. dans votre composant
  return (
    <div className="w-full h-screen pt-10  md:p-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col relative h-full gap-5 justify-around md:border border-fuchsia-300 rounded-xl p-1 md:p-3"
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl">{data.title}</h2>
          <span className="w-full">{data.date}</span>
          <span className="text-blue-600">{data.techno}</span>
        </div>

        <Image
          alt={data.title}
          src={data.image}
          width={600}
          height={600}
          className="border-y border-orange-500 rounded-xl md:self-center"
        />
        <div className="">{data.description}</div>
        <div className="w-full flex gap-5 mb-16 z-50">
          <div className="w-10 h-10">
            <a
              href={data.lienGit}
              target="_blank"
              rel="noreferrer"
              className="fill-white "
            >
              <svg
                role="img"
                className="w-full"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
          <div className="w-10 h-10">
            <a
              href={data.link}
              target="_blank"
              rel="noreferrer"
              className="fill-white "
            >
              <svg
                className="w-10 fill-white cursor-pointer"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Google Chrome</title>
                <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z" />
              </svg>
            </a>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default Project;

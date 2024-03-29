'use client';
import React, { useEffect, useState } from "react";
import { motion, useScroll} from "framer-motion";

export default function Footer() {
	const { scrollY } = useScroll();
	const [height, setHeight] = useState<number | string>('auto');
	const [width, setWidth] = useState<number | string>('auto');
	const [opacity, setOpacity] = useState(1);
	const [linksActive, setLinksActive] = useState(true);
  
	useEffect(() => {
	  const unsubscribeY = scrollY.onChange(value => {
		setOpacity(Math.max(1 - value / 50, 0));
		setHeight(value > 50 ? 0 : 'auto');
		setWidth(value > 50 ? 50 : 'auto');
		setLinksActive(value <= 50);
	  });
  
	  return () => unsubscribeY();
	}, [scrollY]);

	const reseau = [
		{
			nom: "Github",
			url: 'https://github.com/Camillemtd'
,			icone:<svg className="w-full" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
			color: "purple",
		},
		{
			nom: "Linkedin",
			url: "https://www.linkedin.com/in/camille-metard-877510174/",
			icone:<svg  className="w-full" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
			color: "#0A66C2",
		},
		{
			nom: "Twitter",
			url: "https://twitter.com/Camille_Mtd",
			icone:<svg  className="w-full" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>,
			color: "#1D9BF0",
		}
	]
  return (
	<div className="flex justify-center">
      <div className="bg-white rounded-xl bg-opacity-70 m-2">
        <motion.div className="flex p-2 gap-2" style={{ opacity, height, width }}>
          {reseau.map((item) => (
            <motion.div key={item.nom} className="flex justify-center md:w-16 md:h-16 w-12 h-12" style={{ fill: item.color }} whileHover={{ 
              rotate: -45, 
              y: -10 
            }}
            transition={{ type: "spring", stiffness: 300 }}>
              <a href={linksActive ? item.url : undefined} target="_blank" rel="noreferrer" className="bg-white p-3 rounded-xl svg-icon">
                {item.icone}
              </a>
            </motion.div>
          ))}
          <div className="text-center items-center flex justify-center bg-orange-600 p-3 rounded-xl font-semibold">Scroll for my project</div>
        </motion.div>
      </div>
    </div>
  );
}

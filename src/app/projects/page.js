// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { ArrowUpRight } from 'lucide-react';

// export default function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [scrollY, setScrollY] = useState(0);
//   const [activeIndex, setActiveIndex] = useState(null);

//   useEffect(() => {
//     // Fetch project data from the local JSON file
//     fetch('/projects.json')
//       .then((response) => response.json())
//       .then((data) => setProjects(data))
//       .catch((error) => console.error('Error fetching projects:', error));

//     const handleScroll = () => {
//       const scroll = window.scrollY;
//       setScrollY(scroll);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const rotateDeg = scrollY * 0.2;

//   return (
//     <div className="flex flex-col text-gray-900 min-h-screen">
//       {/* Left Panel */}
//       <div className="w-full lg:w-1/3 lg:min-h-screen lg:fixed lg:top-10 lg:left-0 lg:py-20 lg:px-16 py-6 px-8 z-10">
//         <div className="lg:space-y-8">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="lg:text-7xl text-3xl font-black tracking-tight"
//           >
//             Projects.
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-gray-500 lg:text-xl text-sm max-w-xs leading-relaxed"
//           >
//             Creativity isn’t a limited resource the more you use it, the more it multiplies.<br />
//             Kind of like socks in the laundry.
//           </motion.p>
//         </div>
//       </div>

//       {/* Scrollable Right Pane */}
//       <div className="lg:ml-[33.333%] w-full lg:w-2/3 py-6 px-8 lg:space-y-14 space-y-0">
//         {projects.map((project, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: idx * 0.1 }}
//             viewport={{ once: true }}
//             className="group"
//             onMouseEnter={() => setActiveIndex(idx)}
//             onMouseLeave={() => setActiveIndex(null)}
//           >
//             <div className={`relative overflow-hidden rounded-2xl ${project.color} transition-all duration-500 transform group-hover:scale-[0.99]`}>
//               {/* <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-[400px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
//               /> */}
//             </div>

//             <div className="mt-8 flex justify-between items-start">
//               <div>
//                 <h2 className="text-2xl font-semibold mb-2 flex items-center gap-4">
//                   {project.title}
//                   <span className="text-xs font-normal text-blue-500">{project.category}</span>
//                 </h2>
//                 <p className="text-gray-500 lg:max-w-md max-w-sm lg:text-lg text-sm">{project.description}</p>
//               </div>

//               <Link
//                 href={`/projects/${project.title.toLowerCase().replace(' ', '-')}`}
//                 className="group/link flex items-center gap-2 text-blue-500 hover:text-gray-900 transition-colors"
//               >
//                 Read More
//                 <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <div className="flex flex-col text-gray-900 min-h-screen justify-center items-center p-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center"
      >
        🚧 This Page is Under Construction! 🚧
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg sm:text-xl lg:text-2xl text-gray-700 text-center mt-4"
      >
        Working hard behind the scenes to bring you something awesome. It&apos;s like a 
        🪄 magic show — things are happening, but not ready to reveal it yet. Stay tuned! 🎉
      </motion.p>
      <p className="text-md text-gray-600 mt-4 text-center">
        Patience is a virtue... especially when the result is this cool! 😎
      </p>
    </div>
  );
}


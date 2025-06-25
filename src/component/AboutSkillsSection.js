// src/components/AboutSkillsSection.jsx

import React from 'react';
import Image from 'next/image';

export default function AboutSkillsSection() {
  const skills = [
    { name: 'HTML5', src: '/html.png' },
    { name: 'CSS3', src: '/css.png' },
    { name: 'JavaScript', src: '/js.png' },
    { name: 'React.js', src: '/react.png' },
    { name: 'Node.js', src: '/node.png' },
    { name: 'GitHub', src: '/github.png' },
    { name: 'Python', src: '/python.png' },
    { name: 'TensorFlow', src: '/tensor.png' },
    
  ];

  return (
    <section className="w-full px-6 sm:px-10 lg:px-20 lg:pr-40 py-20 text-gray-800">
      <div className="flex flex-col gap-6 lg:col-span-8">
        <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900">What I’m Good At</h3>
        <p className="text-gray-600 text-md sm:text-base leading-relaxed">
          I specialize in crafting modern, clean, and performant interfaces. Here’s a glimpse of the tech I use regularly:
        </p>

        {/* Skill Logos */}
        <div className="flex flex-col items-center gap-4 mt-6">
          {/* Grouped rows: 3 + 3 + 2 */}
          {[0, 3, 6].map((start, index) => (
            <div key={index} className="flex justify-center gap-8">
              {skills.slice(start, start + (index === 2 ? 2 : 3)).map((skill) => (
                <div
                  key={skill.name}
                  className="relative w-14 h-14 lg:w-30 lg:h-30 sm:w-20 sm:h-20" // relative is required for fill to work
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    title={skill.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="lg:grayscale hover:grayscale-0 hover:animate-pulse transition duration-300 p-2 sm:p-3"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

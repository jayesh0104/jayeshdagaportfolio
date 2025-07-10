'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Project2() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  if (!hydrated) return null;
  return (
    <div className="min-h-screen bg-[#FAF8F6] text-gray-800 p-6 sm:p-10 lg:p-20">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">Portfolio Website</h1>

      {/* Overview */}
      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">📌 Overview</h2>
        <p className="text-lg leading-7">
          This portfolio website showcases my projects, skills, and professional journey.
          It features a clean and responsive design built with Next.js and Tailwind CSS.
        </p>
      </section>

      {/* CI/CD and Testing */}
      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔧 CI/CD & Testing</h2>
        <p className="text-lg leading-7">
          The project integrates continuous integration and continuous deployment (CI/CD) pipelines
          using GitHub Actions to automate testing and deployment workflows.
          Unit and integration tests are implemented to ensure code quality and prevent regressions.
        </p>
      </section>

      {/* Deployment */}
      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">🚀 Deployment</h2>
        <p className="text-lg leading-7">
          Initially deployed on an AWS EC2 instance to manage server configuration and scaling.
          Later, deployment was shifted to Vercel to leverage serverless infrastructure and seamless
          Next.js integration for faster builds and global CDN distribution.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h2>
        <ul className="list-disc list-inside text-lg leading-7">
          <li>Next.js</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>GitHub Actions (CI/CD)</li>
          <li>Jest & React Testing Library (Testing)</li>
          <li>AWS EC2 (Initial deployment)</li>
          <li>Vercel (Final deployment)</li>
        </ul>
      </section>

      {/* Live Demo */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">🌐 Live Demo</h2>
        <a
          href="https://jayeshdaga.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 text-lg"
        >
          Visit Portfolio Website →
        </a>
      </section>

      {/* Back to Projects */}
      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="inline-block bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-all duration-300"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}

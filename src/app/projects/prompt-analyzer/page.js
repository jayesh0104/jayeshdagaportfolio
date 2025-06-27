'use client';

import Link from 'next/link';

export default function Project1() {
  return (
    <div className="min-h-screen bg-[#FAF8F6] text-gray-800 p-6 sm:p-10 lg:p-20">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">Prompt Analyzer</h1>

      {/* Description */}
      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">📌 Overview</h2>
        <p className="text-lg leading-7">
          Prompt Analyzer is a developer tool designed to assess and improve prompts used with large language models (LLMs).
          It breaks down a prompt based on key principles such as context, formatting, constraints, examples, and best practices. 
          The tool provides verdicts, explanations, and suggestions for each component to help developers craft better, clearer, and safer prompts.
        </p>
      </section>

      {/* Why It's Needed */}
      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">❓ Why This Project?</h2>
        <p className="text-lg leading-7">
          Writing effective prompts for LLMs is a critical but often overlooked skill. Poorly constructed prompts can lead to vague, inaccurate, or even harmful outputs.
          Prompt Analyzer helps developers and prompt engineers quickly identify weaknesses in their prompts and improve them with actionable suggestions.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h2>
        <ul className="list-disc list-inside text-lg leading-7">
          <li>Python</li>
          <li>Flask</li>
          {/* <li>Custom analyzers (modular architecture)</li>
          <li>dotenv for environment management</li> */}
          <li>Render.com for deployment</li>
          <li>Flask-CORS for frontend-backend integration</li>
          <li>Llama-70b instruct and mistral 7b instruct</li>
          <li>OpenRouter</li>
        </ul>
      </section>

      {/* Image */}
      <section className="max-w-4xl mx-auto mb-10">
        <div className="bg-white border rounded-lg p-4 shadow-md">
          <img
            src="/ProjectImages/prompt_analyzer/website.png"
            alt="Prompt Analysis Screenshot"
            className="mx-auto w-full max-w-3xl h-auto rounded-md"
          />
        </div>
      </section>

      {/* Deployment Link */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">🚀 Live Demo</h2>
        <a
          href="https://prompt-analyzer.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 text-lg"
        >
          View Live Project →
        </a>
      </section>

      {/* Back to Projects link */}
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

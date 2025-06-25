// app/projects/project2/page.js

import Link from 'next/link';

export default function Project2() {
  return (
    <div className="min-h-screen bg-[#FAF8F6] text-gray-800 p-6 sm:p-10 lg:p-20">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">Project 2</h1>

      {/* Your project content here */}

      {/* Back to Projects link */}
      <div className="text-center mt-12">
        <Link href="/projects" className="inline-block bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-all duration-300">
          Back to Projects
        </Link>
      </div>
    </div>
  );
}

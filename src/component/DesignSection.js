export default function DesignSection() {
  return (
    <section className="w-full h-screen flex items-center justify-center relative lg:mt-10 -mt-40">
      <div className="text-center space-y-6 mb-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
          <div>design.</div>
          <div>document.</div>
          <div>iterate.</div>
          <div>develop.</div>
        </h2>
      </div>

      {/* Section with heading, paragraph, and CTA button */}
      <div className="absolute left-4 bottom-4 lg:left-8 lg:bottom-8 sm:left-4 sm:bottom-16 max-w-xs lg:max-w-md px-4 py-2">
        {/* Heading */}
        <h3 className="text-lg sm:text-xl lg:text-xl text-black font-bold mb-2">
          Web Developer & Deep Learning Enthusiast
        </h3>
        {/* Paragraph */}
        <p className="text-sm sm:text-base lg:text-md text-black font-medium mb-4">
          Creating thoughtful, user-centric solutions through continuous design, documentation, iteration, and development.
        </p>
        {/* CTA Button */}
        <a 
          href="/projects"  // Replace with your actual link
          // target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white py-2 px-4 text-sm font-semibold rounded-md hover:bg-gray-800 transition-all duration-300"
        >
          View My Projects
        </a>
      </div>

    </section>
  );
}

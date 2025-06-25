import { ArrowDownRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#FAF8F6] text-gray-800">
      {/* Top */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 border-t border-gray-300 px-6 sm:px-10 lg:px-40 py-16 relative">

        {/* Left */}
        <div className="relative flex flex-col justify-between h-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Let’s <br /> work <br /> together
          </h2>

          {/* Arrow (hidden on small screens) */}
          <div className="absolute bottom-[-30px] right-[-30px] hidden lg:block lg:right-[100px]">
            <ArrowDownRight className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500" />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center">
          <p className="max-w-md text-gray-500 text-base sm:text-lg leading-relaxed">
            I&apos;m currently available for new work. Let me know if you&apos;re looking for a web developer. Let’s talk about the next big thing!
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 py-8 text-center">
        <a
          href="mailto:jayeshdaga99@gmail.com"
          className="text-base sm:text-lg font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300"
        >
          jayeshdaga99@gmail.com
        </a>
      </div>
    </footer>
  )
}

export default Footer;

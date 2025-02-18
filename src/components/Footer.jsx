// src/components/Footer.jsx

function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-white">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Dynamics</h3>
            <p className="mt-2 text-sm">
              Leading the way in innovative solutions.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white">
              About
            </a>
            <a href="#services" className="text-gray-300 hover:text-white">
              Services
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Dynamics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

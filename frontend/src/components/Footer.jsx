import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-8 mt-10 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h5 className="text-gray-800 font-bold text-lg mb-2">MERN Interview Guide</h5>
          <p className="text-gray-600 text-sm">
            Boost your MERN skills and master full-stack development with real projects.
          </p>
        </div>

<div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
  <a
    href="#home"
    className="text-black hover:text-primary transition-colors duration-200 fw-bold"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    }}
  >
    Home
  </a>

<Link
  to="/mern-projects"
  className="text-black hover:text-primary transition-colors duration-200 fw-bold"
>
  Projects
</Link>


  <a
    href="#quick-access"
    className="text-black hover:text-primary transition-colors duration-200 fw-bold"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("quick-access").scrollIntoView({ behavior: "smooth" });
    }}
  >
    Quick Access
  </a>

  <a
    href="#contact"
    className="text-black hover:text-primary transition-colors duration-200 fw-bold"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }}
  >
    Contact
  </a>
</div>


        {/* Right Section / Socials */}
        <div className="mt-4 md:mt-0 flex gap-3">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-primary fw-bold">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-primary fw-bold">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MERN Interview Guide by K@M@N P@N@G. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

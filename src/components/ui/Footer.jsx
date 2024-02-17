import { FaUserCircle } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineApple } from "react-icons/ai";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    title: "GitHub",
    icon: (
      <BsGithub className="text-[1.2rem] text-zinc-400 hover:text-orange-400 transition ease-in" />
    ),
    url: "https://github.com/Samstas",
  },
  {
    title: "Instagram",
    icon: (
      <BsInstagram className="text-[1.2rem] text-zinc-400 hover:text-orange-400 transition ease-in" />
    ),
    url: "https://www.instagram.com/sam.stas",
  },
  {
    title: "Website Portfolio",
    icon: (
      <FaUserCircle className="text-[1.2rem] text-zinc-400 hover:text-orange-400 transition ease-in" />
    ),
    url: "https://stas-samozvan.vercel.app",
  },
  {
    title: "LinkedIn",
    icon: (
      <BsLinkedin className="text-[1.2rem] text-zinc-400 hover:text-orange-400 transition ease-in" />
    ),
    url: "https://www.linkedin.com/in/stas-samozvan-ab9528290",
  },
];

function Footer() {
  return (
    <footer className="text-gray-400   body-font ">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          to="/accessories?category=all"
          className="flex title-font font-medium items-center md:justify-start justify-center text-[#202020]"
        >
          <AiOutlineApple className="text-[2rem] text-zinc-700" />
        </Link>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          &copy; 2024 Apple Accessories. All rights reserved.
        </p>
        <ul className="inline-flex gap-2 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {socialLinks.map((link) => (
            <li key={link.title}>
              <Link to={link.url} target="_blank" title={link.title}>
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

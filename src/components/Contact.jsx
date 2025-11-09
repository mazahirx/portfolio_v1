import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-[0.6rem]">Developed By Mazahir</h3>
      <div className="flex justify-between">
      <a
      href="https://www.linkedin.com/in/mazahir-mehdi/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white hover:text-blue-400 transition duration-300"
    >
      <FaLinkedin className="text-2xl" />
    </a>
    
      {/* GitHub */}
      <a
        href="https://github.com/mazahirx"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transform hover:scale-110 transition-all duration-150"
      >
        <FaGithub className="text-3xl" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61559457101991"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-500 transform hover:scale-110 transition-all duration-150"
      >
        <FaFacebook className="text-3xl" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-500 transform hover:scale-110 transition-all duration-150"
      >
        <FaInstagram className="text-3xl" />
      </a>
      </div>
    </div>
  )
}

export default Contact

import lnIcon from "../assets/linkedin.png";
import instaIcon from "../assets/instagram.png";
import twIcon from "../assets/twitter.png";
const FooterPage = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mb-auto">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Muhammadi Homeopathic</p>
          <p>Qutba, Attock</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/appointments">Appointments</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Developer Info</h2>
          <p>Email: mxbilal0@gmail.com</p>
          <p>Phone: +923495683110</p>
          <div className="flex gap-4 items-center mt-4">
            <a
              href="https://www.linkedin.com/in/mxbilal0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={lnIcon} width={20} />
            </a>

            <a
              href="https://twitter.com/mxbilal0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twIcon} width={20} />
            </a>
            <a
              href="https://www.instagram.com/mbilal22232/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instaIcon} width={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 pt-4 text-center">
        <p>&copy; 2023 Clinic Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterPage;

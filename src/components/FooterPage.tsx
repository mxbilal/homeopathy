import lnIcon from "../assets/linkedin.png";
import instaIcon from "../assets/instagram.png";
import fbIcon from "../assets/facebook.png";
import wpIcon from "../assets/whatsapp.png";

const FooterPage = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mb-auto">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Email: Ibneaminsami3@gmail.com</p>
          <p>Phone: +92 318-5685693</p>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61554388898128&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="mt-2" src={fbIcon} width={20} />
            </a>
            <a
              href="https://wa.me/+923185685693"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="mt-2" src={wpIcon} width={20} />
            </a>
            <a
              href="https://www.instagram.com/revive.youself/?igsh=ODA1NTc5OTg5Nw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="mt-2" src={instaIcon} width={20} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Appointments</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Developer Info</h2>
          <p>Email: mxbilal0@gmail.com</p>
          <p>Phone: +92 349-5683110</p>
          <div className="flex gap-4 items-center mt-4">
            <a
              href="https://www.linkedin.com/in/mxbilal0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={lnIcon} width={20} />
            </a>
            <a
              href="https://www.instagram.com/mbilal22232/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instaIcon} width={20} />
            </a>
            <a
              href="https://wa.me/+923495683110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={wpIcon} width={20} />
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

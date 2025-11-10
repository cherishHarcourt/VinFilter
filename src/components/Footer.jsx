import logo from "../assets/images/icons8-camera-100.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {
	library.add(faGithub);
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <div className="flex items-center gap-2 mb-3">
              {/* Logo */}
              <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center">
                <img src={logo} alt="logo" />
              </div>
              <span className="font-semibold text-lg">Vinfilter</span>
            </div>

            <p className="text-gray-600 text-sm mb-4">
              Experience the past through our vintage filters.
	  </p>

            <div className="flex gap-4">
              <a href="https://github.com/dessira" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.youtube.com/c/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Platform</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#">Vintage Filter</a></li>
              <li><a href="#">Black and White</a></li>
              <li><a href="#">Image Editor</a></li>
              <li><a href="#">AI Video Editor</a></li>
              <li><a href="#">Talking Photo</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Resource</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">Webinars</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Research</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>

        </div>
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© 2024 Vinfilter. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-black">Privacy policy</a>
            <a href="#" className="hover:text-black">Terms of use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


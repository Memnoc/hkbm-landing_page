const Footer = () => {
  return (
    <footer className="bg-pink-50/80 border-t border-pink-200  py-10 w-full">
      <div className="footer-container mx-auto px-8">
        <div className="grid grid-cols-3 gap-80">
          {/* Contact */}
          <div>
            <h3 className="text-purple-700 font-bold mb-4">Contact</h3>
            <p className="text-purple-600">hello@dollmaker.com</p>
            <p className="text-purple-600">+1 234 567 890</p>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-purple-700 font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-purple-600 hover:text-purple-800">
                Instagram
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800">
                Facebook
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-purple-700 font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

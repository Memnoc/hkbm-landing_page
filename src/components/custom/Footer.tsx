import { Wave } from "./Weave";

const Footer = () => {
  return (
    <footer className="relative bg-pink-100 pt-32 pb-16">
      <Wave color="white" className="-top-1" />

      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between gap-12">
          {/* Contact */}
          <div className="flex-1 min-w-[300px]">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Contact Us
            </h3>
            <p className="text-purple-700 mb-6">
              Connect with us to learn more about our crochet creations
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <button className="bg-pink-400 text-white px-8 py-3 rounded-full hover:bg-pink-500 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Links Container */}
          <div className="flex gap-16">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-purple-900 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-purple-700 hover:text-purple-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-700 hover:text-purple-900">
                    Our Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-700 hover:text-purple-900">
                    Custom Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-700 hover:text-purple-900">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-bold text-purple-900 mb-4">
                Connect
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-purple-700 hover:text-purple-900">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-700 hover:text-purple-900">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-700 hover:text-purple-900">
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-700 hover:text-purple-900">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

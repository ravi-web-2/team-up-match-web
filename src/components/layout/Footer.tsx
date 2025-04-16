
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-8">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium mb-4">HackMate</h3>
            <p className="text-sm text-gray-600">
              Find the perfect teammates for your next hackathon project.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/profiles" className="text-sm hover:underline">Find Teammates</Link>
              </li>
              <li>
                <Link to="/hackathons" className="text-sm hover:underline">Hackathons</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm hover:underline">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:underline">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} HackMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

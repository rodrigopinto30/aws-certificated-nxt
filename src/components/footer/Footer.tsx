import { Mountain, Facebook, Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Certifications", href: "/certs" },
  { name: "Labs Access", href: "/labs" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQs", href: "/faqs" },
];

const resourceLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Success Stories", href: "/success" },
  { name: "Support Center", href: "/support" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 border-t border-gray-700">
      <div className="container mx-auto px-4 max-w-7xl pt-12 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
          <div
            className="col-span-2 md:col-span-2 space-y-4"
            data-testid="footer-card"
          >
            <div
              className="flex items-center text-white text-2xl font-bold"
              data-testid="logo-section"
            >
              <Mountain className="w-6 h-6 mr-2 text-indigo-400" />
              CloudCertify Pro
            </div>
            <p className="text-sm max-w-xs">
              Dedicated to providing the best hands-on training for AWS, Azure,
              and Google Cloud certifications.
            </p>
            <div className="space-y-1 text-sm">
              <p>Email: support@cloudcertify.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>

          <div className="col-span-1" data-testid="footer-card">
            <h4 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-indigo-400 transition-colors duration-200"
                    data-testid={`link-${link.name
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1" data-testid="footer-card">
            <h4 className="text-lg font-semibold text-white mb-3">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1" data-testid="footer-card">
            <h4 className="text-lg font-semibold text-white mb-3">Connect</h4>
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:text-indigo-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:text-indigo-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="hover:text-indigo-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                aria-label="GitHub"
                className="hover:text-indigo-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p data-testid="copyright">
            &copy; {new Date().getFullYear()} CloudCertify Pro. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

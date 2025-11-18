import { Mail, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://wa.me/254702195761",
      icon: FaWhatsapp,
      label: "Chat on WhatsApp",
      color: "hover:text-[#25D366]",
    },
    {
      href: "https://linkedin.com/in/margaret-gichia",
      icon: Linkedin,
      label: "View LinkedIn Profile",
      color: "hover:text-[#0077B5]",
    },
    {
      href: "mailto:gichiamargaret04@gmail.com",
      icon: Mail,
      label: "Send an Email",
      color: "hover:text-accent",
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className={`text-2xl transition-all duration-300 hover:scale-110 ${link.color}`}
              >
                <link.icon />
              </a>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-primary-foreground/80">
              &copy; {currentYear} Margaret Gichia | Financial Advisory.
            </p>
            <p className="text-sm italic text-primary-foreground/70">
              Let me help you have that{" "}
              <strong className="text-secondary font-semibold">
                financial freedom
              </strong>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

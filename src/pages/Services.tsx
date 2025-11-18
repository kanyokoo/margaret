import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HandCoins,
  TrendingUp,
  Umbrella,
  PiggyBank,
  Shield,
  Wallet,
  Sprout,
  Building2,
  Users,
  Coins,
  Mail,
  Linkedin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import wealthImage from "@/assets/wealth-protection.jpg";

const Services = () => {
  const individualServices = [
    {
      icon: HandCoins,
      title: "Financial Planning",
      description:
        "Develop a clear roadmap to achieve your personal financial independence.",
      service: "Financial Planning",
    },
    {
      icon: TrendingUp,
      title: "Savings & Investment Strategies",
      description:
        "Craft tailored plans to grow your wealth through smart savings and investments.",
      service: "Savings & Investment Strategies",
    },
    {
      icon: Umbrella,
      title: "Retirement Planning",
      description:
        "Secure a comfortable and worry-free retirement with strategic planning.",
      service: "Retirement Planning",
    },
    {
      icon: PiggyBank,
      title: "Emergency & Sinking Fund Management",
      description:
        "Build robust funds for unexpected events and future large expenses.",
      service: "Emergency & Sinking Fund Management",
    },
    {
      icon: Shield,
      title: "Insurance & Income Protection",
      description:
        "Safeguard your assets and loved ones with comprehensive insurance strategies.",
      service: "Insurance & Income Protection",
    },
    {
      icon: Wallet,
      title: "Budgeting & Debt Management",
      description:
        "Gain control over your finances, manage debt, and optimize your spending.",
      service: "Budgeting & Debt Management",
    },
    {
      icon: Sprout,
      title: "Goal Setting & Generational Wealth Building",
      description:
        "Set ambitious financial goals and establish a legacy for future generations.",
      service: "Goal Setting & Generational Wealth Building",
    },
  ];

  const businessServices = [
    {
      icon: Building2,
      title: "Financial Consultations",
      description:
        "Strategic financial advice to boost your business's growth and stability.",
      service: "Financial Consultations",
    },
    {
      icon: Users,
      title: "Group Investment",
      description:
        "Develop effective investment plans for groups, chamas, and corporate entities.",
      service: "Group Investment",
    },
    {
      icon: Coins,
      title: "Cash Flow Optimization",
      description:
        "Improve your organization's liquidity and financial efficiency.",
      service: "Cash Flow Optimization",
    },
  ];

  const ServiceCard = ({
    icon: Icon,
    title,
    description,
    service,
  }: {
    icon: any;
    title: string;
    description: string;
    service: string;
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleWhatsApp = () => {
      const message = `Hello, I would like to learn more about the ${service} service mentioned on your website. Could you please provide additional information?”`;
      const whatsappUrl = `https://wa.me/254702195761?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
    };

    return (
      <Card
        className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-8 space-y-4">
          <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>

          <div
            className={`transition-all duration-300 overflow-hidden ${
              isHovered ? "max-h-20 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <button
              onClick={handleWhatsApp}
              className="text-sm font-semibold text-primary hover:text-primary-light transition-colors flex items-center gap-2 group/btn"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>
                Want to know more? <strong className="underline">Reach out</strong> via
                WhatsApp!
              </span>
            </button>
          </div>
        </CardContent>
      </Card>
    );
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      info: "gichiamargaret04@gmail.com",
      href: "mailto:gichiamargaret04@gmail.com",
      cta: "Send an Email",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      info: "+254 702 195 761",
      href: "https://wa.me/254702195761",
      cta: "Chat on WhatsApp",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      info: "Connect Professionally",
      href: "https://linkedin.com/in/margaret-gichia",
      cta: "View Profile",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Page Title */}
        <section
          className="relative py-20 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(10, 36, 99, 0.95) 0%, rgba(20, 184, 166, 0.85) 100%), url(${wealthImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              My Services
            </h1>
            <p className="text-xl text-white/90 animate-fade-in">
              Customized strategies for your financial well-being.
            </p>
          </div>
        </section>

        {/* Individual Services */}
        <ScrollAnimation>
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-primary">
                For Individuals & Families
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Personalized financial services to help you achieve your life goals
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {individualServices.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Business Services */}
        <ScrollAnimation>
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-primary">
                For Businesses, Companies & Chamas
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Strategic financial solutions to empower your organization
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {businessServices.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Contact Section */}
        <ScrollAnimation>
          <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Let's Connect
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ready to take the next step? Reach out today for a complimentary
                  consultation.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group"
                  >
                    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full border-2 hover:border-primary/50">
                      <CardContent className="p-8 text-center space-y-4">
                        <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                          <method.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">{method.title}</h3>
                        <p className="text-muted-foreground">{method.info}</p>
                        <div className="pt-2 font-semibold text-primary group-hover:text-primary-light transition-colors">
                          {method.cta}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
};

export default Services;

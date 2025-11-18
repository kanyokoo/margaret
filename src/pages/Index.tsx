import { Link } from "react-router-dom";
import { TrendingUp, Target, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/about_2.jpg";
import financialBg from "@/assets/financial-growth-bg.jpg";

const Index = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Savings & Investment Strategies",
      description:
        "Grow your wealth with a personalized investment plan that aligns with your goals and risk tolerance.",
    },
    {
      icon: Target,
      title: "Retirement & Goal Planning",
      description:
        "Secure your future. We'll build a clear, actionable strategy to help you retire with confidence and achieve your dreams.",
    },
    {
      icon: Shield,
      title: "Insurance & Wealth Protection",
      description:
        "Protect what matters most. We'll review your needs and find the right strategies to safeguard your family and assets.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section
          className="relative py-24 md:py-32 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(10, 36, 99, 0.95) 0%, rgba(10, 36, 99, 0.85) 50%, rgba(20, 184, 166, 0.8) 100%), url(${financialBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  From Financial Confusion to{" "}
                  <span className="text-secondary">Financial Clarity</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90">
                  Personalized financial planning and coaching for individuals,
                  businesses, and chamas across Kenya.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <Link to="/services">Check out my services</Link>
                </Button>
              </div>

              <div className="flex justify-center animate-scale-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/30 blur-3xl rounded-full animate-glow" />
                  <img
                    src={heroImage}
                    alt="Margaret Gichia - Professional Financial Advisor"
                    className="relative w-80 h-80 rounded-full object-cover border-8 border-secondary shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* About Snippet */}
        <ScrollAnimation>
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">
                Guiding You on Your Path to Financial Freedom
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm a Certified Financial Advisor based in Kenya, serving clients{" "}
                <strong className="text-foreground">locally and across the diaspora</strong>.
                With over <strong className="text-primary">5 years of experience</strong>,
                I've helped more than{" "}
                <strong className="text-primary">700 individuals, 10+ companies, and 10+ chamas</strong>{" "}
                move from financial confusion to clarity. I'm passionate about empowering
                you to make smart, strategic, and confident money decisions.
              </p>
              <Link
                to="/about#my-approach"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors group"
              >
                Learn More About My Approach
                <span className="ml-2 transform group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </section>
        </ScrollAnimation>

        {/* Services Section */}
        <ScrollAnimation>
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  How I Can Help You Grow
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  My services are designed to provide you with a clear roadmap for
                  your financial future.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card"
                  >
                    <CardContent className="p-8 space-y-4">
                      <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Final CTA */}
        <ScrollAnimation>
          <section className="py-20 gradient-primary text-white">
            <div className="container mx-auto px-4 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Start Your Financial Freedom Journey?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                You don't have to figure out money alone. Let's connect and create a
                clear plan for your future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                >
                  <Link to="/services#contact">Let's Connect Today</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary"
                >
                  <Link to="/about">Learn More About Me</Link>
                </Button>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

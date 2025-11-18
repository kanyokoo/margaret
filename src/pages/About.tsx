import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import professionalImage from "@/assets/about_3.jpg";

const About = () => {
  const stats = [
    { number: 700, label: "Individuals Guided", suffix: "+" },
    { number: 10, label: "Companies Empowered", suffix: "+" },
    { number: 10, label: "Chamas Strengthened", suffix: "+" },
    { number: 5, label: "Years of Experience", suffix: "+" },
  ];

  const StatCounter = ({ target, suffix }: { target: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const element = ref.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              let start = 0;
              const duration = 2000;
              const increment = target / (duration / 16);

              const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                  setCount(target);
                  clearInterval(timer);
                } else {
                  setCount(Math.floor(start));
                }
              }, 16);

              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      return () => observer.disconnect();
    }, [target]);

    return (
      <div ref={ref} className="text-5xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
    );
  };

  const processSteps = [
    { num: "1", title: "Listen", desc: "Understand your goals, challenges, and habits." },
    { num: "2", title: "Plan", desc: "Create a customized strategy that fits your lifestyle." },
    { num: "3", title: "Support", desc: "Walk with you as a Financial Accountability Partner." },
    { num: "4", title: "Grow", desc: "Refine and scale your plan as your life evolves." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Page Title */}
        <section className="gradient-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              About Margaret Gichia
            </h1>
            <p className="text-xl text-white/90 animate-fade-in">
              Your Partner in Financial Clarity and Growth
            </p>
          </div>
        </section>

        {/* About Content */}
        <ScrollAnimation>
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="flex justify-center mb-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-lg" />
                  <img
                    src={professionalImage}
                    alt="Margaret Gichia in a professional setting"
                    className="relative w-full max-w-lg rounded-2xl shadow-2xl border-4 border-primary"
                  />
                </div>
              </div>

              <div className="space-y-8 text-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-gradient-primary">
                    My Commitment to You
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    You don't have to figure out money alone. I'm here to help you make
                    clear, confident, and strategic financial decisions — whether you're
                    planning for retirement, building wealth, or growing your business.
                  </p>
                </div>

                <div id="my-approach" className="pt-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">My Approach</h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    My approach blends financial advising with coaching — empowering
                    clients to make smart, strategic, and confident money decisions.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {processSteps.map((step, index) => (
                      <Card
                        key={index}
                        className="p-6 text-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary bg-muted/30"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                            {step.num}
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-2 text-primary">
                              {step.title}
                            </h4>
                            <p className="text-muted-foreground">{step.desc}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Stats Bar */}
        <ScrollAnimation>
          <section className="py-20 bg-muted/30 border-y border-border">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <StatCounter target={stat.number} suffix={stat.suffix} />
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
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
                Ready for the Next Step?
              </h2>
              <p className="text-lg text-white/90">
                Explore my services or return to the homepage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link to="/services">Check Out My Services</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary"
                >
                  <Link to="/">🏠 Back to Home</Link>
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

export default About;

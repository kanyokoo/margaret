import ScrollAnimation from "./ScrollAnimation";
import IRA from "@/assets/IRA.jpg";
import CMA from "@/assets/CMA_Logo.png";
import RBA from "@/assets/RBA_LOGO.png";




const TrustBar = () => {
  const logos = [
    { src: IRA, alt: "IRA Logo" },
    { src: CMA, alt: "CMA Logo" },
    { src: RBA, alt: "RBA Logo" },
  ];

  // Duplicate logos for seamless scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <ScrollAnimation>
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-xl font-bold text-primary mb-8">
            Certified & Recognized By:
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-8 flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 w-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default TrustBar;

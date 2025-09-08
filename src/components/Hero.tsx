import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.location.href = "https://www.facebook.com/profile.php?id=61570451796499";
  };

  const handleQuoteClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="bg-background min-h-screen flex items-center py-16 px-4 pt-32 pb-0">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="w-6 h-6" />
                <span className="font-semibold text-sm tracking-wide uppercase">
                  NK Domestic & Commercial Cleaning LTD
                </span>
              </div>
              
              <h1 className="font-thicccboi font-bold text-5xl lg:text-6xl text-foreground leading-tight">
                From <span className="text-primary">Chaos to Clean</span>—Professionals You Can Trust
              </h1>
              
              <p className="text-xl text-muted-foreground font-medium max-w-lg leading-relaxed">
                Domestic, commercial, holiday-let and specialist cleaning across Kilmarnock & surrounding areas. 
                Reliable, non-judgemental professionals who respect your space.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={handleQuoteClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 h-auto rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Free Quote
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                variant="outline"
                className="text-lg px-10 py-6 h-auto rounded-full font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Message on Facebook
              </Button>
            </div>






          </div>

          {/* Hero Images */}
          <div className="flex flex-col items-center lg:items-end space-y-8">
            <div className="flex justify-center lg:justify-end items-start -mt-48">
              <img
                src="/greenhero.png"
                alt="Professional cleaning services in Kilmarnock - domestic, commercial, and specialist cleaning"
                className="w-full max-w-5xl h-[800px] lg:h-[950px] object-contain"
              />
            </div>
            

            

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
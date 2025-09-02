import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Clock, Star, CheckCircle, Heart } from "lucide-react";

const AboutUs = () => {
  const handleQuoteClick = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const values = [
    {
      icon: Shield,
      title: "Trained & Vetted Team",
      description: "All our cleaners are fully trained, background-checked, and insured for your peace of mind."
    },
    {
      icon: Heart,
      title: "Respectful & Confidential",
      description: "We treat every space with care and discretion, maintaining complete confidentiality."
    },
    {
      icon: Users,
      title: "Local Small Business",
      description: "Proudly serving Kilmarnock and surrounding areas with personal, reliable service."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "We work around your schedule with early morning, evening, and weekend availability."
    },
    {
      icon: Star,
      title: "Professional Standards",
      description: "Consistent, high-quality cleaning that meets and exceeds your expectations."
    },
    {
      icon: CheckCircle,
      title: "Fully Insured",
      description: "Complete coverage for your property and our team during all cleaning operations."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <span className="text-sm font-semibold tracking-wide uppercase">
                  About NK Cleaning
                </span>
              </div>
              
              <h2 className="font-thicccboi font-bold text-4xl lg:text-5xl text-foreground leading-tight">
                No Judgement. <span className="text-primary">Just Results.</span>
              </h2>
              
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                We built NK on simple values: show up, do it right, and treat people with respect. 
                Our friendly team is trained for everything from day-to-day cleaning to specialist 
                biohazard and hoarding work.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work discreetly and professionally, so you can feel comfortable inviting us into 
                your space. Whether it's a regular home clean, an end-of-tenancy, a busy office, 
                or sensitive specialist work, we deliver spotless results with care and discretion.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <h3 className="font-thicccboi font-bold text-2xl text-foreground">
                Why Choose NK Cleaning?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.slice(0, 4).map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <value.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={handleQuoteClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 h-auto rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Request a Quote
              </Button>
              <Button 
                variant="outline"
                className="text-lg px-8 py-4 h-auto rounded-full font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Meet the Team
              </Button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="space-y-6">
            {/* Main Image Card */}
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="relative">
                <img
                  src="/lovable-uploads/garden1.jpg"
                  alt="Professional cleaning team at work"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-thicccboi font-bold text-xl">Professional Team</h4>
                  <p className="text-sm opacity-90">Trained, insured, and ready to help</p>
                </div>
              </div>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 border-0 bg-primary/5">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </Card>
              <Card className="text-center p-6 border-0 bg-primary/5">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Service</div>
              </Card>
            </div>

            {/* Trust Badge */}
            <Card className="p-6 border-0 bg-gradient-to-r from-primary/10 to-primary/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Fully Insured & Certified</h4>
                  <p className="text-sm text-muted-foreground">Complete peace of mind for your property</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
import { Card, CardContent } from "@/components/ui/card";
import { Award, FileCheck, Eye } from "lucide-react";
import { useState } from "react";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const certificates = [
    {
      id: "sepa",
      title: "SEPA Registered",
      description: "Scottish Environment Protection Agency Registration",
      image: "/SEPA.jpeg",
      details: "Environmental compliance certification ensuring proper waste management and environmental standards."
    },
    {
      id: "smas",
      title: "SMAS Registered", 
      description: "Safety Management Advisory Service Registration",
      image: "/SMAS.png",
      details: "Safety management systems certification demonstrating commitment to health and safety standards."
    }
  ];

  const handleCertificateClick = (certificateId: string) => {
    setSelectedCertificate(certificateId);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Award className="w-8 h-8" />
            <span className="font-semibold text-lg tracking-wide uppercase">
              Professional Certifications
            </span>
          </div>
          
          <h2 className="font-thicccboi font-bold text-4xl lg:text-5xl text-foreground">
            Our <span className="text-primary">Certifications</span> & Qualifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We hold industry-recognized certifications that demonstrate our commitment to professional standards, 
            safety, and environmental compliance.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {certificates.map((cert) => (
            <Card key={cert.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Certificate Image */}
                  <div className="relative overflow-hidden rounded-lg bg-muted/50 aspect-[4/3]">
                    <img
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                        target.alt = "Certificate placeholder";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3">
                        <Eye className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Certificate Info */}
                  <div className="space-y-2">
                    <h3 className="font-thicccboi font-bold text-xl text-foreground">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.details}
                    </p>
                  </div>
                  
                  {/* View Button */}
                  <button
                    onClick={() => handleCertificateClick(cert.id)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <FileCheck className="w-4 h-4" />
                    View Certificate
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="text-center bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-thicccboi font-bold text-2xl text-foreground">
              Certified & Compliant
            </h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our certifications ensure we meet the highest industry standards for safety, environmental compliance, 
            and professional service delivery. You can trust us to handle your cleaning needs with expertise and care.
          </p>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-2xl max-w-4xl max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-thicccboi font-bold text-2xl text-foreground">
                  {certificates.find(c => c.id === selectedCertificate)?.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-muted-foreground hover:text-foreground text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="space-y-4">
                <img
                  src={certificates.find(c => c.id === selectedCertificate)?.image}
                  alt={`${certificates.find(c => c.id === selectedCertificate)?.title} Certificate`}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                    target.alt = "Certificate placeholder";
                  }}
                />
                <p className="text-muted-foreground">
                  {certificates.find(c => c.id === selectedCertificate)?.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;

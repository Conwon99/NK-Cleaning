import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

const SEOHead = ({
  title = "NK Domestic & Commercial Cleaning LTD - Professional Cleaning Services in Kilmarnock & Ayrshire",
  description = "Professional cleaning services in Kilmarnock & Ayrshire. Domestic, commercial, holiday-let turnarounds, biohazard, carpet, oven & caravan cleaning. Fully insured, trained specialists. Free quotes available.",
  keywords = "cleaning services Kilmarnock, domestic cleaning Ayrshire, commercial cleaning, holiday let cleaning, biohazard cleaning, carpet cleaning, oven cleaning, caravan cleaning, laundry services, professional cleaners, SEPA registered, SMAS registered",
  canonical = "https://nkcleaning.co.uk",
  ogTitle = "NK Domestic & Commercial Cleaning LTD - From Chaos to Clean",
  ogDescription = "Professional cleaning services across Kilmarnock & Ayrshire. Domestic, commercial, and specialist cleaning with trained professionals. Fully insured and certified.",
  ogImage = "https://nkcleaning.co.uk/cleanerv2%20-%20Edited.png",
  twitterTitle = "NK Domestic & Commercial Cleaning LTD - Professional Cleaning Services",
  twitterDescription = "From chaos to clean—trusted domestic & commercial cleaners serving Kilmarnock & Ayrshire. Fully insured, professional service.",
  twitterImage = "https://nkcleaning.co.uk/cleanerv2%20-%20Edited.png"
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }
    
    // Update Open Graph tags
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute('content', ogTitle);
    }
    
    const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionMeta) {
      ogDescriptionMeta.setAttribute('content', ogDescription);
    }
    
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', ogImage);
    }
    
    // Update Twitter tags
    const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitleMeta) {
      twitterTitleMeta.setAttribute('content', twitterTitle);
    }
    
    const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescriptionMeta) {
      twitterDescriptionMeta.setAttribute('content', twitterDescription);
    }
    
    const twitterImageMeta = document.querySelector('meta[name="twitter:image"]');
    if (twitterImageMeta) {
      twitterImageMeta.setAttribute('content', twitterImage);
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription, twitterImage]);

  return null; // This component doesn't render anything
};

export default SEOHead;

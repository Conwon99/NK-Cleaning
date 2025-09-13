export interface ServiceMetaData {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const serviceMetaData: Record<string, ServiceMetaData> = {
  domestic: {
    title: "Domestic Cleaning Services Kilmarnock | NK Cleaning - Weekly & Deep Cleans",
    description: "Professional domestic cleaning services in Kilmarnock & Ayrshire. Weekly, fortnightly, one-off deep cleans & end-of-tenancy cleaning. Non-judgemental, reliable cleaners. Free quotes.",
    keywords: "domestic cleaning Kilmarnock, house cleaning Ayrshire, weekly cleaning, deep clean, end of tenancy cleaning, home cleaning services, regular cleaning, housekeeper services",
    ogTitle: "Domestic Cleaning Services Kilmarnock | NK Cleaning",
    ogDescription: "Professional domestic cleaning in Kilmarnock & Ayrshire. Weekly, fortnightly, deep cleans & end-of-tenancy services. Reliable, non-judgemental cleaners.",
    twitterTitle: "Domestic Cleaning Services Kilmarnock | NK Cleaning",
    twitterDescription: "Professional domestic cleaning in Kilmarnock & Ayrshire. Weekly, fortnightly, deep cleans & end-of-tenancy services."
  },
  
  commercial: {
    title: "Commercial Cleaning Services Kilmarnock | NK Cleaning - Office & Business Cleaning",
    description: "Professional commercial cleaning services in Kilmarnock & Ayrshire. Office cleaning, retail spaces, out-of-hours service with uniformed team. Business premises cleaning specialists.",
    keywords: "commercial cleaning Kilmarnock, office cleaning Ayrshire, business cleaning, retail cleaning, commercial premises cleaning, corporate cleaning, workplace cleaning",
    ogTitle: "Commercial Cleaning Services Kilmarnock | NK Cleaning",
    ogDescription: "Professional commercial cleaning in Kilmarnock & Ayrshire. Office, retail & business premises cleaning with out-of-hours service available.",
    twitterTitle: "Commercial Cleaning Services Kilmarnock | NK Cleaning",
    twitterDescription: "Professional commercial cleaning in Kilmarnock & Ayrshire. Office, retail & business premises cleaning with out-of-hours service."
  },
  
  "holiday-let": {
    title: "Holiday Let Turnaround Services Kilmarnock | NK Cleaning - Airbnb Cleaning",
    description: "Fast, reliable holiday let turnaround services in Kilmarnock & Ayrshire. Airbnb changeovers, laundry & linen services, restocking support. 24/7 availability for holiday let owners.",
    keywords: "holiday let cleaning Kilmarnock, Airbnb cleaning Ayrshire, holiday home turnaround, vacation rental cleaning, changeover cleaning, holiday let management, short term rental cleaning",
    ogTitle: "Holiday Let Turnaround Services Kilmarnock | NK Cleaning",
    ogDescription: "Fast, reliable holiday let turnaround services in Kilmarnock & Ayrshire. Airbnb changeovers, laundry & linen services with 24/7 availability.",
    twitterTitle: "Holiday Let Turnaround Services Kilmarnock | NK Cleaning",
    twitterDescription: "Fast, reliable holiday let turnaround services in Kilmarnock & Ayrshire. Airbnb changeovers & laundry services."
  },
  
  biohazard: {
    title: "Biohazard & Specialist Cleaning Services Kilmarnock | NK Cleaning - Trauma Clean",
    description: "Professional biohazard & specialist cleaning services in Kilmarnock & Ayrshire. Trauma cleans, needle sweeps, hoarding support with trained professionals. Discreet, compassionate service.",
    keywords: "biohazard cleaning Kilmarnock, trauma cleaning Ayrshire, specialist cleaning, needle sweep, hoarding cleanup, crime scene cleaning, professional biohazard cleaning",
    ogTitle: "Biohazard & Specialist Cleaning Services Kilmarnock | NK Cleaning",
    ogDescription: "Professional biohazard & specialist cleaning in Kilmarnock & Ayrshire. Trauma cleans, needle sweeps & hoarding support with trained professionals.",
    twitterTitle: "Biohazard & Specialist Cleaning Services Kilmarnock | NK Cleaning",
    twitterDescription: "Professional biohazard & specialist cleaning in Kilmarnock & Ayrshire. Trauma cleans, needle sweeps & hoarding support."
  },
  
  carpet: {
    title: "Carpet Cleaning Services Kilmarnock | NK Cleaning - Stain Removal & Deep Clean",
    description: "Professional carpet cleaning services in Kilmarnock & Ayrshire. Stain removal, odour neutralisation, deep cleaning with quick-dry methods. Carpet cleaning specialists with professional equipment.",
    keywords: "carpet cleaning Kilmarnock, carpet cleaning Ayrshire, stain removal, carpet deep clean, odour neutralisation, professional carpet cleaning, carpet restoration",
    ogTitle: "Carpet Cleaning Services Kilmarnock | NK Cleaning",
    ogDescription: "Professional carpet cleaning in Kilmarnock & Ayrshire. Stain removal, odour neutralisation & deep cleaning with quick-dry methods available.",
    twitterTitle: "Carpet Cleaning Services Kilmarnock | NK Cleaning",
    twitterDescription: "Professional carpet cleaning in Kilmarnock & Ayrshire. Stain removal, odour neutralisation & deep cleaning services."
  },
  
  oven: {
    title: "Oven Cleaning Services Kilmarnock | NK Cleaning - Professional Oven Deep Clean",
    description: "Professional oven cleaning services in Kilmarnock & Ayrshire. Burnt-on grease removal, glass restoration, complete deodorisation. No elbow grease needed - we do the hard work!",
    keywords: "oven cleaning Kilmarnock, oven cleaning Ayrshire, oven deep clean, grease removal, oven restoration, professional oven cleaning, oven glass cleaning",
    ogTitle: "Oven Cleaning Services Kilmarnock | NK Cleaning",
    ogDescription: "Professional oven cleaning in Kilmarnock & Ayrshire. Burnt-on grease removal, glass restoration & complete deodorisation. No elbow grease needed!",
    twitterTitle: "Oven Cleaning Services Kilmarnock | NK Cleaning",
    twitterDescription: "Professional oven cleaning in Kilmarnock & Ayrshire. Burnt-on grease removal, glass restoration & complete deodorisation."
  },
  
  caravan: {
    title: "Caravan & Holiday Home Cleaning Services Kilmarnock | NK Cleaning",
    description: "Professional caravan & holiday home cleaning services in Kilmarnock & Ayrshire. Touring vans & static caravans with interior refresh & optional exterior cleaning. Caravan specialists.",
    keywords: "caravan cleaning Kilmarnock, holiday home cleaning Ayrshire, touring van cleaning, static caravan cleaning, caravan deep clean, mobile home cleaning",
    ogTitle: "Caravan & Holiday Home Cleaning Services Kilmarnock | NK Cleaning",
    ogDescription: "Professional caravan & holiday home cleaning in Kilmarnock & Ayrshire. Touring vans & static caravans with interior refresh & exterior options.",
    twitterTitle: "Caravan & Holiday Home Cleaning Services Kilmarnock | NK Cleaning",
    twitterDescription: "Professional caravan & holiday home cleaning in Kilmarnock & Ayrshire. Touring vans & static caravans with interior refresh."
  },
  
  laundry: {
    title: "Laundry Services Kilmarnock | NK Cleaning - Wash, Dry, Fold & Linen Management",
    description: "Professional laundry services in Kilmarnock & Ayrshire. Wash, dry, fold for domestic & holiday-let clients with linen management. Professional laundry service for busy households.",
    keywords: "laundry services Kilmarnock, wash dry fold Ayrshire, linen management, holiday let laundry, domestic laundry service, professional laundry, ironing service",
    ogTitle: "Laundry Services Kilmarnock | NK Cleaning",
    ogDescription: "Professional laundry services in Kilmarnock & Ayrshire. Wash, dry, fold for domestic & holiday-let clients with linen management support.",
    twitterTitle: "Laundry Services Kilmarnock | NK Cleaning",
    twitterDescription: "Professional laundry services in Kilmarnock & Ayrshire. Wash, dry, fold for domestic & holiday-let clients."
  }
};

export const getServiceMetaData = (serviceKey: string): ServiceMetaData => {
  return serviceMetaData[serviceKey] || serviceMetaData.domestic;
};

/**
 * SEO Configuration for Speedway Scholarship Website
 * This file centralizes all SEO-related configuration settings
 */

// Analytics IDs
export const ANALYTICS_CONFIG = {
  // Google Analytics 4 Measurement ID (replace with actual ID in production)
  googleAnalyticsId: "G-MEASUREMENT_ID",

  // Microsoft Clarity Project ID (replace with actual ID in production)
  clarityProjectId: "CLARITY_ID",

  // Feature flags for analytics
  enableEnhancedEcommerce: true,
  enableWebVitals: true,
  enableErrorTracking: true,
};

// Performance optimization settings
export const PERFORMANCE_CONFIG = {
  enableWebVitals: true,
  enablePrefetch: true,
  enableCriticalCSS: true,

  // Pages to prefetch for improved navigation experience
  prefetchUrls: ["/about", "/apply", "/donate", "/speedway", "/contact-us"],

  // Resources to preconnect to
  preconnectDomains: [
    "https://fonts.googleapis.com",
    "https://www.googletagmanager.com",
    "https://msg.flightschoolcrm.com",
  ],
};

// Schema markup configuration
export const SCHEMA_CONFIG = {
  // Organization details
  organization: {
    name: "Speedway Flight Training Scholarship Fund",
    url: "https://speedwayscholarship.org",
    logo: "https://speedwayscholarship.org/speedway-flight-training-hampton-georgia-logo-red.png",
    telephone: "+1-770-957-1715",
    email: "info@speedwayscholarship.org",
  },

  // Location details
  location: {
    name: "Atlanta Speedway Airport",
    streetAddress: "1729 McDonough Rd",
    addressLocality: "Hampton",
    addressRegion: "GA",
    postalCode: "30228",
    addressCountry: "US",
    latitude: 33.3895,
    longitude: -84.3467,
  },

  // Business details
  business: {
    serviceRadius: "50", // miles
    priceRange: "$$",
    currencyAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
  },
};

// Structured data for common entities
export const STRUCTURED_DATA = {
  // Course schema defaults
  courseDefaults: {
    provider: "Speedway Flight Training",
    courseCode: "PPL-001",
    timeRequired: "P6M", // ISO 8601 duration format - 6 months
    educationalLevel: "Beginner",
    educationalCredentialAwarded: "FAA Private Pilot Certificate",
  },

  // Event schema defaults
  eventDefaults: {
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    isAccessibleForFree: true,
    organizer: "Speedway Flight Training",
  },
};

// SEO metadata defaults
export const SEO_DEFAULTS = {
  titleSuffix: " | Speedway Flight Training Scholarship",
  descriptionMaxLength: 160,
  defaultKeywords: [
    "flight training scholarship",
    "aviation education",
    "pilot certification",
    "Hampton GA flight school",
    "Atlanta flight training",
  ],
};

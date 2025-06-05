// Type declarations for Web Vitals and Performance API extensions

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface FirstInputDelay extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

// Extend the Window interface to allow for web-vitals library
interface Window {
  webVitals?: {
    getCLS: Function;
    getFID: Function;
    getFCP: Function;
    getLCP: Function;
    getTTFB: Function;
  };
  trackScholarshipEvent?: (
    action: string,
    details?: Record<string, any>,
  ) => void;
  trackContactEvent?: (action: string, method?: string) => void;
}

// Extend the PerformanceNavigationTiming interface
interface PerformanceNavigationTiming {
  loadEventStart: number;
  loadEventEnd: number;
}

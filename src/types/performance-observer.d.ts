// Add to tsconfig.json to include these declarations
// "include": ["src/**/*", "src/types/**/*.d.ts"]

declare global {
  interface PerformanceObserverEntryList {
    getEntries(): Array<
      | PerformanceEntry
      | LayoutShift
      | FirstInputDelay
      | PerformanceNavigationTiming
    >;
  }
}

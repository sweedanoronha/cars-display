// jest.setup.js
import '@testing-library/jest-dom';

// Mock ResizeObserver if not available (useful for Node environments like Jest)
if (typeof window !== 'undefined' && !window.ResizeObserver) {
    class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
  
    window.ResizeObserver = ResizeObserver;
  }

  // Mock IntersectionObserver if not available (useful for Node environments like Jest)
if (typeof window !== 'undefined' && !window.IntersectionObserver) {
    class IntersectionObserver {
      constructor(callback) {
        this.callback = callback;
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    }
  
    window.IntersectionObserver = IntersectionObserver;
  }


  
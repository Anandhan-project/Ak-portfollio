import '@testing-library/jest-dom';

// Robust localStorage mock
const createStorageMock = () => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
    key: (index: number) => Object.keys(store)[index] || null,
    get length() {
      return Object.keys(store).length;
    },
  };
};

const storageInstance = createStorageMock();

Object.defineProperty(window, 'localStorage', {
  value: storageInstance,
  writable: true,
  configurable: true,
});

try {
  Object.defineProperty(globalThis, 'localStorage', {
    value: storageInstance,
    writable: true,
    configurable: true,
  });
} catch {
  // Ignore in environments where globalThis.localStorage is read-only
}

// Polyfill window.matchMedia for tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// Polyfill IntersectionObserver for tests
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  disconnect() {}
  observe() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
  unobserve() {}
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

// Polyfill HTMLCanvasElement getContext
HTMLCanvasElement.prototype.getContext = (() => {
  return {
    fillRect: () => {},
    clearRect: () => {},
    getImageData: (_x = 0, _y = 0, w = 1, h = 1) => ({
      data: new Uint8ClampedArray(w * h * 4),
    }),
    putImageData: () => {},
    createImageData: (w = 1, h = 1) => ({
      data: new Uint8ClampedArray(w * h * 4),
    }),
    drawImage: () => {},
    beginPath: () => {},
    arc: () => {},
    fill: () => {},
  } as unknown as RenderingContext;
}) as unknown as typeof HTMLCanvasElement.prototype.getContext;

export {};

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeMatchAllText(texts: string[]): R;
    }
  }
}

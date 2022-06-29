// Consider making an interfaces folder as having an interface file
// for every single interface implementation might become unwieldy
export default interface CounterRepositoryInterface {
  getCount: () => Promise<number>;
  increment: (by: number) => Promise<void>;
  decrement: (by: number) => Promise<void>;
};

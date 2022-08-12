export interface IUseCase<I, O> {
  execute(props: I, ...args: unknown[]): Promise<O>;
}

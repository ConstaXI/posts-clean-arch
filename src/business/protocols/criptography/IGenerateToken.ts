export interface IGenerateToken {
  generate(id: string): Promise<string>;
}

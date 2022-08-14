export type Paginated<T> = {
  page: number;
  limit: number;
  results: T[];
};

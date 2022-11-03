export enum SortTypes { asc = 'asc' };
export type Sort = { sortProperty: SortTypes };
export type FetchLaunchParams = { sort:Sort, page:number } 
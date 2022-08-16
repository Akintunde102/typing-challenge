export type Stage = | -1 | 0 | 1 | 2 | 3;

export type Duration = number;

export interface Score { points: number; speed: number; }

export interface TimeDetails<T extends number | string> { hours: T; minutes: T; seconds: T; }
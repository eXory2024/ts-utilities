export type OnlyTuple<T> = T extends readonly [
	...infer Elements
] ? T : unknown

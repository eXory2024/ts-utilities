import type {TupleOf} from "./TupleOf.ts"

export type WholeNumberDecrement<
	N extends number
> =
	TupleOf<unknown, N> extends [infer X, ...infer Rest] ?
		Rest["length"] : never

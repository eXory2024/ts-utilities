import type {TupleOf} from "./TupleOf.ts"

export type WholeNumberIncrement<
	N extends number
> = [
	...TupleOf<unknown, N>,
	unknown
]["length"]

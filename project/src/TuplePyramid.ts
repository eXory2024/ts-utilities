import type {TupleOf} from "../export/TupleOf.ts"

export type TuplePyramid<
	T,
	N extends number,
	Result extends readonly unknown[] = []
> =
	Result["length"] extends N ?
		Result :
		TuplePyramid<
			T, N, [
				...Result,
				TupleOf<T, Result["length"]>
			]
		>

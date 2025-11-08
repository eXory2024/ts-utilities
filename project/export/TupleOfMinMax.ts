import type {OnlyLiteral} from "./OnlyLiteral.ts"
import type {TuplePyramid} from "../src/TuplePyramid.ts"
import type {WholeNumberIncrement} from "./WholeNumberIncrement.ts"
import type {TupleToUnion} from "./TupleToUnion.ts"
import type {TupleOf} from "./TupleOf.ts"
import type {TupleDropElementsLeft} from "./TupleDropElementsLeft.ts"

export type TupleOfMinMax<
	T,
	Min extends number | unknown = unknown,
	Max extends number | unknown = unknown
> =
	OnlyLiteral<Min> extends number ? (
		// Min is set
		OnlyLiteral<Max> extends number ? (
			// Max is set
			TupleToUnion<
				TupleDropElementsLeft<
					TuplePyramid<T, WholeNumberIncrement<OnlyLiteral<Max>>>, OnlyLiteral<Min>
				>
			>
		) : (
			// Max is unset
			[
				...TupleOf<T, OnlyLiteral<Min>>, ...T[]
			]
		)
	) : (
		// Min is unset
		OnlyLiteral<Max> extends number ? (
			// Max is set
			TupleToUnion<
				TuplePyramid<T, WholeNumberIncrement<OnlyLiteral<Max>>>
			>
		) : (
			// Max is unset
			T[] // Array<T> is best we can do with information provided
		)
	)

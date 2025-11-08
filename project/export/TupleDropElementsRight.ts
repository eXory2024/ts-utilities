type TupleDropElementsRightImplementation<
	T extends readonly unknown[],
	N extends number,
	Counter extends readonly unknown[]
> =
	// Have we recursed N times?
	Counter["length"] extends N ?
		// Return input
		T :
		// Remove last element
		T extends [...infer Rest, infer End] ?
			// Recurse
			TupleDropElementsRightImplementation<
				Rest,
				N,
				[...Counter, unknown]
			> :
			// Nothing more to remove
			never

export type TupleDropElementsRight<
	T extends readonly unknown[],
	N extends number = 1
> = TupleDropElementsRightImplementation<T, N, []>

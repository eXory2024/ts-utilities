type DropTupleElementsLeftImplementation<
	T extends readonly unknown[],
	N extends number,
	Counter extends readonly unknown[]
> =
	// Have we recursed N times?
	Counter["length"] extends N ?
		// Return input
		T :
		// Remove first element
		T extends [infer Start, ...infer Rest] ?
			// Recurse
			DropTupleElementsLeftImplementation<
				Rest,
				N,
				[...Counter, unknown]
			> :
			// Nothing more to remove
			never

export type DropTupleElementsLeft<
	T extends readonly unknown[],
	N extends number = 1
> = DropTupleElementsLeftImplementation<T, N, []>

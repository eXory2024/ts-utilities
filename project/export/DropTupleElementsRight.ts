type DropTupleElementsRightImplementation<
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
			DropTupleElementsRightImplementation<
				Rest,
				N,
				[...Counter, unknown]
			> :
			// Nothing more to remove
			never

export type DropTupleElementsRight<
	T extends readonly unknown[],
	N extends number = 1
> = DropTupleElementsRightImplementation<T, N, []>

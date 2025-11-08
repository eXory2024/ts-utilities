type TuplePopImplementation<
	T extends readonly unknown[],
	N extends number,
	Acc extends readonly unknown[]
> =
	// Have we recursed "N" amount of times?
	Acc["length"] extends N ?
		// Return the accumulator
		Acc :
		// Pop element
		T extends [...infer Rest, infer End] ?
			// Recurse
			TuplePopImplementation<Rest, N, [...Acc, End]> :
			// Nothing more to pop off
			never

export type TuplePop<
	T extends readonly unknown[],
	N extends number = 1
> = TuplePopImplementation<T, N, []>

type ShiftTupleImplementation<
	T extends readonly unknown[],
	N extends number,
	Result extends readonly unknown[]
> =
	// Result of desired length?
	Result["length"] extends N ?
		// Return result
		Result :
		// Remove first element
		T extends [infer Start, ...infer Rest] ?
			// Recurse
			ShiftTupleImplementation<
				Rest, N, [...Result, Start]
			> :
			never

export type ShiftTuple<
	T extends readonly unknown[],
	N extends number = 1
> = ShiftTupleImplementation<T, N, []>

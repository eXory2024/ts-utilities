type TupleShiftImplementation<
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
			TupleShiftImplementation<
				Rest, N, [...Result, Start]
			> :
			never

export type TupleShift<
	T extends readonly unknown[],
	N extends number = 1
> = TupleShiftImplementation<T, N, []>

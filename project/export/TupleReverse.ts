type TupleReverseImplementation<
	T extends readonly unknown[],
	TLength extends number,
	Result extends readonly unknown[]
> =
	// Is result tuple of desired length?
	Result["length"] extends TLength ?
		// Return result
		Result :
		// Remove first element
		T extends [infer Start, ...infer Rest] ?
			// Recurse
			TupleReverseImplementation<
				Rest, TLength, [Start, ...Result]
			> :
			never

export type TupleReverse<
	T extends readonly unknown[]
> = TupleReverseImplementation<
	T, T["length"], []
>

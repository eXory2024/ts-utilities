type ReverseTupleImplementation<
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
			ReverseTupleImplementation<
				Rest, TLength, [Start, ...Result]
			> :
			never

export type ReverseTuple<
	T extends readonly unknown[]
> = ReverseTupleImplementation<
	T, T["length"], []
>

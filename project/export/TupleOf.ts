type TupleOfImplementation<
	T,
	N extends number,
	Result extends readonly unknown[]
> =
	Result["length"] extends N ?
		Result :
		TupleOfImplementation<T, N, [...Result, T]>

export type TupleOf<T, N extends number> = TupleOfImplementation<T, N, []>

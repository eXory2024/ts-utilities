type FlattenDeepImplementation<
	Input extends readonly unknown[],
	Result extends readonly unknown[]
> =
	Input extends [infer First, ...infer Rest] ?
		// Handle first element
		FlattenDeepImplementation<
			Rest,
			First extends readonly unknown[] ? [
				...Result,
				...FlattenDeepImplementation<First, []>
			] : [
				...Result,
				First
			]
		>
		:
		// No more elements to remove, return result
		Result

export type FlattenDeep<
	T extends readonly unknown[]
> = FlattenDeepImplementation<T, []>

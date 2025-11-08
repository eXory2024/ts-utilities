type TupleFlattenDeepImplementation<
	Input extends readonly unknown[],
	Result extends readonly unknown[]
> =
	Input extends [infer First, ...infer Rest] ?
		// Handle first element
		TupleFlattenDeepImplementation<
			Rest,
			First extends readonly unknown[] ? [
				...Result,
				...TupleFlattenDeepImplementation<First, []>
			] : [
				...Result,
				First
			]
		>
		:
		// No more elements to remove, return result
		Result

export type TupleFlattenDeep<
	T extends readonly unknown[]
> = TupleFlattenDeepImplementation<T, []>

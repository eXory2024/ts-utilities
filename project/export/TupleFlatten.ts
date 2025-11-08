type TupleFlattenImplementation<
	Input extends readonly unknown[],
	Result extends readonly unknown[]
> =
	Input extends [infer First, ...infer Rest] ?
		// Handle first element
		TupleFlattenImplementation<
			Rest,
			First extends readonly unknown[] ? [
				...Result,
				...First
			] : [
				...Result,
				First
			]
		>
		:
		// No more elements to remove, return result
		Result

export type TupleFlatten<
	T extends readonly unknown[]
> = TupleFlattenImplementation<T, []>

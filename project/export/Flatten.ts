type FlattenImplementation<
	Input extends readonly unknown[],
	Result extends readonly unknown[]
> =
	Input extends [infer First, ...infer Rest] ?
		// Handle first element
		FlattenImplementation<
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

export type Flatten<
	T extends readonly unknown[]
> = FlattenImplementation<T, []>

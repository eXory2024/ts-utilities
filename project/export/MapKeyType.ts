export type MapKeyType<
	T extends Map<unknown, unknown>
> = T extends Map<infer K, unknown> ? K : never

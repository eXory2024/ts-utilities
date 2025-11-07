export type MapValueType<
	T extends Map<unknown, unknown>
> = T extends Map<unknown, infer V> ? V : never

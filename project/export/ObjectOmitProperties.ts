export type ObjectOmitProperties<
	T extends object,
	Properties extends PropertyKey
> = T extends T ? {
	[K in keyof T as K extends Properties ? never : K]: T[K]
} : never

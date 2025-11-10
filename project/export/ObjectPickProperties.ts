export type ObjectPickProperties<
	T extends object,
	Properties extends PropertyKey
> = T extends T ? {
	[K in keyof T as K extends Properties ? K : never]: T[K]
} : never

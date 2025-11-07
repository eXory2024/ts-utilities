export type OmitProperties<
	T extends object,
	OmittedProperties extends string
> = T extends T ? {
	[K in keyof T as K extends OmittedProperties ? never : K]: T[K]
} : never

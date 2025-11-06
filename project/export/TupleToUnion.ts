//
// Sometimes typescript complains about "excessive stack depth" when using SomeTuple[number] directly
//
export type TupleToUnion<
	T extends readonly unknown[]
> = T[number]

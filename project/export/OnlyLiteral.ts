import type {Literal} from "./Literal.ts"

type OnlyOfLiteral<T, L extends Literal> =
	// prevent distribution of union
	[T] extends [L] ?
		// T is of literal type, but is it a literal?
		[L] extends [T] ?
			// no
			unknown :
			// yes
			T
		: unknown

//
// resolves to T if T is a literal otherwise it resolves to `unknown`.
//
// Usage like this:
//
// OnlyLiteral<T> extends number ? (do something with number literal) : ...
//
export type OnlyLiteral<T> =
	OnlyOfLiteral<T, string>  extends string  ? T :
	OnlyOfLiteral<T, number>  extends number  ? T :
	OnlyOfLiteral<T, boolean> extends boolean ? T :
	OnlyOfLiteral<T, bigint>  extends bigint  ? T :
	unknown

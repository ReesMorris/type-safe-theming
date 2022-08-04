type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`;

export type FlattenInterface<T> = (
  [T] extends [never]
    ? ''
    : T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<
          FlattenInterface<T[K]>
        >}`;
      }[Exclude<keyof T, symbol>]
    : ''
) extends infer D
  ? Extract<D, string>
  : never;

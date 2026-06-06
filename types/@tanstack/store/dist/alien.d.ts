//#region src/alien.d.ts
interface ReactiveNode {
  deps?: Link;
  depsTail?: Link;
  subs?: Link;
  subsTail?: Link;
  flags: ReactiveFlags;
}
interface Link {
  version: number;
  dep: ReactiveNode;
  sub: ReactiveNode;
  prevSub: Link | undefined;
  nextSub: Link | undefined;
  prevDep: Link | undefined;
  nextDep: Link | undefined;
}
declare const enum ReactiveFlags {
  None = 0,
  Mutable = 1,
  Watching = 2,
  RecursedCheck = 4,
  Recursed = 8,
  Dirty = 16,
  Pending = 32,
}
//#endregion
export { ReactiveNode };
//# sourceMappingURL=alien.d.ts.map

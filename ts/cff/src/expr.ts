
class Frac {
  readonly group: "frac" = "frac";
  constructor(private readonly a: number, private readonly b: number = 1) {}

  isEqual(n: number): boolean {
    return this.a === n * this.b;
  }

  divide(frac: Frac): Frac {
    return new Frac(this.a * frac.b, frac.a * this.b);
  }

  toString() {
    return this.a.toString();
  }
}
type Div = {
  readonly group: "div";
}
type Token = Frac | Div

const div: Div = { group: 'div' };

function calc<T>(ns: Token[],
                 toT: (a: Frac) => T,
                 combine: (a: T, b: T) => T): T {
  return ns.reduce((stack, token) => {
    switch(token.group) {
      case "frac":
        return [toT(token), ...stack];
      case "div":
        const [f2, f1, ...tail] = stack
        return [combine(f1, f2), ...tail];
    }
  }, Array<T>())[0];
}

function backtrack(tokens: Token[]): Token[][] {
  const fracCount = tokens.filter((x) => x.group === "frac").length;
  const divCount = tokens.filter((x) => x.group === "div").length;
  if (fracCount === 10 && divCount === 9) {
    return calc(tokens, (x) => x, (x, y) => x.divide(y)).isEqual(7) ? [tokens] : [];
  }
  return (fracCount < 10 ? backtrack([...tokens, new Frac(fracCount+1)]) : [])
  .concat(fracCount > divCount + 1 ? backtrack([...tokens, div]) : []);
}

const solutions = backtrack([]);

function divides(s1: string, s2: string): string {
  return s2.includes('/')
    ? `${s1}/(${s2})`
    : `${s1}/${s2}`;
}

console.log(solutions.length);
console.log(
solutions
  .map((x) => calc(x, (x) => x.toString(), divides))
  .sort((a, b) => a.length - b.length)
  .join("\n")
);

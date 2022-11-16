"use strict";
class Frac {
    constructor(a, b = 1) {
        this.a = a;
        this.b = b;
        this.group = "frac";
    }
    isEqual(n) {
        return this.a === n * this.b;
    }
    divide(frac) {
        return new Frac(this.a * frac.b, frac.a * this.b);
    }
    toString() {
        return this.a.toString();
    }
}
const div = { group: 'div' };
function calc(ns) {
    return ns.reduce((stack, token) => {
        switch (token.group) {
            case "frac":
                return [token, ...stack];
            case "div":
                const [f2, f1, ...tail] = stack;
                return [f1.divide(f2), ...tail];
        }
    }, Array())[0];
}
function divides(s1, s2) {
    return s2.includes('/')
        ? `${s1}/(${s2})`
        : `${s1}/${s2}`;
}
function draw(ns) {
    return ns.reduce((stack, token) => {
        switch (token.group) {
            case "frac":
                return [token.toString(), ...stack];
            case "div":
                const [f2, f1, ...tail] = stack;
                return [divides(f1, f2), ...tail];
        }
    }, Array())[0];
}
function backtrack(tokens) {
    const fracCount = tokens.filter((x) => x.group === "frac").length;
    const divCount = tokens.filter((x) => x.group === "div").length;
    if (fracCount === 10 && divCount === 9) {
        return calc(tokens).isEqual(7) ? [tokens] : [];
    }
    return (fracCount < 10 ? backtrack([...tokens, new Frac(fracCount + 1)]) : [])
        .concat(fracCount > divCount + 1 ? backtrack([...tokens, div]) : []);
}
const solutions = backtrack([]);
console.log(solutions.length);
console.log(solutions
    .map((x) => draw(x))
    .sort((a, b) => a.length - b.length)
    .join("\n"));

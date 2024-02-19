const objFactory = () => ({
    c: {
        d: 1,
        e: [
            3,
            5,
            6,
            {
                f: 4,
            },
        ],
    },
});
const cases = [
    [
        {
            a: 1,
            b: objFactory(),
        },
        [
            ["a", 1],
            ["b.c.d", 1],
            ["b.c.e.0", 3],
            ["b.c.e.3.f", 4],
        ],
    ],
    [
        {
            a: (() => {
                const o = objFactory();
                const n = objFactory();
                n.c.e.push({
                    x: [{ f: 0 }, { E: 1 }, { g: 2 }],
                });
                o.c.e[3].k = n;
                return o;
            })(),
        },
        [
            ["a.b.c.d", null],
            ["a.c.e.-1.x.0.f", 0],
            ["a.c.e.-1.x.1.e", null],
            ["a.c.e.k.c.e.-1.f", 4],
            ["a.c.e.k.c.e.-1.g", null],
        ],
    ],
];
function getAttribute(o, k) {
    return null;
}

function main() {
    for (const situation of cases) {
        const obj = situation[0];
        for (const [k, v] of situation[1]) {
            const r = getAttribute(obj, k);
            console.log(`Case ${k} : ${r === v ? "OK" : "FAIL"}`);
        }
    }
}
main();

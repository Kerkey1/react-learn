import React from 'react';

const Eighth = () => {
    const lab8 = () => {
        const a = document.getElementById("a").value;
        const b = document.getElementById("b").value;
        const e = document.getElementById("e").value;
        const ev = document.getElementById("eval").value;
        console.log(div(a, b, ev, e))
    }
    const div = (a, b, ev, e) => {
        const c = (a + b) / 2;
        if (b - a <= e) return c
        if (f(ev, a) - f(ev, c) < 0) return div(a, c, ev, e)
        else if (f(ev, a) * f(ev, c) > 0) return div(c, b, ev, e)
        else return c;
    }

    const f = (ev, v) => {
        let x = v;
        console.log(ev)
        return eval({ev})
    }

    return <div className="item-style">
        <h3>LAB 8</h3>
        Уравнение:<input id="eval" defaultValue={0}/>
        <input id="a" defaultValue={0}/>
        <input id="b" defaultValue={0}/>
        <input id="e" defaultValue={0.01}/>
        <button onClick={() => lab8()}>Посчитать</button>
    </div>
}
export default Eighth;
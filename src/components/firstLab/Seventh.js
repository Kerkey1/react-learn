import React from 'react';

const Seventh = () => {

    const lab7 = () => {
        const firstValue = document.getElementById("firstValueSeven").value;
        const secondValue = document.getElementById("secondValueSeven").value;
        alert(nok(firstValue, secondValue))
    }
    const gcd = (n, m) => m === 0 ? n : gcd(m, n % m)
    const nok = (n, m) => n * m / gcd(n, m)

    return <div className="item-style">
        <h3>LAB 7</h3>
        <input id="firstValueSeven" defaultValue={0}/>
        <input id="secondValueSeven" defaultValue={0}/>
        <button onClick={() => lab7()}>Меньшее общее кратное</button>
    </div>
}
export default Seventh;
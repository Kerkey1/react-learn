import React from 'react';

const Sixth = () => {

    const lab6 = () => {
        const first = document.getElementById("firstValue").value;
        const second = document.getElementById("secondValue").value;
        const third = document.getElementById("thirdValue").value;
        const fourth = document.getElementById("fourthValue").value;
        const array = [first, second, third, fourth];
        const sort = array.sort((a, b) => a < b ? -1 : 1);
        let res = ""
        sort.map(v => {
            res += v + ", "
        })
        alert(res)
    }
    return <div className="item-style">
        <h3>LAB 6</h3>
        <input id="firstValue" defaultValue={0}/>
        <input id="secondValue" defaultValue={0}/>
        <input id="thirdValue" defaultValue={0}/>
        <input id="fourthValue" defaultValue={0}/>
        <button onClick={() => lab6()}>Отсортировать числа</button>
    </div>
}
export default Sixth;
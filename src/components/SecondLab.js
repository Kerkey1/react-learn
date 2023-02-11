import React, {useEffect, useState} from 'react';
import List from "./secondLab/List";

const SecondLab = () => {
    const array = ["firstElement", "secondElement", "thirdElement"];
    const [filteredArray, setFilteredArray] = useState(array);

    useEffect(() => {
        filteredArray?.length === array.length ? document.title = " useEffect hook example" : document.title = `Найдено ${filteredArray.length} записей`;
    }, [filteredArray])

    const onChange = (event) => {
        setFilteredArray(array.filter(el => el.toLowerCase().includes(event.target.value.toLowerCase())))
    }

    return <>
        <input onChange={onChange} placeholder="Input element"/>
        <List array={filteredArray}/>
    </>
}
export default SecondLab;
import React from 'react';
import Element from "./Element";

const List = ({array}) => {

    return <ul>
        {array?.map((el, index) => <Element key={index} element={el}/>)}
    </ul>
}
export default List
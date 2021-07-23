import React, { useState } from 'react';
import s from './Paginator.module.css';
import cn from "classnames";


let Paginator = ({portionSize = 10, ...props}) => {

    let pagesCount = Math.ceil(props.page / props.count);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={s.pageNumber}>
            {portionNumber > 1 &&
            <button onClick={ () => { setPortionNumber(portionNumber - 1) }}>prev</button>}
            {pages
            .filter(p => p >=leftPortionPageNumber && p <=  rightPortionPageNumber)
            .map((p) => {
                return (
                <span className={ cn({
                    [s.selectedPage]: props.currentPage === p
                }, s.pageNumber) }
                    key={p}
                    onClick={(e) => {
                        props.onPageChanged(p);
                    }}>{p}</span>
            )})}
        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
        </div>
    )
}
export default Paginator;
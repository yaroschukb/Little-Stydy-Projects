import React from 'react';

const Pagination = ({postsPerPage, totalPost, pagination}) => {

    const pageNumber = []
    for (let i = 1; i <=Math.ceil(totalPost/postsPerPage); i++) {
         pageNumber.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(e=>(
                    <li key={e} className="page-item">
                        <a href="!#" className="page-link" onClick={()=>pagination(e)}>{e}</a></li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
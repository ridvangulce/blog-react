import React from "react";

export const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="container-pagination" >
            <nav>
                    {pageNumbers.map(number => (
                        <ul key={number}>
                            <a onClick={() => paginate(number)}>
                                {number}
                            </a>

                        </ul>
                    ))}

            </nav>
        </div>

    )

}
import React from "react";

export const Pagination = ({usersPerPage, totalUsers, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <nav>
                <ul>
                    {pageNumbers.map(number => (
                        <li key={number} className="paginationButtons">
                            <button onClick={() => paginate(number)}>
                                {number}
                            </button>

                        </li>
                    ))}
                </ul>

            </nav>
        </div>

    )

}
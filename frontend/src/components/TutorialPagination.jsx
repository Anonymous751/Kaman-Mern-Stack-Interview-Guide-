import React from "react";
import Pagination from "react-bootstrap/Pagination";


const TutorialPagination = ({
    currentPage,
    setCurrentPage,
    totalSteps,
    stepsPerPage
}) => {


    const totalPages = Math.ceil(totalSteps / stepsPerPage);



    return (

        <>

            <Pagination className="mb-3">


                <Pagination.First

                    disabled={currentPage === 1}

                    onClick={() => setCurrentPage(1)}

                />


                <Pagination.Prev

                    disabled={currentPage === 1}

                    onClick={() => setCurrentPage(currentPage - 1)}

                />



                {
                    [...Array(totalPages)].map((_, index) => (

                        <Pagination.Item

                            key={index}

                            active={currentPage === index + 1}

                            onClick={() => setCurrentPage(index + 1)}

                        >

                            {index + 1}

                        </Pagination.Item>

                    ))
                }



                <Pagination.Next

                    disabled={currentPage === totalPages}

                    onClick={() => setCurrentPage(currentPage + 1)}

                />



                <Pagination.Last

                    disabled={currentPage === totalPages}

                    onClick={() => setCurrentPage(totalPages)}

                />


            </Pagination>



            <hr />



            <div className="d-flex justify-content-between">


                <small className="text-muted">

                    Showing Steps{" "}

                    {(currentPage - 1) * stepsPerPage + 1}

                    {" - "}

                    {Math.min(currentPage * stepsPerPage, totalSteps)}

                </small>



                <small className="fw-semibold text-primary">

                    {Math.round((currentPage / totalPages) * 100)}% Completed

                </small>


            </div>


        </>

    );

};


export default TutorialPagination;
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./../screen/home/Home";
import Book from "./../screen/book/Book";
import Reserve from "./../screen/reserve/Reserve";
import CreateBook from "./../screen/createBook/CreateBook";
import CreateReserve from "./../screen/createReserve/CreateReserve";
import UpdateBook from "../screen/updateBook/UpdateBook";
import UpdateReserve from "../screen/updateReserve/UpdateReserve";


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/book" element={<Book/>} />
                <Route path="/reserve" element={<Reserve/>} />
                <Route path="/createBook" element={<CreateBook/>} />
                <Route path="/createReserve" element={<CreateReserve/>} />
                <Route path="/editBook/:id" element={<UpdateBook/>} />
                <Route path="/editReserve/:id" element={<UpdateReserve/>} />
                <Route path="*" element={() => <h1>Page not found</h1>} />
            </Routes>
        </BrowserRouter>
        )
}

export default AppRoutes;

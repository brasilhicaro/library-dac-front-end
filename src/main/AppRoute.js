import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./../screen/home/Home";
import Book from "./../screen/book/Book";
import Reserve from "./../screen/reserve/Reserve";

function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" component={<Home/>} />
            <Route path="/book" component={<Book/>} />
            <Route path="/reserve" component={<Reserve/>} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Routes>
        </BrowserRouter>
        )
}

export default AppRoutes;

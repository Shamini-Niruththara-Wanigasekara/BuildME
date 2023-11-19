import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from './Pages/Home/index.tsx';
import CategoryPage from './Pages/category.tsx';
import RequestPage from './Pages/request.tsx';
import PlanuploadPage from './Pages/planupload.tsx';
import SignupBuilder from './Pages/signUpBuilder.tsx';
import SignupClient from './Pages/signUpClient.tsx';
import LoginPage from './Pages/login.tsx';
import AboutUs from './Pages/about.tsx';
import ContactUs from './Pages/contactUs.tsx';

 const RootRouter =()=>{

    return(
        <Routes>
            <Route
            path='/'
            element={<HomePage/>}
            />
            <Route
            path='/category'
            element={<h1>CategoryPage</h1>}
            />
            <Route
            path='/request'
            element={<h1>RequestPage</h1>}
            />
            <Route
            path='/planupload'
            element={<h1>PlanuploadPage</h1>}
            />
            <Route
            path='/signupBuilder'
            element={<h1>SignupBuilder</h1>}
            />
            <Route
            path='/signupClient'
            element={<h1>SignupClient</h1>}
            />
            <Route
            path='/login'
            element={<h1>LoginPage</h1>}
            />
            <Route
            path='/about'
            element={<h1>AboutUs</h1>}
            />
            <Route
            path='/contact'
            element={<h1>ContactUs</h1>}
            />
        </Routes>
    );
 }

 export default RootRouter;
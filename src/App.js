import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import isAuthenticated from './Services/auth.service';
import routes from './routes';

const getAuth = () => {

    return isAuthenticated();
}

function App() {

    return ( 
   
        <BrowserRouter>
        <Routes>
            {
                getAuth() && 
                routes.privateRoutes.map((route)=>{
                    return (
                        <Route path={route.path} element={route.component} />
                    )

                })
            }
            {
                   routes.publicRoutes.map((route)=>{
                    return (
                        <Route path={route.path} element={route.component} />
                    )

                })

            }
        </Routes>
      </BrowserRouter>
    );
}

export default App;
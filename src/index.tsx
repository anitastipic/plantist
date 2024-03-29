import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './tailwind.css';
import './custom.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PlantSearch from "./Components/PlantSearch";
import Layout from "./Components/Layout/Layout";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <App/>
            },
            {
                path: "/home",
                element: <App/>
            },
            {
                path: "/search",
                element: <PlantSearch/>
            }
        ]
    }
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

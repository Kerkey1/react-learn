import React from "react";
import {useRoutes} from "react-router";
import FirstLab from "./components/FirstLab";
import SecondLab from "./components/SecondLab";


const Router = () => {
    let router = useRoutes([
        {
            path: "/firstLab",
            element: <FirstLab/>
        },
        {
            path: "/secondLab",
            element: <SecondLab/>
        },
        {
            path: "/*",
            element: <h1>Not found</h1>
        }
    ]);

    return router
};
export default Router
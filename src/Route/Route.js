import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Notfound from "../Pages/NotFound/Notfound";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
				path: '*',
				element: <Notfound></Notfound>
			},
        ]
    }
]);

export default routes;
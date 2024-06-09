import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import NewClient ,{action as NewClientAction} from "../pages/NewClient";
import Index, {loader as clientsLoader} from "../pages/Index";
import ErrorPage from "../pages/ErrorPage";
import EditClient, {loader as editClientLoader, action as editClientAction} from "../pages/EditClient";
import {action as deleteClientAction} from "../components/Clients";

const router = createBrowserRouter([
    {
        path: "/", 
        element: <Layout />,
        children: [
            {
                index: true,
                element:<Index />,
                errorElement: <ErrorPage/>,
                loader: clientsLoader
            },
            {
                path: "/clients/new",
                element: <NewClient />,
                errorElement: <ErrorPage/>,
                action: NewClientAction
            },
            {
                path: "/clients/:id/edit",
                element: <EditClient />,
                errorElement: <ErrorPage/>,
                loader: editClientLoader,
                action: editClientAction
            },
            {
                path: "/clients/:id/delete",
                action: deleteClientAction
            }
        ]
    }

])

export default router;
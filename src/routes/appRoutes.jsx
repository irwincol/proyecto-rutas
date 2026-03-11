import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Dashboard from "../pages/Dashboard";
import App from "../App";


export let router =[
    {
        path: "/login",
        element : <Login />
    },
    {
        path: "/registro",
        element : <Registro />
    },
    {
        path: "/dashboard",
        element : <Dashboard />

    },
    {
        path: "/",
        element : <App />
    }
]
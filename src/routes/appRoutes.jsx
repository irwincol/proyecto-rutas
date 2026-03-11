import Login from "../components/Login";
import Registro from "../components/Registro";
import Dashboard from "../components/Dashboard";


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

    }
]
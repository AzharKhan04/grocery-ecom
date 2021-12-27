import Welcome from "./Welcome";
import Dashboard from './Dashboard';
import Categories from "./Dashboard/Categories";
function Login() {
    return (
        <div>{'Login page'}</div>
    )
}
const privateRoutes = [
    {
        path:'/welcome',
        component:<Welcome/>

    }
]

const publicRoutes = [
    {
        path:'/login',
        component:<Login/>

    },
    {
        path:'/',
        component:<Dashboard/>

    },
    {
        path:'/category',
        component:<Categories/>
    }

]

const routes = {
    privateRoutes:privateRoutes,
    publicRoutes:publicRoutes
}

export default routes;
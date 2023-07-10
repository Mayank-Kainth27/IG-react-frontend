import {
    SignUp,
    Login,
    Home
} from '../screens';

const RoutesData = [
    {
        Component: Login,
        publicRoute: "yes",
        path: '/login'
    },
    {
        Component: SignUp,
        publicRoute: "yes",
        path: '/SignUp'
    },
    {
        Component: Home,
        publicRoute: "no",
        path: '/home'
    }
]

export default RoutesData;
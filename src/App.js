import {Route, Routes, Navigate} from "react-router-dom";
import Login from "./views/login";
import Dashboard from "./views/dashboard";
import Cart from "./views/cart";
import {Provider} from "react-redux";
import store from "./redux/store";


const isAuthenticated = () => {
    const user = localStorage.getItem('user');
    return user !== null && user !== undefined;
};

const ProtectedRoute = ({path, element}) => {
    return isAuthenticated() ? (
        element
    ) : (
        <Navigate to="/" replace={true}/>
    );
};

function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path="/home" element={<ProtectedRoute element={<Dashboard/>}/>}/>
                <Route path="/cart" element={<ProtectedRoute element={<Cart/>}/>}/>
            </Routes>
        </Provider>
    );
}

export default App;

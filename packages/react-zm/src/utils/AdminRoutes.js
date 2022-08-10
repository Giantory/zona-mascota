import { Navigate } from 'react-router-dom';

const AdminRoutes = ({ children }) => {
    const token = JSON.parse(localStorage.getItem("userLogged"));
    if(token && token.data.type === 'admin' ){
        return children
    }else{
        return <Navigate to='/unauthorized'/>
    }
     
}
export default AdminRoutes
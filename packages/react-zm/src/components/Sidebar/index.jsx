import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { isSelectedContext } from '../../views/Dashboard';
import Logo from "../../assets/img/Logo.png"
import './styles.sass';
const Sidebar = ({ options }) => {
    const { isSelected, adminOptionSelected, setAdminOptionSelected } = useContext(isSelectedContext);

    const logout = () =>{
        localStorage.removeItem("userLogged")
    }
    return (
        <div className='sidebar'>
            <div className="sidebar-header">
                <img className="sidebar-header-logo" src={Logo} />
                <h1 className="sidebar-header-tittle">Administrador</h1>
            </div>
            <div className="sidebar-separator"></div>
            <div className="sidebar-body">
                {options.map((option, i) => {
                    return (
                        <div className={"sidebar-body-link-option-" + (isSelected(i + 1))} key={i} onClick={() => { setAdminOptionSelected(i + 1) }}>
                            <span className={"sidebar-body-link-option-" + (isSelected(i + 1)) + "-icon"}>
                                {option.icon}
                            </span>
                            <p className={"sidebar-body-link-option-" + (isSelected(i + 1)) + "-text"}>{option.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className="sidebar-separator"></div>
            <div className="sidebar-footer">
                <Link to={'/'}>
                <div className="sidebar-footer-logout" onClick={logout}>
                    Logout
                </div>  
                </Link>            
            </div>
        </div>
    )
}
export default Sidebar;
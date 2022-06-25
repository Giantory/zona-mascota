import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { isSelectedContext } from '../../App';
import './styles.sass';
const Sidebar = ({ options }) => {
    const { isSelected ,adminOptionSelected, setAdminOptionSelected } = useContext(isSelectedContext);
   
    return (
        <div className='sidebar'>
            <div className="sidebar-header">
                <img className="sidebar-header-logo" />
                <h1 className="sidebar-header-tittle">Administrador</h1>
            </div>
            <div className="sidebar-separator"></div>
            <div className="sidebar-body">
                {options.map((option, i) => {
                    return (
                        <Link className="sidebar-body-link" to={option.path}>
                            <div className={"sidebar-body-link-option-" + (isSelected(i + 1))} key={i} onClick={() => { setAdminOptionSelected(i + 1) }}>
                                <span className={"sidebar-body-link-option-" + (isSelected(i + 1)) + "-icon"}>
                                    {option.icon}
                                </span>
                                <p className={"sidebar-body-link-option-" + (isSelected(i + 1)) + "-text"}>{option.name}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className="sidebar-separator"></div>
            <div className="sidebar-footer">
                <div className="sidebar-footer-avatar"></div>
                <div className="sidebar-footer-name"></div>
            </div>
        </div>
    )
}
export default Sidebar;
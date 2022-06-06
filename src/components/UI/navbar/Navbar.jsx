import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
    const {setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
    
            <MyButton 
            style={{height: 30, marginTop: 10}}
            onClick={logout}
            >
            Выйти
            </MyButton>
            <div className='navbar__items'>
                <Link to='/about'>О сайте</Link>
                <Link to='/posts'>Посты</Link>
            </div>
        </div>
    );
}

export default Navbar;
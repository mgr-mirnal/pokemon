import { NavLink, Outlet } from "react-router-dom";


function Nav(){
    let activeStyle ={

    }

    return (
        <>
        <nav>
            <h1>LOGO</h1>
            <nav className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/pokedex" style={({isActive}) => (isActive? activeStyle : undefined)}>Pokedex</NavLink>
                <NavLink to="/About" style={({isActive}) => (isActive? activeStyle : undefined)}>About</NavLink>
            </nav>
        </nav>
        <Outlet/>
        </>
    )
}

export default Nav
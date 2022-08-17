import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <NavLink 
                className={( {isActive} ) => isActive ? 'is-active' : ''}
                to='/'
            >
                Dashboard
            </NavLink>
            <NavLink 
                className={( {isActive} ) => isActive ? 'is-active' : ''}
                to='/create'
            >
                Add Expense
            </NavLink>
            {/* <NavLink 
                className={( {isActive} ) => isActive ? 'is-active' : ''}
                to='/edit'
            >
                Edit Expense
            </NavLink> */}
            <NavLink 
                className={( {isActive} ) => isActive ? 'is-active' : ''}
                to='/help'
            >
                Help Page
            </NavLink>
        </nav>
    </header>
);

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className="SideMenu">
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>&nbsp;</li>
                <li>
                    <Link to="./dashboard">Dashboard</Link>
                </li>
                <li>
                    User
                    <ul>
                        <li>
                            <Link to="./user/index">Liste</Link>
                        </li>
                        <li>
                            <Link to="./user/add">Ajouter</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    Cocktail
                    <ul>
                        <li>
                            <Link to="./cocktail/index">List</Link>
                        </li>
                        <li>
                            <Link to="./cocktail/edit">Edit</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;

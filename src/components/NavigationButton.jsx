import React, { useState, useEffect } from 'react';

function NavigationButton() {

    const [menu_status, setMenuStatus] = useState({bool: false, name: 'menu'})
    const nav = document.querySelector('nav')

    function handleClick() {
        const nav = document.querySelector('nav')
        if(menu_status.bool ) {
            setMenuStatus({bool: false, name: 'menu'})
            nav.style.display = 'none'
        } else {
            setMenuStatus({bool: true, name: 'close'})
            nav.style.display = 'flex'
        }
        localStorage.setItem('navbarStatus', !menu_status.bool)
    }

    return (
        <button id='navigation_button' onClick={handleClick}>
            <span className="material-icons-round">{menu_status.name}</span>
        </button>
    )
}

export default NavigationButton;

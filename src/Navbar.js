
import { Menubar } from 'primereact/menubar';
import React from "react";
import { InputText } from 'primereact/inputtext';
import './Nav.css'

const Navbar = () => {
    const items = [
        {
            label: 'Model S'
        },
        {
            label: 'Model 3',
        },
        {
            label: 'Model X',
        },
        {
            label: 'Model Y',
        },
        {
            label: 'Solar Roof',
        },
        {
            label: 'Solar Panels',
        },
      
    ];

   
   
    const start = <img alt="logo" src="/images/tesla-9.svg" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2 tesla-logo"></img>;
    // const start=<svg class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
    const end = <ul className='d-flex gap-4'>
      <li>Shop</li>
      <li>Account</li>
      <li>Menu</li>
    </ul>
    return (
        <>

            <div className="card px-5 border-bottom-0 fixed">
                <Menubar model={items} start={start} end={end} />
                
            </div>
        </>
    )
};

export default Navbar;

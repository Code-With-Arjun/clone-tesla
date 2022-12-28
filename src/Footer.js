import React from "react";
import { Menubar } from 'primereact/menubar';
const Footer = () => {
    const items = [
        {
            label: 'Tesla © 2022'
        },
        {
            label: 'Privacy & Lega'
        },
        {
            label: 'Vehicle Recalls',
        },
        {
            label: 'Contact',
        },
        {
            label: 'Careers',
        },
        {
            label: 'News',
        },
        {
            label: 'Engage',
        },
        {
            label: 'Locations',
        },

    ];
    return (
        <>

            <div className="card px-5 border-bottom-0 fixed border-0 footer-items">
                <Menubar model={items} />

            </div>


        </>
    )
};

export default Footer;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppUrl from '../../Api/AppUrl';
import { Link } from 'react-router-dom';

function MegaMenuAll() {


    const [menuData, setMenuData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        axios.get(AppUrl.allCategoryDetails)
            .then((response) => {
                setMenuData(response.data);
            })
            .catch((error) => {
                // Handle error here
            });
    }, []);


    const toggleAccordion = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const getPanelStyle = (index) => {
        return {
            maxHeight: activeIndex === index ? '1000px' : '0px', // You can adjust the max height as needed
            transition: 'max-height 0.3s ease-in-out',
            overflow: 'hidden',
        };
    };

    return (
        <>
            <div className='accordionMenuDivAll'>
                <div className='accordionMenuDivInsideAll'>
                    {menuData.map((catList, i) => (
                        <div key={i.toString()}>
                            <button
                                className={`accordionAll ${activeIndex === i ? 'active' : ''}`}
                                onClick={() => toggleAccordion(i)}
                            >
                                <img className='accordionMenuIconAll' src={catList.category_image} alt="" />
                                &nbsp; {catList.category_name}
                            </button>
                            <div
                                style={getPanelStyle(i)}
                                className={`panelAll ${activeIndex === i ? 'open' : ''}`}
                            >
                                <ul>
                                    {catList.subcategory_name.map((subList, j) => (
                                    <li key={j.toString()}>
                                        <Link to={"productSubCategory/" + subList.category_name + '/' + subList.subcategory_name} className='accordionItem'>{subList.subcategory_name}</Link>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MegaMenuAll
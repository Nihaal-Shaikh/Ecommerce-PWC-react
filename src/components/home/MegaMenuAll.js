import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppUrl from '../../Api/AppUrl';

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

    const MyView = menuData.map((catList, i) => {
        return <div key={i.toString()}>
            <button
                className={`accordionAll ${activeIndex === i ? 'active' : ''}`}
                onClick={() => toggleAccordion(i)}
            >
                <img className='accordionMenuIconAll' src={catList.category_image} />
                &nbsp; {catList.category_name}
            </button>
            <div style={getPanelStyle(i)} className={`panelAll ${activeIndex === i ? 'open' : ''}`}>
                <ul>

                    {
                        (catList.subcategory_name).map((subList, i) => {
                            return <li><a href="#" className='accordionItemAll'>{subList.subcategory_name}</a></li>
                        })
                    }
                </ul>
            </div>
        </div>
    });

    return (
        <>
            <div className='accordionMenuDivAll'>
                <div className='accordionMenuDivInsideAll'>
                    {MyView}
                </div>
            </div>
        </>
    )
}

export default MegaMenuAll
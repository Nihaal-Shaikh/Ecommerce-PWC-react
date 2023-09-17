import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MegaMenu(props) {

    const [activeIndex, setActiveIndex] = useState(null);
    const catList = props.data;

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
        <div className='accordionMenuDiv'>
            <div className='accordionMenuDivInside'>
                {catList.map((cat, i) => (
                    <div key={i.toString()}>
                        <button
                            className={`accordion ${activeIndex === i ? 'active' : ''}`}
                            onClick={() => toggleAccordion(i)}
                        >
                            <img className='accordionMenuIcon' src={cat.category_image} alt="" />
                            &nbsp; {cat.category_name}
                        </button>
                        <div style={getPanelStyle(i)} className={`panel ${activeIndex === i ? 'open' : ''}`}>
                            <ul>
                                {cat.subcategory_name.map((subList) => (
                                    <li>
                                        <Link to={"productSubCategory/" + subList.category_name + '/' + subList.subcategory_name} className='accordionItem'>{subList.subcategory_name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MegaMenu
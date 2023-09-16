import React, { useState } from 'react';


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
    const myView = catList.map((catList, i) => {
        return <div key={i.toString()}>

            <button
                className={`accordion ${activeIndex === i ? 'active' : ''}`}
                onClick={() => toggleAccordion(i)}
            >
                <img className='accordionMenuIcon' src={catList.category_image} />
                &nbsp; {catList.category_name}
            </button>
            <div style={getPanelStyle(i)} className={`panel ${activeIndex === i ? 'open' : ''}`}>
                <ul>
                    {
                        (catList.subcategory_name).map((subList, i) => {
                            return <li><a href="#" className='accordionItem'>{subList.subcategory_name}</a></li>
                        })
                    }
                </ul>
            </div>
        </div>
    })

    return (
        <div className='accordionMenuDiv'>
            <div className='accordionMenuDivInside'>
                {myView}
            </div>
        </div>
    )
}

export default MegaMenu
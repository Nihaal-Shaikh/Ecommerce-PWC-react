import React, { useState } from 'react';


function MegaMenu() {

    const [activeIndex, setActiveIndex] = useState(null);

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
                <button
                    className={`accordion ${activeIndex === 1 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(1)}
                >
                    <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(1)} className={`panel ${activeIndex === 1 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordion ${activeIndex === 2 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(2)}
                >
                    <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(2)} className={`panel ${activeIndex === 2 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordion ${activeIndex === 3 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(3)}
                >
                    <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(3)} className={`panel ${activeIndex === 3 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordion ${activeIndex === 4 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(4)}
                >
                    <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(4)} className={`panel ${activeIndex === 4 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordion ${activeIndex === 5 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(5)}
                >
                    <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(5)} className={`panel ${activeIndex === 5 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordion ${activeIndex === 6 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(6)}
                >
                    <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(6)} className={`panel ${activeIndex === 6 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordion ${activeIndex === 7 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(7)}
                >
                    <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(7)} className={`panel ${activeIndex === 7 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordion ${activeIndex === 8 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(8)}
                >
                    <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(8)} className={`panel ${activeIndex === 8 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordion ${activeIndex === 9 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(9)}
                >
                    <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(9)} className={`panel ${activeIndex === 9 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordion ${activeIndex === 10 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(10)}
                >
                    <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(10)} className={`panel ${activeIndex === 10 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordion ${activeIndex === 11 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(11)}
                >
                    <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(11)} className={`panel ${activeIndex === 11 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordion ${activeIndex === 12 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(12)}
                >
                    <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(12)} className={`panel ${activeIndex === 12 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordion ${activeIndex === 13 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(13)}
                >
                    <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(13)} className={`panel ${activeIndex === 13 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItem'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MegaMenu
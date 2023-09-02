import React, { useState } from 'react';

function MegaMenuMobile() {

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
    <>
            <div className='accordionMenuDivMobile'>
            <div className='accordionMenuDivInsideMobile'>
                <button
                    className={`accordionMobile ${activeIndex === 1 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(1)}
                >
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(1)} className={`panelMobile ${activeIndex === 1 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordionMobile ${activeIndex === 2 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(2)}
                >
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(2)} className={`panelMobile ${activeIndex === 2 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordionMobile ${activeIndex === 3 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(3)}
                >
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(3)} className={`panelMobile ${activeIndex === 3 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordionMobile ${activeIndex === 4 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(4)}
                >
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(4)} className={`panelMobile ${activeIndex === 4 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordionMobile ${activeIndex === 5 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(5)}
                >
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(5)} className={`panelMobile ${activeIndex === 5 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordionMobile ${activeIndex === 6 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(6)}
                >
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(6)} className={`panelMobile ${activeIndex === 6 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordionMobile ${activeIndex === 7 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(7)}
                >
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(7)} className={`panelMobile ${activeIndex === 7 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordionMobile ${activeIndex === 8 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(8)}
                >
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(8)} className={`panelMobile ${activeIndex === 8 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordionMobile ${activeIndex === 9 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(9)}
                >
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(9)} className={`panelMobile ${activeIndex === 9 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordionMobile ${activeIndex === 10 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(10)}
                >
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(10)} className={`panelMobile ${activeIndex === 10 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordionMobile ${activeIndex === 11 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(11)}
                >
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(11)} className={`panelMobile ${activeIndex === 11 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordionMobile ${activeIndex === 12 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(12)}
                >
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(12)} className={`panelMobile ${activeIndex === 12 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
                <button
                    className={`accordionMobile ${activeIndex === 13 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(13)}
                >
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png" />
                    &nbsp; Men's Clothing
                </button>
                <div style={getPanelStyle(13)} className={`panelMobile ${activeIndex === 13 ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemMobile'>Men's T-Shirt 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default MegaMenuMobile
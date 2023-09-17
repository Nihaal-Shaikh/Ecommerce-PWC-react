import React from 'react';

function HomeSliderLoading(props) {

    const loaderDiv = props.loaderDiv;

    return (
        <div className={loaderDiv}>
            <div className='row'>
                <div className='col-3'>
                    <div class="ph-row">
                        <div class="ph-col-12" style={{ height: '37.1px', marginTop: '1.5px' }}></div>
                        <div class="ph-col-12" style={{ height: '37.1px', marginTop: '1.5px' }}></div>
                        <div class="ph-col-12" style={{ height: '37.1px', marginTop: '1.5px' }}></div>
                        <div class="ph-col-12" style={{ height: '37.1px', marginTop: '1.5px' }}></div>
                        <div class="ph-col-12" style={{ height: '37.1px', marginTop: '1.5px' }}></div>
                        <div class="ph-col-12" style={{ height: '37.1px', marginTop: '1.5px' }}></div>
                        <div class="ph-col-12" style={{ height: '37.1px', marginTop: '1.5px' }}></div>
                        <div class="ph-col-12" style={{ height: '37.1px', marginTop: '1.5px' }}></div>
                        <div class="ph-col-12" style={{ height: '37.1px', marginTop: '1.5px' }}></div>
                        <div class="ph-col-12" style={{ height: '37.1px', marginTop: '1.5px' }}></div>
                    </div>
                </div>
                <div className='col-9'>
                    <div class="ph-picture" style={{ height: '380px' }}></div>
                </div>
            </div>
        </div>
    )
}

export default HomeSliderLoading
import React from 'react';
import { Container } from 'react-bootstrap';

function FeaturedLoading(props) {

    const loaderDiv = props.loaderDiv;

    return (
        <div className={loaderDiv}>
            <Container className='text-center' fluid={true}>
                <div className='section-title text-center mb-55'>
                    <h2>FEATURED PRODUCT</h2>
                    <p>Some of our Exclusive Collections.</p>
                </div>
                <div className='row'>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
                        <a href="" className="card image-box h-100  w-100">
                            <div class="ph-picture" style={{ height: '250px' }}></div>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12 small" />
                                        <div className="ph-col-12 small" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
                        <a href="" className="card image-box h-100  w-100">
                            <div class="ph-picture" style={{ height: '250px' }}></div>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12 small" />
                                        <div className="ph-col-12 small" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
                        <a href="" className="card image-box h-100  w-100">
                            <div class="ph-picture" style={{ height: '250px' }}></div>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12 small" />
                                        <div className="ph-col-12 small" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
                        <a href="" className="card image-box h-100  w-100">
                            <div class="ph-picture" style={{ height: '250px' }}></div>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12 small" />
                                        <div className="ph-col-12 small" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
                        <a href="" className="card image-box h-100  w-100">
                            <div class="ph-picture" style={{ height: '250px' }}></div>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12 small" />
                                        <div className="ph-col-12 small" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
                        <a href="" className="card image-box h-100  w-100">
                            <div class="ph-picture" style={{ height: '250px' }}></div>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12 small" />
                                        <div className="ph-col-12 small" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FeaturedLoading
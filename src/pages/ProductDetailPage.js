import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import SuggestedProducts from '../components/ProductDetails/SuggestedProducts';
import axios from 'axios';
import AppUrl from '../Api/AppUrl';
import HomeSliderLoading from '../components/Placeholder/HomeSliderLoading';

function ProductDetailPage() {

    const { id } = useParams();
    const [productData, setProductData] = useState([]);
    const [loaderDiv, setLoaderDiv] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');


    useEffect(() => {

        window.scroll(0, 0);

        axios.get(AppUrl.ProductDetails(id))
            .then(response => {
                setProductData(response.data);
                setLoaderDiv('d-none');
                setMainDiv('');
            })
            .catch(error => {
            });
    }, []);

    return (
        <>
            <div className='Desktop'>
                <NavMenuDesktop />
            </div>
            <div className='Mobile'>
                <NavMenuMobile />
            </div>
            {mainDiv === 'd-none' ? (
                <HomeSliderLoading loaderDiv={loaderDiv} />
            ) : (
                <>
                    <ProductDetails data={productData} />
                    <SuggestedProducts />
                </>
            )}
            <div className='Desktop'>
                <FooterDesktop />
            </div>
            <div className='Mobile'>
                <FooterMobile />
            </div>
        </>
    )
}

export default ProductDetailPage
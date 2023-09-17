import React, { useEffect, useState } from 'react';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import Category from '../components/ProductDetails/Category';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AppUrl from '../Api/AppUrl';

function ProductCategoryPage() {

    const { category } = useParams();
    const [productData, setProductData] = useState([]);


    useEffect(() => {

        window.scroll(0, 0);

        axios.get(AppUrl.ProductListByCategory(category))
        .then(response => {
            setProductData(response.data);
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
        <Category category={category} productData={productData} />
        <div className='Desktop'>
            <FooterDesktop />
        </div>
        <div className='Mobile'>
            <FooterMobile />
        </div>
    </>
  )
}

export default ProductCategoryPage
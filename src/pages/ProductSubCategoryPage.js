import React, { useEffect, useState } from 'react';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AppUrl from '../Api/AppUrl';
import SubCategory from '../components/ProductDetails/SubCategory';

function ProductSubCategoryPage() {

    const { category } = useParams();
    const { subcategory } = useParams();
    const [productData, setProductData] = useState([]);


    useEffect(() => {

        window.scroll(0, 0);

        axios.get(AppUrl.ProductListBySubCategory(category, subcategory))
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
        <SubCategory category={category} subcategory={subcategory} productData={productData} />
        <div className='Desktop'>
            <FooterDesktop />
        </div>
        <div className='Mobile'>
            <FooterMobile />
        </div>
    </>
  )
}

export default ProductSubCategoryPage
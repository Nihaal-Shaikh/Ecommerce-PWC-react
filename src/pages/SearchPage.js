import React, { useEffect, useState } from 'react';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AppUrl from '../Api/AppUrl';
import SearchList from '../components/ProductDetails/SearchList';

function SearchPage() {

    const { searchKey } = useParams();
    const [productData, setProductData] = useState([]);

    useEffect(() => {

        window.scroll(0, 0);

        axios.get(AppUrl.SearchByProduct(searchKey))
            .then(response => {
                setProductData(response.data);
            })
            .catch(error => {
            });
    }, [searchKey]);

  return (
    <>
        <div className='Desktop'>
            <NavMenuDesktop />
        </div>
        <div className='Mobile'>
            <NavMenuMobile />
        </div>
        <SearchList searchKey={searchKey} productData={productData} />
        <div className='Desktop'>
            <FooterDesktop />
        </div>
        <div className='Mobile'>
            <FooterMobile />
        </div>
    </>
  )
}

export default SearchPage
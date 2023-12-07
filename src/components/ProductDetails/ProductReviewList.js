import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AppUrl from '../../Api/AppUrl';

function ProductReviewList(props) {

    const [reviewData, setReviewData] = useState([]);
    const product_code = props.product_code;

    useEffect(() => {

        axios.get(AppUrl.ProductReviewList(product_code))
            .then(response => {
                setReviewData(response.data);
            })
            .catch(error => {
            });
    }, []);

    const generateStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= rating; i++) {
            stars.push(<i key={i} className="fa fa-star"></i>);
        }
        return stars;
    };

    return (
        <>
            <h6 className="mt-2">REVIEWS</h6>

            {reviewData.length > 0 ? (
                reviewData.map((reviewList, i) => (
                    <div key={i}>
                        <p className="p-0 m-0">
                            <span className="Review-Title">{reviewList.reviewer_name}</span>
                            <span className="ms-2 text-success">
                                {generateStars(reviewList.reviewer_rating)}
                            </span>
                        </p>
                        <p>{reviewList.reviewer_comment}</p>
                    </div>
                ))
            ) : (
                <p>This product has no reviews.</p>
            )}
        </>
    )
}

export default ProductReviewList
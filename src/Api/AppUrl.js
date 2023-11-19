const getBaseURL = 'http://127.0.0.1:8000/api';
const getVisitorDetailsURL = `${getBaseURL}/getVisitor`;
const postContact = `${getBaseURL}/postContact`;
const allSiteInfo = `${getBaseURL}/allSiteInfo`;
const allCategoryDetails = `${getBaseURL}/allCategory`;

function ProductListByRemark(Remark) {
  return `${getBaseURL}/productListByRemark/${Remark}`;
}

function ProductListByCategory(category) {
  return `${getBaseURL}/productListByCategory/${category}`;
}

function ProductListBySubCategory(category, subcategory) {
  return `${getBaseURL}/productListBySubCategory/${category}/${subcategory}`;
}

const allSlider = `${getBaseURL}/allSlider`;

function ProductDetails(id) {
  return `${getBaseURL}/productDetails/${id}`;
}

const notificationHistory = `${getBaseURL}/notification`;

function SearchByProduct(searchKey) {
  return `${getBaseURL}/search/${searchKey}`;
}

const userLogin = `${getBaseURL}/login`;

const userData = `${getBaseURL}/user`;

const userRegister = `${getBaseURL}/register`;

const forgotPassword = `${getBaseURL}/forgotPassword`;

const resetPassword = `${getBaseURL}/resetPassword`;

function SimilarProducts(code) {
  return `${getBaseURL}/similar/${code}`;
}

function ProductReviewList(id) {
  return `${getBaseURL}/productReview/${id}`;
}

const addToCart = `${getBaseURL}/addToCart`;

function CartCount(product_code) {
  return `${getBaseURL}/cartCount/${product_code}`;
}

function AddFavourite(product_code, email) {
  return `${getBaseURL}/favourite/${product_code}/${email}`;
}

function FavouriteList(email) {
  return `${getBaseURL}/favouriteList/${email}`;
}
const AppUrl = {
    getBaseURL,
    getVisitorDetailsURL,
    postContact,
    allSiteInfo,
    allCategoryDetails,
    ProductListByRemark,
    ProductListByCategory,
    ProductListBySubCategory,
    allSlider,
    ProductDetails,
    notificationHistory,
    SearchByProduct,
    userLogin,
    userData,
    userRegister,
    forgotPassword,
    resetPassword,
    SimilarProducts,
    ProductReviewList,
    addToCart,
    CartCount,
    AddFavourite,
    FavouriteList
};

export default AppUrl;
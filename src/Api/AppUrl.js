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

function ProductReviewList(product_code) {
  return `${getBaseURL}/productReview/${product_code}`;
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

function RemoveFavourite(product_code, email) {
  return `${getBaseURL}/removeFavourite/${product_code}/${email}`;
}

function CartList(email) {
  return `${getBaseURL}/cartList/${email}`;
}

function RemoveCartItem(id) {
  return `${getBaseURL}/removeCartItem/${id}`;
}

function CartItemPlus(id, quantity, price) {
  return `${getBaseURL}/cartItemPlus/${id}/${quantity}/${price}`;
}

function CartItemMinus(id, quantity, price) {
  return `${getBaseURL}/cartItemMinus/${id}/${quantity}/${price}`;
}

const cartOrder = `${getBaseURL}/cartOrder`;

function OrderListByUser(email) {
  return `${getBaseURL}/orderListByUser/${email}`;
}

const postReview = `${getBaseURL}/postReview`;

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
    FavouriteList,
    RemoveFavourite,
    CartList,
    RemoveCartItem,
    CartItemPlus,
    CartItemMinus,
    cartOrder,
    OrderListByUser,
    postReview
};

export default AppUrl;
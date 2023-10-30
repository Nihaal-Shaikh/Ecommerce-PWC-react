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
    resetPassword
};

export default AppUrl;
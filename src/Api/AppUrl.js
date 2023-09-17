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

const AppUrl = {
    getBaseURL,
    getVisitorDetailsURL,
    postContact,
    allSiteInfo,
    allCategoryDetails,
    ProductListByRemark,
    ProductListByCategory,
    ProductListBySubCategory
};

export default AppUrl;
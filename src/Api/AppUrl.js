const getBaseURL = 'http://127.0.0.1:8000/api';
const getVisitorDetailsURL = `${getBaseURL}/getVisitor`;
const postContact = `${getBaseURL}/postContact`;
const allSiteInfo = `${getBaseURL}/allSiteInfo`;

const AppUrl = {
    getBaseURL,
    getVisitorDetailsURL,
    postContact,
    allSiteInfo
};

export default AppUrl;
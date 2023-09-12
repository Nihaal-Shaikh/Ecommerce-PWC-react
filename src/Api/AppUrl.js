const getBaseURL = () => "http://127.0.0.1:8000/api";
const getVisitorDetailsURL = () => `${getBaseURL()}/getVisitor`;

const AppUrl = {
    getBaseURL,
    getVisitorDetailsURL,
};

export default AppUrl;
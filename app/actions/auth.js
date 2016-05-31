import credentials from '../.credentials'

var requestAccessToken = function() {
    return {
        type: 'ACCESS_TOKEN_FETCH_REQUESTED',
        payload: credentials
    }
};

export default {
    requestAccessToken
}

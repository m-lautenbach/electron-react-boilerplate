import credentials from '../.credentials'

export default function() {
    return {
        type: 'ACCESS_TOKEN_FETCH_REQUESTED',
        payload: credentials
    }
};

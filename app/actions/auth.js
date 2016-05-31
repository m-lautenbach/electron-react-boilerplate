import credentials from '../.credentials'

export default function() {
    return {
        type: 'START_SESSION_REQUESTED',
        payload: credentials
    }
};

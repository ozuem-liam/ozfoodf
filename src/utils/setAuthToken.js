import axios from 'axios';

/**
 *
 * Set jwt token in request headers else delete token from request headers
 * @export
 * @param {object} token
 * @returns {object} response object
 */

export default function setAuthToken(token) {
    if(token) {
        axios.defaults.headers.authorization = `${token}`;
    } else {
        delete axios.deafaults.headers.authorization;
    }
}
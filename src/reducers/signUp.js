import { SIGN_UP_FAILED } from '../actions/types';

const initialState = [{
    error: '',
    isSignedUp: ''
}];

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action = {}) {
    switch (action.type) {
        case SIGN_UP_FAILED:
            return [{
                error: action.error,
                isSignedUp: false,
            }, ...state];

        default: return state;
    }
};
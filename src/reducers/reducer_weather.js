import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // Insert new record to the start of the state array
            return [action.payload.data, ...state];
    }
    return state;
}
import {NAME} from '../actions/action1';

let initState = {
    name: 'reducer-1'
};

export default function reducer1(state = initState, action) {
    switch (action.type) {
        case NAME:
            return state;
        default:
            return state
    }
}

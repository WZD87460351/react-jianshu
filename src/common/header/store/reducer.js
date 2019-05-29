import * as constents from './constents';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
});

export default (state = defaultState, action) => {
    if(action.type === constents.SEARCH_FOCUSED){
        return state.set('focused', true)
    }
    if(action.type === constents.SEARCH_BLUR){
        return state.set('focused', false)
    }
    if(action.type === constents.CHANGE_LIST){
        return state.merge({
            list: action.data,
            totalPage: action.totalPage
        })
    }

    if(action.type === constents.MOUSE_ENTER){
        return state.set('mouseIn', true)
    }
    if(action.type === constents.MOUSE_LEAVE){
        return state.set('mouseIn', false)
    }

    if(action.type === constents.CHANGE_PAGE){
        return state.set('page', action.page)
    }
    
    return state;
}
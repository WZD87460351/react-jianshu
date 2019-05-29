import * as constents from './constents';
import { fromJS } from 'immutable';
import axios from 'axios';

export const searchFocused = () => {
    return {
        type: constents.SEARCH_FOCUSED
    }
}

export const searchBlur = () => {
    return {
        type: constents.SEARCH_BLUR
    }
}

const changeList = (data) => ({
    type: constents.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
           dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        });
    }
}

export const mouseEnter = () => ({
    type: constents.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: constents.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type: constents.CHANGE_PAGE,
    page
})
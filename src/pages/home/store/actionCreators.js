import axios from 'axios';
import * as constents from './constents';

const changeHomeData = (result) => ({
    type: constents.CHANGE_HOME_DATA,
    articleList: result.articleList,
    recommendList: result.recommendList,
    topicList: result.topicList
})

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        }).catch(() => {
            console.log('error');
        })
    }
}
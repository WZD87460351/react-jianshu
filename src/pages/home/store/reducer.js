
import { fromJS } from 'immutable';
import * as constents from './constents';
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
});

export default (state = defaultState, action) => {
    switch(action.type){
        case constents.CHANGE_HOME_DATA:
            return state.merge({
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                topicList: fromJS(action.topicList)
            })
        default:
            return state
    }
}
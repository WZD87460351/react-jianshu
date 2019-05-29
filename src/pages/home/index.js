import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';
class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='home-image' alt='' src='//upload.jianshu.io/admin_banners/web_images/4653/d63edcaf954eced9ed5f9ad5ed6904f71c04edf4.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount(){
        this.props.changeHomeData()
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeData();
        dispatch(action);
    }
})

export default connect(null, mapDispatch)(Home);
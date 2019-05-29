import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import{
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    Navsearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwich,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style';

class Header extends Component{
    getArea(){
        const {focused, list, page, totalPage, mouseIn} = this.props;
        const transList = list.toJS();
        const newList = [];
        if(transList.length){
            for(let i = ((page - 1) * 10); i < page * 10; i++){
                if(transList[i]){
                    newList.push(<SearchInfoItem key={transList[i]}>{transList[i]}</SearchInfoItem>)
                }
            }
        }
        if(focused || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={this.props.handleMouseEnter}
                    onMouseLeave={this.props.handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwich 
                            onClick={() => this.props.handleChangePage(page, totalPage, this.refSpin)}
                        >
                            <i ref={(spin) => {this.refSpin = spin}} className="iconfont spin">&#xe636;</i>
                            换一批
                        </SearchInfoSwich>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            newList
                        }
                        
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }

    render(){
        const { list } = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <Navsearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={() => this.props.handleInputFocus(list)}
                                onBlur = {this.props.handleInputBlur}
                            ></Navsearch>
                        </CSSTransition>
                        <i className={this.props.focused? 'iconfont focused zoom' : 'iconfont zoom'} >&#xe623;</i>
    
                        {this.getArea()}
                    </SearchWrapper>
                    <Addition>
                        <Button className='writting'>
                            <i className="iconfont">&#xe615;</i>
                            写文章
                        </Button>
                        <Button className='register'>注册</Button>
                    </Addition>  
                </Nav>
            </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            (list.size === 0) &&  dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocused());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage, refSpin){
            let originAngle = refSpin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle){
                originAngle = parseInt(originAngle, 10);
            }else{
                originAngle = 0;
            }
            refSpin.style.transform = 'rotate(' + (originAngle + 360)+ 'deg)';
            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
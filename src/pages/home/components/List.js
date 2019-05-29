import React, { Component } from 'react';
import { connect} from 'react-redux';
import { ListItem, ListInfo } from '../style';

class List extends Component{
    render(){
        const { articleList } = this.props;
        return(
            <div>
                {
                    articleList.map((item) => {
                        return(
                            <ListItem key={item.get('id')}>
                                <img className='pic' alt='' src={item.get('imageUrl')} />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
                   
            </div>
            
        )
    }
}

const mapState = (state) =>({
    articleList: state.get('home').get('articleList')
})

export default connect(mapState)(List);
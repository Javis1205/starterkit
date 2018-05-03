import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import style from './style';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import {Container} from 'native-base';
import {
    Header
} from '../../components';

class Main extends React.Component {
    static navigatorStyle = {
        navBarHidden: true
    }
    render(){
        return(
            <Container>
                <Header/>
            </Container>
        )
    }
}
const mapStateToProps = (state) => ({
    state: state
});
export default connect(mapStateToProps)(Main);
import React from 'react';
// import {
//     View,
//     Text,
// } from 'react-native';
// import style from './style';
// import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import { Container } from 'native-base';
// import { observer } from 'mobx-react/native';
// import { observable } from 'mobx';
import {
    Header
} from '../../components';

// @observer
class Main extends React.Component {
    static navigatorStyle = {
        navBarHidden: true
    }
    // @observable data = null
    constructor(props) {
        super(props);
        this.data = 1;
    }
    render() {
        console.log('DATA', this.data);
        return (
            <Container>
                <Header />
                <Header />
            </Container>
        );
    }
}
const mapStateToProps = (state) => ({
    state
});
export default connect(mapStateToProps)(Main);

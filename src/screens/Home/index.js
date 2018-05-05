import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
// import style from './style';
// import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
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
                <View style={{flex:1}}>
                    <MapView
                        ref={ref => { this.map = ref }}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: 20.993776,
                            longitude: 105.811417,
                            latitudeDelta: 0.021,
                            longitudeDelta: 0.021
                        }}
                        style={StyleSheet.absoluteFillObject}
                    />
                </View>
            </Container>
        );
    }
}
const mapStateToProps = (state) => ({
    state
});
export default connect(mapStateToProps)(Main);

import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import * as actions from '../redux/actions';
// import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { connect } from 'react-redux';

class Main extends React.Component {
    static navigatorStyle = {
        navBarHidden: true
    }
    goto(){
        this.props.dispatch(actions.login());
    }
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text onPress={()=>{
                    this.goto()
                }}>
                    loading...
                </Text>
            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    state: state
});
export default connect(mapStateToProps)(Main);
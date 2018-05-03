import React from 'react';
import {
    View,
} from 'react-native';
import PropTypes from "prop-types";
import Icon_FA  from 'react-native-vector-icons/FontAwesome';
import Icon_E   from 'react-native-vector-icons/Entypo';
import Icon_EI  from 'react-native-vector-icons/EvilIcons';
import Icon_F   from 'react-native-vector-icons/Feather';
import Icon_Fd  from 'react-native-vector-icons/Foundation';
import Icon_I   from 'react-native-vector-icons/Ionicons';
import Icon_MI  from 'react-native-vector-icons/MaterialIcons';
import Icon_MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_O   from 'react-native-vector-icons/Octicons';
import Icon_Z   from 'react-native-vector-icons/Zocial';
import Icon_SLI from 'react-native-vector-icons/SimpleLineIcons';

export default class Main extends React.PureComponent {
    static propTypes = {
        type: PropTypes.string,
        size: PropTypes.number,
        color: PropTypes.string,
        name: PropTypes.string
    }
    static defaultProps = {
        type: 'FA',
        size: 30,
        color: '#000',
        name: null
    }
    render(){
        switch(this.props.type){
            case 'FA' :
                return(
                    <View>
                        <Icon_FA
                            name={this.props.name}
                            size={this.props.size}
                            color={this.props.color}
                        />
                    </View>
                );
            break;
            case 'E' :
                return(
                    <View>
                        <Icon_E
                            name={this.props.name}
                            size={this.props.size}
                            color={this.props.color}
                        />
                    </View>
                );
            break;
            case 'EI' :
                return(
                    <View>
                        <Icon_EI
                            name={this.props.name}
                            size={this.props.size}
                            color={this.props.color}
                        />
                    </View>
                );
            break;
            case 'F' :
                return(
                    <View>
                        <Icon_F
                            name={this.props.name}
                            size={this.props.size}
                            color={this.props.color}
                        />
                    </View>
                );
            break;
            case 'Fd' :
                return(
                    <View>
                        <Icon_Fd
                            name={this.props.name}
                            size={this.props.size}
                            color={this.props.color}
                        />
                    </View>
                );
            break;
            case 'I' :
                return(
                    <View>
                        <Icon_I
                            name={this.props.name}
                            size={this.props.size}
                            color={this.props.color}
                        />
                    </View>
                );
            break;
            case 'MI' :
                return(
                    <View>
                        <Icon_MI
                            name={this.props.name}
                            size={this.props.size}
                            color={this.props.color}
                        />
                    </View>
                );
            break;
            case 'MCI' :
                return(
                    <View>
                        <Icon_MCI
                            name={this.props.name}
                            size={this.props.size}
                            color={this.props.color}
                        />
                    </View>
                );
            break;
            case 'O' :
                return(
                    <View>
                        <Icon_O
                            name={this.props.name}
                            size={this.props.size}
                            color={this.props.color}
                        />
                    </View>
                );
            break;
            case 'Z' :
                return(
                    <View>
                        <Icon_Z
                            name={this.props.name}
                            size={this.props.size}
                            color={this.props.color}
                        />
                    </View>
                );
            break;
            case 'SLI' :
                return(
                    <View>
                        <Icon_SLI
                            name={this.props.name}
                            size={this.props.size}
                            color={this.props.color}
                        />
                    </View>
                );
            break;
        }
    }
}
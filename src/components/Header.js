import React from 'react';
import {
    Header,
    Left,
    Button,
    Body,
    Title,
    Right,
} from 'native-base';
import PropTypes from "prop-types";
import Icon from './Icon';

export default class Main extends React.PureComponent {
    static propTypes = {
        title: PropTypes.string
    }
    static defaultProps = {
        title: 'Home'
    }
    render(){
        const props = this.props;

        return(
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='home' />
                    </Button>
                </Left>
                <Body>
                    <Title>
                        {props.title}
                    </Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='home' />
                    </Button>
                </Right>
            </Header>
        )
    }
}
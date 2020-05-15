import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';
import Colors from '../../Styles/colors';

export default class FabButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: true,
    };
  }

  onIconPress = () => {
    this.setState({
      name: !this.state.name,
    });
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onIconPress}>
        <Icon
          name={this.state.name ? 'eye-outline' : 'eye-off-outline'}
          size={24}
          color={Colors.textPrimary}
        />
      </TouchableOpacity>
    );
  }
}

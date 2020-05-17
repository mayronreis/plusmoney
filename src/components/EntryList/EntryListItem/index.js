import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Svg, {Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconPin from 'react-native-vector-icons/Entypo';
import Colors from '../../../Styles/colors';
import Currency from '../../Core/Currency';
import moment from '../../../vendors/moment';

const EntryListItem = ({entry, isFirstItem, isLastItem, onEntryPress}) => {
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 25 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);
  const bulletColor = entry.category.color || Colors.white;

  return (
    <TouchableOpacity
      onPress={() => {
        onEntryPress && onEntryPress(entry);
      }}>
      <View style={styles.container}>
        <View style={styles.bullet}>
          <Svg height="50" width="30">
            {showBulletLine && (
              <Rect
                x="9"
                y={bulletLineY}
                width="1.5"
                height={bulletLineHeight}
                fill={Colors.textPrimary}
              />
            )}

            <Circle
              cx="10"
              cy="25"
              r="8"
              stroke={Colors.textPrimary}
              strokeWidth="1.5"
              fill={bulletColor}
            />
          </Svg>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionText}>{entry.description}</Text>
          <View style={styles.details}>
            <Icon style={styles.entryAtIcon} name="access-time" size={12} />
            <Text style={styles.entryAtText}>
              {moment(entry.entryAt).calendar()}
            </Text>
            {entry.address && (
              <View style={styles.details}>
                <IconPin
                  style={styles.entryAddressIcon}
                  name="location-pin"
                  size={12}
                />
                <Text style={styles.entryAddressText}>
                  {entry.address.length > 40
                    ? entry.address.substring(0, 40 - 3) + '...'
                    : entry.address}
                </Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.amount}>
          <Text style={styles.amountText}>
            {' '}
            <Currency value={entry.amount} />{' '}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  entry: {},
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  bullet: {},
  description: {
    flex: 1,
    justifyContent: 'center',
  },
  amount: {
    justifyContent: 'center',
  },
  amountText: {
    fontSize: 14,
    color: Colors.textPrimary,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.textPrimary,
  },
  details: {
    flexDirection: 'row',
  },
  entryAtIcon: {
    color: Colors.textPrimary,
    marginTop: 2,
    marginRight: 2,
  },
  entryAtText: {
    fontSize: 12,
    color: Colors.textPrimary,
  },
  entryAddressIcon: {
    marginTop: 2,
    color: Colors.textPrimary,
    marginRight: 2,
    marginLeft: 5,
  },
  entryAddressText: {
    fontSize: 12,
    color: Colors.textPrimary,
  },
});

export default EntryListItem;

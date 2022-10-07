import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import * as RNLocalize from 'react-native-localize';

const Screen1 = () => {
  const navigation = useNavigation();

  console.log('Hello>>>>>>>>>>>>>>>', RNLocalize.usesAutoTimeZone());
  console.log(
    'Hello>>>>>>>>>>>>>>> date time',
    RNLocalize.usesAutoDateAndTime(),
  );

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Register');
        }}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});

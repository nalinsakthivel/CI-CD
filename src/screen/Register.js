import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

import Realm from 'realm';

const Register = () => {

  const realm = new Realm({path: 'UserDatabase.realm'});

  var user_details = realm.objects('user_details');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [listData, setListData] = useState(user_details);

  // create
  const user = () => {
    if (name) {
      realm.write(() => {
        var ID =
          realm.objects('user_details').sorted('user_id', true).length > 0
            ? realm.objects('user_details').sorted('user_id', true)[0].user_id +
              1
            : 1;
        realm.create('user_details', {
          user_id: ID,
          user_name: name,
          user_phone: '9751665327',
          user_age: 20,
        });
        Alert.alert(
          'Success',
          'You are registered successfully',
          [
            {
              text: 'Ok',
              onPress: () =>(setListData(realm.objects('user_details'))),
            },
          ],
          {cancelable: false},
        );
      });
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.TextInput}
        value={name}
        onChangeText={value => setName(value)}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          user();
        }}>
        <Text> Submit</Text>
      </TouchableOpacity>
      <View style={styles.list}>
        <FlatList
          data={listData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            console.log(item),
            (
              <View style={styles.listContainer}>
                <Text>Id: {item.user_id}</Text>
                <Text>Name: {item.user_name}</Text>
                <Text>Contact: {item.user_phone}</Text>
                <Text>Age: {item.user_age}</Text>
              </View>
            )
          )}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  TextInput: {
    borderWidth: 1,
    width: '80%',
    height: 40,
  },
  buttonContainer: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '40%',
    marginTop: 30,
  },
  listContainer: {
    borderWidth: 1,
    margin: 20,
    width: '80%',
    height: 90,
  },
  list: {
    marginTop: 20,
    height: 250,
  },
});

import Realm from 'realm';

const user_details = {
  name: 'user_details',
  properties: {
    user_id: {type: 'int', default: 0},
    user_name: 'string',
    user_phone: 'string',
    user_age: {type: 'int', default: 0},
  },
};
export default new Realm({schema: [user_details], schemaVersion: 1});

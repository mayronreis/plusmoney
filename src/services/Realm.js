import Realm from 'realm';

import CategorySchema from '../Schemas/CategorySchema';
import EntrySchema from '../Schemas/EntrySchema';

import {getDefaultCategories} from './Categories';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 3.4,
  });

  //dropDB(realm);
  initDB(realm);

  return realm;
};

export const initDB = (realm) => {
  const categoriesLength = realm.objects('Category').length;
  console.log(`initDB :: categories length: ${categoriesLength}`);

  if (categoriesLength === 0) {
    const categories = getDefaultCategories();

    console.log('initDB :: initing db...');

    try {
      realm.write(() => {
        categories.forEach((category) => {
          console.log(
            `initDB :: creating category: ${JSON.stringify(category)}`,
          );

          realm.create('Category', category, true);
        });
      });
    } catch (error) {}
  } else {
    console.log('initDB :: categories already existing... Skypping.');
  }
};

export const dropDB = (realm) => {
  console.log('dropDB :: dropping db...');
  realm.write(() => {
    realm.deleteAll();
  });
};

import 'react-native-get-random-values';
import {v1 as uuidv1} from 'uuid';

export const getUUID = () => {
  return uuidv1();
};

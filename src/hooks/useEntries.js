import {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {
  getEntries,
  addEntry,
  updateEntry,
  deleteEntry,
} from '../services/Entries';

const useEntries = (days = 7, category) => {
  const [entries, setEntries] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const loadEntries = async () => {
        const data = await getEntries(days, category);
        setEntries(data);
      };

      loadEntries();
    }, [category, days]),
  );

  return [entries, addEntry, updateEntry, deleteEntry];
};

export default useEntries;

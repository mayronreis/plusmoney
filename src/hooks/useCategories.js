import {useEffect, useState} from 'react';
import {
  getDebitCategories,
  getCreditCategories,
  getAllCategories,
  getInitCategories,
} from '../services/Categories';

const useCategories = () => {
  const [debitCategories, setDebitCategories] = useState();
  const [creditoCategories, setCreditCategories] = useState();
  const [allCategories, setAllCategories] = useState();
  const [initCategory, setInitCategory] = useState();

  useEffect(() => {
    const LoadDebitCategories = async () => {
      const data = await getDebitCategories();
      setDebitCategories(data);
    };

    const LoadCreditCategories = async () => {
      const data = await getCreditCategories();
      setCreditCategories(data);
    };

    const LoadAllCategories = async () => {
      const data = await getAllCategories();
      setAllCategories(data);
    };

    const LoadInitCategories = async () => {
      const data = await getInitCategories();
      setInitCategory(data);
    };
    LoadDebitCategories();
    LoadCreditCategories();
    LoadAllCategories();
    LoadInitCategories();
  }, []);
  return [debitCategories, creditoCategories, allCategories, initCategory];
};

export default useCategories;

import {useEffect, useState} from 'react';

const useSeeBalance = () => {
  const [eyeVisible, setEyeVisible] = useState();

  return [eyeVisible, setEyeVisible];
};

export default useSeeBalance;

import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [
 T,
 Dispatch<SetStateAction<T>>
];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
 const [state, setState] = useState(initialState);
   

 useEffect(() => {
  localStorage.setItem(key, JSON.stringify((state)));

  const storageValue = localStorage.getItem(key);
   
   if (storageValue) {
    setState(JSON.parse(storageValue));
   } else {
    setState(initialState);
   }
 }, [key, state])

 return [state, setState]

}

export default usePersistedState;
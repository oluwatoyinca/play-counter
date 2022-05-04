import {useState, useEffect} from 'react'

const useCounter = (cond = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
          if(cond){
            setCounter((prevCounter) => prevCounter + 1);
          }
          else {
            setCounter((prevCounter) => prevCounter - 1);
          }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [cond]);

    return counter;
}

export default useCounter
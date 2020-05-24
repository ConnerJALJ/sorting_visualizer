import React, { useState, useEffect } from 'react'
import './Visualizer.css'

const Visualizer = () => {
  const getWindowWidth = () => window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
  const getWindowHeight = () => window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

  const [screenDimensions, setScreenDimensions] = useState({
    height: getWindowHeight(),
    width: getWindowWidth()
  });
  const [array, setArray] = useState(resetArray());

  useEffect(() => {
    const debounceHandleResize = _ => {
      let timer;
      clearTimeout(timer);
      setTimeout(_ => {
        timer = null;
        let fn = () => {
          setScreenDimensions({
            height: getWindowHeight(),
            width: getWindowWidth()
          });
          setArray(() => resetArray());
        }
        fn.apply(this, arguments)
      }, 100);
    }

    window.addEventListener('resize', debounceHandleResize);
    return _ => {
      window.removeEventListener('resize', debounceHandleResize);
    }
  });
  
  function resetArray() {
    const _array = [];
    const _max = screenDimensions.height - (screenDimensions.height / 100 )* 25;
    const _min = 5;
    
    for (let i = 0; i < Math.floor((screenDimensions.width - 64) / 5); i ++) {
      _array.push(Math.floor(Math.random() * (_max - _min + 1) + _min))
    };
    return _array;
  };

  return (
    <div className="array-container">
    {array.map((value, idx) => (
      <div
        className="array-bar"
        id={idx}
        key={idx}
        style={{
          height: `${value}px`,
          width: `${3}px`,
        }}>
      </div>
    ))}
  </div>
  )
}

export default Visualizer;

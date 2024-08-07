import React from 'react';
import styles from './GreetLoader.module.css';


const GreetLoader = () => {
  return (
    
    <div className={styles.container}>
      <ul className={styles.helloLanguages}>
        <li style={{ animationDelay: '0s' }}>Hello</li>
        <li style={{ animationDelay: '0.5s' }}>¡Hola!</li>
        <li style={{ animationDelay: '1s' }}>Bonjour</li>
        <li style={{ animationDelay: '1.5s' }}>నమస్తే</li>
        <li style={{ animationDelay: '2s' }}>नमस्ते</li> 
        <li style={{ animationDelay: '2.5s' }}>你 好</li>
      </ul>
    </div>
  );
};

export default GreetLoader;

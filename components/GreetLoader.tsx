import styles from './GreetLoader.module.css'; // Adjust the path as needed

const GreetLoader = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.helloLanguages}>
        <li style={{ animationDelay: '0s' }}>Hello</li>
        <li style={{ animationDelay: '0.4s' }}>¡Hola!</li>
        <li style={{ animationDelay: '0.8s' }}>Bonjour</li>
        <li style={{ animationDelay: '1.2s' }}>నమస్తే</li>
        <li style={{ animationDelay: '1.6s' }}>नमस्ते</li>
        <li style={{ animationDelay: '2.0s' }}>你好</li> {/* Fixed spacing */}
      </ul>
    </div>
  );
};

export default GreetLoader;

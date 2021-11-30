import React from 'react'
import Card from './components/Card';
import styles from './App.module.css'
import shoes from './api/shoes.json'

function App() {
  return (
    <div className={styles.main}>
      {Object.keys(shoes).map((product,index) => {
        const shoe = shoes[product]
        return (
          <Card key={index} product={shoe} />
      )})}
    </div>
  );
}

export default App;

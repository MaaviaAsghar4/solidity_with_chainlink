import React, {useEffect, useState} from 'react'
import Card from './components/Card';
import styles from './App.module.css'
import shoes from './api/shoes.json'
import Web3 from 'web3'
import SolidityApp from 'contracts/SolidityApp.json'

let contract;
let web3; 

function App() {
  let [account, setAccount] = useState('')
  useEffect(async () => {
    let provider = window.ethereum

    if(typeof provider !== undefined) {
      provider
              .request({method: 'eth_requestAccounts'})
              .then((accounts) => {
                  setAccount(accounts[0])
              })
              .catch(err => {
                  console.log(err); 
                  return
              })

      window.ethereum.on('accountsChanged', (accounts) => {
          setAccount(accounts[0])
      })
    } else {
        alert('You need to have metamask installed')
        return
    }

    console.log(provider,'===========')

    web3 = new Web3(provider)

    const newtwordId = await web3.eth.net.getId();

    contract = new web3.eth.Contract(
        SolidityApp.abi,
        SolidityApp.networks[newtwordId].address
    )

  }, [])

  const buyShoe = (amount) => {
    return contract.methods.buyShoe(amount).send({
      from: account,
      // value: web3.utils.toWei(amount.toString(), 'ether'),
      value: amount,
    }).then((tx) => console.log(tx))
  }

  return (
    <div className={styles.main}>
      {Object.keys(shoes).map((product,index) => {
        const shoe = shoes[product]
        return (
          <Card key={index} product={shoe} onClickShoe={(value) => buyShoe(value)} />
      )})}
    </div>
  );
}

export default App;

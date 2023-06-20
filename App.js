import {React} from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { init } from './db';
import MainNavigator from './navigation'

init()
  .then(()=> console.log('Base de datos funcionando'))
  .catch(err =>{
    console.log("Base de datos no creada");
    console.log('err.message');

  })

export default function App() {
  return (<Provider store={store}><MainNavigator /></Provider>);
}


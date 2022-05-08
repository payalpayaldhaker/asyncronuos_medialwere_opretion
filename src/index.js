import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

      let intialState = { 
        name:'PAYAL',
      }
      let rootReducer = (prevState=intialState,action)=>{ 
        let newState = prevState;

      switch(action.type){ 
        case 'CHANGE_TO_BHARAT':
        console.log('CHANGETO BHARAT')
        return{ 
          ...newState,
          name:action.payload
        }
      
        
        case 'CHANGE_TO_MADHU':
        console.log('CHANGETOMADHU')
        return{ 
          ...newState,
          name:action.payload
        }
      
        default:
    
   return { 
    ...newState,
   } 
 }
 }
 let actionCreator1 =()=>{ 
  return { 
    type:'CHANGE_TO_BHARAT',
    payload:'BHARAT DHAKAD'
}
 }
 export const  myAsyncAction  =()=> {
    console.log('okoko');
    return (dispatch)=>{ 
          setTimeout(function(){ 
            //console.log('okokok');
         
            dispatch(actionCreator1());
            
          },10000);
    }
 
}
let store  = createStore(rootReducer,applyMiddleware(thunk));
console.log(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);


 

import {  useDispatch, useSelector } from 'react-redux';
import { myAsyncAction } from '.';
import './App.css';

function App() {

      // state
        let state =  useSelector((store)=>{ 
            return store
        });
         let dispatch =useDispatch();
      //function defination


      //return statements


  return (
      <> 
      {(state.name)}
      <div>hello{console.log(state)}</div>
      <button  onClick={()=>{dispatch(myAsyncAction())}}>button</button> 
      </>

  )

}

export default App;

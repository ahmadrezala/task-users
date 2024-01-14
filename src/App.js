import { BrowserRouter, Routes,Route } from 'react-router-dom';


import './index.css'
import Users from './Users';
import CreatUser from './Create';
import UpdateUser from './Update';

function App() {

  




  return (

        
    <>

    <BrowserRouter>
  
          <Routes>
            <Route path='/' element={<Users/>}/>
            <Route path='/create' element={<CreatUser/>}/>
            <Route path='/edit/:id' element={<UpdateUser/>}/>
          

          </Routes>



    </BrowserRouter>
</>

        
        
        
        
        
  );
}

export default App;

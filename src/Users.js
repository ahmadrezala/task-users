
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';


function Users() {

  const [users ,setUsers] = useState([])

  
    async function GetUsers() {
        const response = await fetch("http://localhost:4000/users");
        const users = await response.json();
        setUsers(users);
    }




    useEffect(()=>{
        GetUsers()
  
      
    },[])




   function handelDelete(user){
    
   

    fetch(`http://localhost:4000/users/${user.id}`, {
      method: 'DELETE',
      })
      .then(res => res.json())
      .then(res =>  GetUsers())
    

    }


  return (

        <section className='w-full h-[100vh] bg-black flex justify-center items-center flex-wrap'>

          <div className='w-full flex justify-center'>
          <Link to={'/create'} className='py-[18px] px-[30px] bg-[#786eff] uppercase text-white rounded-full' href="">create user</Link>
          </div>
          <div className='w-[50%] h-[80vh] bg-[#141a29] rounded-xl'>
            <div className='p-[12px]'>
              <div className='w-full flex mb-7'>
                <div className='w-[20%] capitalize text-white'>name</div>
                <div className='w-[20%] capitalize text-white'>last name</div>
                <div className='w-[20%] capitalize text-white'>user name</div>
                <div className='w-[20%] capitalize text-white'>phone number</div>

              </div>

              {users && users.map((user)=>{

                return(

                  <div className='w-full flex'>
                  <div className='w-[20%] capitalize text-white'>{user.name}</div>
                  <div className='w-[20%] capitalize text-white'>{user.lastname}</div>
                  <div className='w-[20%] capitalize text-white'>{user.username}</div>
                  <div className='w-[20%] capitalize text-white'>{user.phonenumber}</div>
                  <div>
                  <i onClick={()=>{handelDelete({id:user.id})}} className="bi bi-trash-fill mr-3 cursor-pointer text-red-500"></i>
                  <Link to={`edit/${user.id}`}><i className="bi bi-pencil text-white cursor-pointer"></i></Link>
                  </div>
  
                </div>

                )
              })}
            

            </div>


          </div>

        </section>
        

        
        
        
        
        
  );
}

export default Users;

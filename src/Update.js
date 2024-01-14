import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"



const UpdateUser = () => {

        const [user , setUsers] = useState({
            name:'',
            lastname:'',
            username:'',
            phonenumber:'',
        })

        const Navigate = useNavigate()

        const{id} = useParams()

        async function GetUsers() {
            const response = await fetch(`http://localhost:4000/users/${id}`);
            const users = await response.json();
          //   console.log(users);
            setUsers(users);
          }



          


        useEffect(()=>{      
      
            GetUsers()
            
          },[])






        const changeuser = (e) =>{
            setUsers({
                ...user,[e.target.name]:e.target.value
            })


        }


        const creatuser = ()=> {


            console.log(JSON. stringify(user));
            async function creat(){
                const response = await fetch(`http://localhost:4000/users/${id}`, {
                    method: "PUT",
                    body: JSON. stringify(user),
                  });
                  const result = await response.json();
                  console.log("Success:", result);
            }

            creat()
           

            Navigate('/')
        }


    return(
        <section className='w-full h-[100vh] bg-black flex justify-center items-center flex-wrap'>

      

        <div className='w-[50%] bg-[#141a29] rounded-xl'>
          <div className='p-[24px] flex flex-wrap'>
            <div className="w-full">
                <label className="text-white" htmlFor="">name</label>
                <input value={user.name} onChange={e => changeuser(e)} name="name" className="w-full rounded-lg h-8 mt-2" type="text" />

            </div>
            <div className="w-full mt-6">
                <label className="text-white" htmlFor="">last anme</label>
                <input value={user.lastname} onChange={e => changeuser(e)} name="lastname" className="w-full rounded-lg h-8 mt-2" type="text" />

            </div>
            <div className="w-full mt-6">
                <label className="text-white" htmlFor="">user name</label>
                <input value={user.username} onChange={e => changeuser(e)} name="username" className="w-full rounded-lg h-8 mt-2" type="text" />

            </div>
            <div className="w-full mt-6">
                <label className="text-white" htmlFor="">phonenumber</label>
                <input value={user.phonenumber} onChange={e => changeuser(e)} name="phonenumber" className="w-full rounded-lg h-8 mt-2" type="text" />

            </div>

            
            <div className="w-full flex justify-center">
                <div onClick={()=>{creatuser()}} className='py-[18px] cursor-pointer px-[30px] mt-8 bg-[#786eff] uppercase text-white rounded-full' href="">update user</div>

            </div>
       
          

          </div>


        </div>

      </section>
    )




}



export default UpdateUser
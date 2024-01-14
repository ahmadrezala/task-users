import { useState } from "react"
import { useNavigate } from "react-router-dom"



const CreatUser = () => {

        const [user , setUsers] = useState({
            name:'',
            lastname:'',
            username:'',
            phonenumber:'',
        })
        const [validate , setValidate] = useState(false)

        const Navigate = useNavigate()


        const changeuser = (e) =>{
            setUsers({
                ...user,[e.target.name]:e.target.value
            })


        }


        const creatuser = ()=> {
            if(user.name && user.lastname && user.username && user.phonenumber){

                async function creat(){
                    const response = await fetch("http://localhost:4000/users", {
                        method: "POST",
                        body: JSON. stringify(user),
                      });
                      const result = await response.json();
                      console.log("Success:", result);
                }
    
                Navigate('/')
    
                creat()
            }else{
                setValidate(true)
            }
        }


    return(
        <section className='w-full h-[100vh] bg-black flex justify-center items-center flex-wrap'>

      

        <div className='w-[50%] bg-[#141a29] rounded-xl'>
          <div className='p-[24px] flex flex-wrap'>
            <div className="w-full">
                <label className="text-white" htmlFor="">name</label>
                <input onChange={e => changeuser(e)} name="name" className="w-full rounded-lg h-8 mt-2" type="text" />

            </div>
            <div className="w-full mt-6">
                <label className="text-white" htmlFor="">last name</label>
                <input onChange={e => changeuser(e)} name="lastname" className="w-full rounded-lg h-8 mt-2" type="text" />

            </div>
            <div className="w-full mt-6">
                <label className="text-white" htmlFor="">user name</label>
                <input onChange={e => changeuser(e)} name="username" className="w-full rounded-lg h-8 mt-2" type="text" />

            </div>
            <div className="w-full mt-6">
                <label className="text-white" htmlFor="">phonenumber</label>
                <input onChange={e => changeuser(e)} name="phonenumber" className="w-full rounded-lg h-8 mt-2" type="text" />

            </div>

            { validate && <div className="text-red-900">all fialds most be requaired </div>}

            
            <div className="w-full flex justify-center">
                <div onClick={()=>{creatuser()}} className='py-[18px] cursor-pointer px-[30px] mt-8 bg-[#786eff] uppercase text-white rounded-full' href="">create user</div>

            </div>
       
          

          </div>


        </div>

      </section>
    )




}



export default CreatUser
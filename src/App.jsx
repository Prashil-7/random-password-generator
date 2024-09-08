/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState,useCallback ,useEffect,useRef} from 'react'


function App() {
  const [length ,setlength] = useState(5);
  const [number, setnumber]= useState(false);
  const [char, setchar]= useState(false);
  const [password, setpassword] =useState("");


  const click=()=>{

  }
  //refhook use

  const passref=useRef(null)

  const password_gene = useCallback(()=>{
      let pass= "" ;
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if(number) str+= "1234567890";
      if(char)  str+= "/';[]-09@!$%^&*()";

      for( let i=1; i<=length; i++){
        let char= Math.floor(Math.random()*str.length+1);
          pass += str.charAt(char);
      }
      setpassword(pass);


  },[length, number, char, setpassword])

  const copy= useCallback(()=>{
    passref.current?.select();
    passref.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    password_gene()
  },[length,char,number,password_gene])
  return (
    <>

 

   <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-3 my-8 text-orange-500 bg-gray-500'>

    <h1>password geenrator</h1>

    <div className='className "flex shadow rounded-lg overflow-hidden mb-4"' >

      <input type="text" value={password} placeholder='passwod' 
      className='outline-none w-full py-1 px-3 '
      ref={passref}/>
      

      <button className=' m-2 p-1.5 bg-blue-400 text-white
      ' onClick={copy  }
      >copy</button>
    </div>
        <input type="range"  min={8} max={40} value={length}
        onChange={(e)=>{setlength(e.target.value)}} />
        <label >range {length}</label>
        <div>

          <input type="checkbox" defaultChecked={number} onChange={(e)=>{
            setnumber((p)=> !p);
          }} /> <label htmlFor="">number</label>


              <input type="checkbox" defaultChecked={char} onChange={(e)=>{
            setchar((p)=> !p);
          }} /> <label htmlFor="">character</label>
          
        </div>
    </div>
   


    </>
  )
}

export default App

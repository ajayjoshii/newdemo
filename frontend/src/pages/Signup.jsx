import { useState } from "react";
import { API } from "../api";

export default function Signup() {
  const [form, setForm] = useState({ name:"", email:"", password:"" });

  const submit = async () => {
    await API.post("/auth/signup", form);
    alert("Signup success");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-6 shadow-lg rounded-xl w-80">
        <input placeholder="Name" className="input" onChange={e=>setForm({...form,name:e.target.value})}/>
        <input placeholder="Email" className="input" onChange={e=>setForm({...form,email:e.target.value})}/>
        <input type="password" placeholder="Password" className="input" onChange={e=>setForm({...form,password:e.target.value})}/>
        <button onClick={submit} className="btn">Signup</button>
      </div>
    </div>
  );
}
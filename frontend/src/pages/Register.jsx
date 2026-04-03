import { useState } from "react";
import API from "../api";

export default function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const submitHandler = async (e) => {
        e.preventDefault();
        const { data } = await API.post("/auth/register", form);
        localStorage.setItem("user", JSON.stringify(data));
        window.location.href = "/dashboard";
    };

    return (
        <form onSubmit={submitHandler}>
            <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
            <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
            <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
            <button>Register</button>
        </form>
    );
}
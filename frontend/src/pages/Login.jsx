import { useState } from "react";
import API from "../api";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });

    const submitHandler = async (e) => {
        e.preventDefault();
        const { data } = await API.post("/auth/login", form);
        localStorage.setItem("user", JSON.stringify(data));
        window.location.href = "/dashboard";
    };

    return (
        <form onSubmit={submitHandler}>
            <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
            <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
            <button>Login</button>
        </form>
    );
}
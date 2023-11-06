"use client";

import { ChangeEvent, FormEvent, useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(value)) event.target.classList.add("input-error");
    else event.target.classList.remove("input-error");
    setEmail(value);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };
      try {
        const strData = JSON.stringify(data);
        // console.log(strData)
        const response = await fetch("/api/validateuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: strData, // Convert the data to JSON
        });

        if (response.ok) {
          const result = await response.json();
          if(result.result) window.location.href = '/viewstudents';
        } else {
          console.error("Failed to insert data");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };
  return (
    <form className="card-body" onSubmit={onSubmit}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          className="input input-bordered"
          value={email}
          onChange={(event) => handleEmailChange(event)}
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;

"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, ChangeEvent, useState } from "react";

const UserForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const res = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const { message } = await res.json();
      setErrorMessage(message);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <h1>Create New User</h1>
      <label>Full Name </label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={handleInputChange}
        required
        value={formData.name}
      />
      <label>Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleInputChange}
        required
        value={formData.email}
      />
      <label>Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={handleInputChange}
        required
        value={formData.password}
      />
      <button type="submit" value="Create User">
        Create User
      </button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </form>
  );
};

export default UserForm;

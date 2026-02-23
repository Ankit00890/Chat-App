import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {
  const [loading, setloading] = useState(false)
  const { setAuthUser } = useAuthContext()
  const login = async (username, password) => {
    setloading(true);
    const toastId = toast.loading("Connecting to server... (may take ~30s on first load)");
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 70000);

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        signal: controller.signal
      })
      clearTimeout(timeoutId);
      const data = await res.json()
      if (data.error) {
        throw new Error(data.error)
      }
      localStorage.setItem("chat-user", JSON.stringify(data))
      setAuthUser(data)
      toast.success("Logged in!", { id: toastId });
    } catch (error) {
      if (error.name === "AbortError") {
        toast.error("Server took too long. Please try again.", { id: toastId });
      } else {
        toast.error(error.message, { id: toastId });
      }
    } finally {
      setloading(false);
    }
  }
  return { loading, login };
}

export default useLogin;

function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error("Please fill in all fields")
    return false;
  }
  return true;
} 
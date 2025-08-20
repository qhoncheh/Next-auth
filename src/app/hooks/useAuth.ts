import { useState, useEffect } from "react";
import { User } from "../lib/type";


const USER_KEY = "authUser";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(USER_KEY);
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const saveUser = (userData: User) => {
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem(USER_KEY);
    setUser(null);
  };

  return { user, saveUser, logout };
};

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { apiGet, apiJson } from "../lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const { user } = await apiGet("/auth/me");
      setUser(user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const login = async (email, password, captcha) => {
    const { user } = await apiJson("/auth/login", "POST", {
      email,
      password,
      captchaToken: captcha?.token,
      captchaAnswer: captcha?.answer,
    });
    setUser(user);
    return user;
  };

  const logout = async () => {
    await apiJson("/auth/logout", "POST", {});
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, refresh }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  name: string;
} | null;

type AuthContextType = {
  user: User;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);

  // ide jön majd a backend fetch loginhez
  async function login(password: string) {
    // ide csinálhatod pl. fetch("https://sajat-backend/login", { method: 'POST', body: JSON.stringify({password}) })
    // most csak demo
    if (password === 'admin123') {
      setUser({ name: 'Admin' });
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}

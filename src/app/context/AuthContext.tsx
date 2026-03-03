import React, { createContext, useContext, useState, ReactNode } from "react";

type Role = "GUEST" | "CUSTOMER" | "PARTNER" | "ADMIN";

interface User {
  name: string;
  role: Role;
  company?: string;
}

interface AuthContextType {
  user: User | null;
  login: (role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (role: Role) => {
    const mockUsers: Record<Role, User> = {
      GUEST: { name: "Visitante", role: "GUEST" },
      CUSTOMER: { name: "Anacleto Silva", role: "CUSTOMER" },
      PARTNER: { name: "Gestor EMOSE", role: "PARTNER", company: "EMOSE" },
      ADMIN: { name: "Admin SafeLife", role: "ADMIN" },
    };
    setUser(mockUsers[role]);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

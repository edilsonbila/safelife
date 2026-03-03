import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'guest' | 'client' | 'insurer' | 'admin';

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>('guest');
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  return (
    <AppContext.Provider value={{ role, setRole, language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}

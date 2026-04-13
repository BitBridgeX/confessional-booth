"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type MembershipTier = "free" | "member" | "inner-circle";

export interface User {
  id: string;
  email: string;
  name: string;
  tier: MembershipTier;
  avatarUrl?: string;
  joinedAt: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signUp: (email: string, password: string, name: string) => Promise<{ error?: string }>;
  signOut: () => void;
  isAtLeast: (tier: MembershipTier) => boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => ({}),
  signUp: async () => ({}),
  signOut: () => {},
  isAtLeast: () => false,
});

const TIER_RANK: Record<MembershipTier, number> = {
  free: 0,
  member: 1,
  "inner-circle": 2,
};

// Mock users for demo
const MOCK_USERS: Record<string, User & { password: string }> = {
  "sinner@holyfans.com": {
    id: "u1",
    email: "sinner@holyfans.com",
    password: "password",
    name: "Sinner One",
    tier: "member",
    joinedAt: "2024-01-15",
  },
  "inner@holyfans.com": {
    id: "u2",
    email: "inner@holyfans.com",
    password: "password",
    name: "Inner Circle",
    tier: "inner-circle",
    joinedAt: "2024-01-01",
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for persisted session
    try {
      const saved = localStorage.getItem("cb_user");
      if (saved) setUser(JSON.parse(saved));
    } catch {}
    setLoading(false);
  }, []);

  async function signIn(email: string, password: string) {
    const found = MOCK_USERS[email.toLowerCase()];
    if (!found || found.password !== password) {
      return { error: "Invalid email or password" };
    }
    const { password: _, ...userData } = found;
    setUser(userData);
    localStorage.setItem("cb_user", JSON.stringify(userData));
    return {};
  }

  async function signUp(email: string, password: string, name: string) {
    if (MOCK_USERS[email.toLowerCase()]) {
      return { error: "Account already exists" };
    }
    const newUser: User = {
      id: "u_" + Date.now(),
      email,
      name,
      tier: "free",
      joinedAt: new Date().toISOString().split("T")[0],
    };
    setUser(newUser);
    localStorage.setItem("cb_user", JSON.stringify(newUser));
    return {};
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem("cb_user");
  }

  function isAtLeast(tier: MembershipTier) {
    if (!user) return false;
    return TIER_RANK[user.tier] >= TIER_RANK[tier];
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut, isAtLeast }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

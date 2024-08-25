"use client";

import { toast } from "react-hot-toast";
import { BASE_URL } from "../Helper/BaseURL";
import { createContext, useContext, useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export const AuthProvider = ({ children }) => {
  const tokenStoragePath = "accessToken";
  const queryClient = useQueryClient();
  const [currentUser, setCurrentUser] = useState(null);

  // Fetch user data using fetch and react-query
  const { isLoading: isUserLoading, refetch: refetchUser, data: user, error } = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const token = localStorage.getItem(tokenStoragePath);
      if (!token) throw new Error("No token found");

      // Replace with your actual fetch logic
      const response = await fetch('/api/currentUser', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }

      return response.json();
    },
    // Optionally, add additional options here
  });

  useEffect(() => {
    const token = localStorage.getItem(tokenStoragePath);
    if (token && !currentUser) {
      refetchUser();
    }
  }, [currentUser, refetchUser]);

  const loginMutation = useMutation({
    mutationFn: async (userData) => {
      const response = await fetch(`${BASE_URL}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed. Please try again.");
      }

      return response.json();
    },
    onSuccess: (data) => {
      if (data?.success && data?.token) {
        localStorage.setItem(tokenStoragePath, data.token);
        setCurrentUser(data.user);
        queryClient.invalidateQueries(["currentUser"]);
      }
    },
    onError: (error) => {
      toast.error(error.message || "Login failed. Please try again.");
    },
  });

  const login = async (userData) => {
    try {
      await loginMutation.mutateAsync(userData);
      return true;
    } catch (error) {
      return error.message;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem(tokenStoragePath);
    toast.success("Logout successful");
  };

  const value = {
    currentUser,
    isLoading: isUserLoading,
    login,
    logout,
    refetchUser,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for stored user data on initial load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // TODO: Implement actual login logic with API
      // For now, we'll simulate a successful login
      const mockUser = {
        id: '1',
        email,
        name: 'Test User',
        role: 'professional',
        avatar: '/team/sarah.jpg',
      };

      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return mockUser;
    } catch (error) {
      throw error;
    }
  };

  const signup = async (userData) => {
    try {
      // TODO: Implement actual signup logic with API
      // For now, we'll simulate a successful signup
      const mockUser = {
        id: '1',
        ...userData,
        avatar: '/team/sarah.jpg',
      };

      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return mockUser;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/auth/login');
  };

  const updateProfile = async (profileData) => {
    try {
      // TODO: Implement actual profile update logic with API
      // For now, we'll simulate a successful update
      const updatedUser = {
        ...user,
        ...profileData,
      };

      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    } catch (error) {
      throw error;
    }
  };

  const resetPassword = async (token, newPassword) => {
    try {
      // TODO: Implement actual password reset logic with API
      // For now, we'll simulate a successful reset
      return true;
    } catch (error) {
      throw error;
    }
  };

  const value = {
    user,
    isLoading,
    login,
    signup,
    logout,
    updateProfile,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 
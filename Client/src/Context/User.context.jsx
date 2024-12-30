import React, { createContext, useContext, useState } from 'react';

// Create UserContext
const UserContext = createContext();

// UserProvider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // State to hold user data

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use UserContext
export const useUser = () => {
    return useContext(UserContext);
};

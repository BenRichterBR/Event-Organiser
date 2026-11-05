//import components
import { createContext, useState } from 'react';

//enables login/logout state toggle

export const LoginContext = createContext('');

export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </LoginContext.Provider>
    );
}

import { useState, createContext } from 'react';

const ModalContext = createContext();

function ModelContextProvider({ children }) {
    const [active, setActive] = useState(true);

    const handleShowModel = () => {
        setActive(true);
    };

    const handleHideModel = () => {
        setActive(false);
    };

    const value = {
        active,
        handleShowModel,
        handleHideModel,
    };

    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export { ModelContextProvider, ModalContext };

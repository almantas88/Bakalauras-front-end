import { createContext, useState } from 'react';
export const MessageContext = createContext('Default Value');

export const MessageProvider = (props) => {

    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);
    const [severity, setSeverity ] = useState('info');

    const closeError = () => {
        setError("");
        setShowError(false);
      };


    return (
<MessageContext.Provider value={[error, setError, showError, setShowError, severity, setSeverity, closeError]}>
        {props.children}
</MessageContext.Provider>

    );
};
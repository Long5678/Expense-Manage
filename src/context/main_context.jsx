import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const Main_context = createContext();

const MainProvider = ({ children }) => {
    let [userToken, setUserToken] = useState("");  // state này để chưa storage được giải mã khi người dùng login vào
    const [isPopupVisible, setPopupVisible] = useState(false); // state này để ẩn hiện popup khi click vào thêm mới
    const [isEditPopupVisible, setEditPopupVisible] = useState(false);
    const token = JSON.parse(localStorage.getItem('token_React'));
    useEffect(() => {
        if (token) {
            setUserToken(jwtDecode(token))

        } else {
            setUserToken("")
        }

        const handleStorageChange = () => {
            const updatedToken = JSON.parse(localStorage.getItem('token_React'));
            if (updatedToken) {
                setUserToken(jwtDecode(updatedToken));
            } else {
                setUserToken("");
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };

    }, [])


    function logOut() {
        localStorage.removeItem('token_React');
        setUserToken("");  // Cập nhật userToken khi logout
    }


    function handlePopup() {
        setPopupVisible(!isPopupVisible);
    }

    function handleEditPopup() {
        setEditPopupVisible(!isEditPopupVisible);
    }


    return <>
        <Main_context.Provider value={{ userToken, logOut, setUserToken, isPopupVisible, setPopupVisible, handlePopup, handleEditPopup, setEditPopupVisible, isEditPopupVisible }}>
            {children}
        </Main_context.Provider>
    </>
}

export { Main_context, MainProvider }
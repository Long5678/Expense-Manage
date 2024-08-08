import { Outlet } from "react-router-dom"
import "../../styles/auth.scss"

function Auth() {
    return <>
        <div className="article_form">
            <div className="main_form_userFlex">
                <div className="main_form_user">
                    <Outlet />
                </div>
            </div>
        </div>
    </>
}

export default Auth
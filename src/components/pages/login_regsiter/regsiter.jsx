import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from '../../../styles/Register.module.css';

function Regsiter() {
    const [errEmail, setErrEmail] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigateTo = useNavigate();

    async function handleRegister(data) {
        try {
            let res = await axios.post("http://localhost:3000/auth/register", {
                name: data.name,
                password: data.password,
                role: data.role,
                email: data.email,
            });
            console.log("Đăng ký thành công");
            navigateTo("/auth/login");
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.log(error.response.data.message);
                setErrEmail(true);
            } else {
                console.log(error);
                console.log("Post thất bại");
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.content} ${styles.content_login_left}`}>
                <div>
                    <h2>REGISTER FORM</h2>
                    <p>Fill in your registration information.</p>
                </div>
            </div>
            <div className={`${styles.content} ${styles.content_login_right}`}>
                <div className={styles.form_user}>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <div className={styles.form_group}>
                            <label>Name</label>
                            <input type="text" placeholder="Name" {...register("name", { required: true })} />
                            {errors.name && <span className={styles.message_errors}>Please do not leave it blank*</span>}
                        </div>
                        <div className={styles.form_group}>
                            <label>Email</label>
                            <input onFocus={() => setErrEmail(false)} type="email" placeholder="Email" {...register("email", { required: true })} />
                            {errors.email && <span className={styles.message_errors}>Please do not leave it blank*</span>}
                            {errEmail && <span className={styles.message_errors}>This email has been registered*</span>}
                        </div>
                        <div className={styles.form_group}>
                            <label>Password</label>
                            <input type="password" placeholder="Password" {...register("password", { required: true })} />
                            {errors.password && <span className={styles.message_errors}>Please do not leave it blank*</span>}
                        </div>
                        <input type="hidden" value="user" {...register("role")} />
                        <input className={styles.inp_form} type="submit" value="Register" />
                        <div className={styles.wrap}>
                            <p>Do you already have an account? <a href="/auth/login">Login now</a></p>
                            <a href="/">Back to the main page</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Regsiter;

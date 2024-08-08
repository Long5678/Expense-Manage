import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from '../../../styles/login.module.css';

function Login() {
    const navigateTo = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    async function handleLogin(data) {
        console.log(data);
        try {
            let res = await axios.post("http://localhost:3000/auth/login", {
                email: data.email,
                password: data.password,
            });
            let token = res.data.token;
            localStorage.setItem('token_React', JSON.stringify(token));
            console.log("Login successful");
            navigateTo("/");
        } catch (error) {
            console.log(error);
            console.log("Login failed");
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2>Login to Your Account</h2>
                    <p>Please enter your login details.</p>
                </div>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className={styles.form_group}>
                        <label>Email Address</label>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <span className={styles.message_errors}>Please do not leave empty*</span>
                        )}
                    </div>
                    <div className={styles.form_group}>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && (
                            <span className={styles.message_errors}>Please do not leave empty*</span>
                        )}
                    </div>
                    <input className={styles.inp_form} type="submit" value="Login" />
                    <div className={styles.wrap}>
                        <p>Don't have an account? <a href="/auth/register">Register now</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

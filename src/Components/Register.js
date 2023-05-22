import { TextField } from '@mui/material';
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import { useDispatch } from 'react-redux';
import { signUpSubmit } from '../Redux/Reducers/Signup.Slice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./style.css"
function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //formik and yup validation for input
    const userVali = Yup.object({
        username: Yup.string().min(3, "Please enter a valid username").required("Please enter a username"),
        password: Yup.string().matches(/^(?=.*[A-Z])(?=.*[\d])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/, "Need one special case,Upper case and a Number").required("Please enter a Password"),
        email: Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email").required("Please enter a Email"),

    })
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            email: ""
        }, validationSchema: userVali, onSubmit: (values) => {
            let finalData = {
                username: values.username,
                password: values.password,
                email: values.email
            }
            //storing it in Redux store
            dispatch(signUpSubmit(finalData))
            toast.success("Signup success!! Please Login")
            navigate("/login")
        }
    })
    return (
        <div className='whole-page'>
            <div className='sign-box'>
                <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "large" }}>Signup</div>
                <form onSubmit={formik.handleSubmit} >
                    <div>
                        <TextField label="username" variant='standard' className='text-field' name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} />
                        <div className="error-section">
                            {formik.touched.username && formik.errors.username ? <p>{formik.errors.username}</p> : null}
                        </div>
                    </div>
                    <div>
                        <TextField label="password" type="password" variant='standard' className='text-field' name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                        <div className="error-section">
                            {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
                        </div>
                    </div>
                    <div>
                        <TextField label="email" variant='standard' className='text-field' name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                        <div className="error-section">
                            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                        </div>
                    </div>
                    <div style={{ marginTop: "25px" }}>
                        <Button sx={{
                            color: "white", marginRight: "5px", backgroundColor: "rgb(240, 112, 152)", '&:hover': {
                                backgroundColor: "black", color: "whitesmoke"
                            }
                        }} type="submit" color="primary" variant="contained">Signup</Button>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Register
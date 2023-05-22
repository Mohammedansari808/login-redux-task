import React from 'react'
import { TextField } from '@mui/material';
import { useFormik } from 'formik'
import * as Yup from "yup";
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Login({ setValid, setUser }) {
    const navigate = useNavigate()
    const userVali = Yup.object({
        email: Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email").required("Please enter a Email"),
        password: Yup.string().required("Please enter a Password"),

    })
    const getUsers = useSelector((state) => state.signup.users)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        }, validationSchema: userVali, onSubmit: (values) => {
            const data = getUsers.find((user) => {
                return user.email === values.email && user.password === values.password
            })
            if (data) {
                setValid(true)
                setUser(data)
                navigate("/details")
                toast.success("login success")
            } else {
                toast.error("email or password is wrong")
            }

        }
    })
    return (
        <div className='whole-page'>
            <div className='sign-box' >
                <div style={{ textAlign: "center", fontWeight: "bold" }}>Login</div>
                <form onSubmit={formik.handleSubmit} style={{ padding: "15px" }}>
                    <div>
                        <TextField label="email" variant='standard' className='text-field' name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                        <div className='error-section'>
                            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                        </div>
                    </div>
                    <div>
                        <TextField type="password" label="password" variant='standard' className='text-field' name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                        <div className='error-section'>
                            {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
                        </div></div>
                    <div style={{ marginTop: "15px" }}>
                        <Button sx={{
                            color: "white", marginRight: "5px", backgroundColor: "rgb(240, 112, 152)", '&:hover': {
                                backgroundColor: "black", color: "whitesmoke"
                            }
                        }} type="submit" color="primary" variant="contained">Login</Button>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login
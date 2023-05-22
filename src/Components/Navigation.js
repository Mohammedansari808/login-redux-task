import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logOut } from '../Redux/Reducers/Signup.Slice';
function Navigation({ user, setValid, valid }) {
    const navigate = useNavigate()
    const dispatch = useDispatch(logOut)
    return (
        <div className='navigation-bar'>
            <div style={{ fontWeight: "bolder" }}>DEMOSITE</div>
            <div>
                {
                    valid ? <Button sx={{
                        color: "white", marginRight: "5px", backgroundColor: "rgb(240, 112, 152)", '&:hover': {
                            backgroundColor: "black", color: "whitesmoke"
                        }
                    }} onClick={() => { dispatch(logOut(user)); setValid(false) }} variant="contained">LogOut</Button> :
                        <div style={{ display: "flex" }}>
                            <Button sx={{
                                color: "white", marginRight: "5px", backgroundColor: "rgb(240, 112, 152)", '&:hover': {
                                    backgroundColor: "black", color: "whitesmoke"
                                }
                            }} variant='contained' onClick={() => { navigate("/login") }}>Login</Button>
                            <Button sx={{
                                color: "white", marginRight: "5px", backgroundColor: "rgb(240, 112, 152)", '&:hover': {
                                    backgroundColor: "black", color: "whitesmoke"
                                }
                            }} variant='contained' onClick={() => { navigate("/") }}>signup</Button>

                        </div>
                }
            </div>
        </div>
    )
}

export default Navigation
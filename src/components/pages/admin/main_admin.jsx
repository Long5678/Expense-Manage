import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Aside_admin from './aside_admin';
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux"
import { handleLoadchiTieu } from "../../../redux/action_thunk"
import { handleLoadDanhmuc } from "../../../redux/action_thunk"
import { Main_context } from "../../../context/main_context"
import { useContext, useEffect } from "react"


function Main_admin() {
    let dispatch = useDispatch();
    let { userToken } = useContext(Main_context)

    useEffect(() => {
        if (userToken.id) {
            const fetchData = async () => {
                try {
                    await dispatch(handleLoadchiTieu(userToken.id));
                    await dispatch(handleLoadDanhmuc(userToken.id));
                } catch (error) {
                    console.log("Error dispatching actions:", error);

                }
            };
            fetchData();
        }
    }), [userToken.id]
    return <>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid className='box-left' style={{ paddingTop: "0px" }} item xs={3}>
                    <div style={{ width: "100%" }}><Aside_admin /></div>
                </Grid>
                <Grid item xs={9}>
                    <div className='box-right'>
                        <Outlet />


                    </div>
                </Grid>
            </Grid>
        </Box>
    </>
}

export default Main_admin

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Outlet } from "react-router-dom";

import Header from '../layouts/header';
import Aside from "./aside"
import Footer from '../layouts/footer';
import "../../styles/aside_article.scss"
import { useEffect } from 'react';
import axios from 'axios'
// Main này nó chưa aside và article
function Main() {

    // useEffect(() => {
    //     axios
    //         .get('https://jsonplaceholder.typicode.com/posts')
    //         .then((res)=> {
    //             console.log(res.data);
    //         })
    //         .catch((err)=> {
    //             console.log(err);
    //         })
    // }, [])
    
    return <>
        <Header />
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid className='box-left' style={{ paddingTop: "0px" }} item xs={3}>
                    <div style={{ width: "100%" }}><Aside /></div>
                </Grid>
                <Grid item xs={9}>
                    <div className='box-right'>
                        <Outlet />


                    </div>
                    <Footer />
                </Grid>
            </Grid>
        </Box>
    </>
}


export default Main
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Aside_admin from './aside_admin';
import { Outlet } from "react-router-dom";

function Main_admin() {
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

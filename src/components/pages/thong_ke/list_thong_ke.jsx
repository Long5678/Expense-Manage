import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Item_thong_ke from './item_thong_ke';


function List_thong_ke() {
  return <>
      <div>
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell>Khoản chi</TableCell>
                          <TableCell align="right">Loại chi</TableCell>
                          <TableCell align="right">Số tiền</TableCell>
                          <TableCell align="right">Ngày tháng</TableCell>
                          <TableCell align="right">Chi tiết</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>

                      <Item_thong_ke />
                      <Item_thong_ke />
                      <Item_thong_ke />

                  </TableBody>
              </Table>
          </TableContainer>
      </div>
  </>

}

export default List_thong_ke
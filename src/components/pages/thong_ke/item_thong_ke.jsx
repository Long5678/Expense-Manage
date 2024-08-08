import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

function Item_thong_ke() {
  return <>
      <TableRow>
          <TableCell className='td-name' component="th" scope="row">Tiền điện</TableCell>
          <TableCell align="right">Hóa đơn</TableCell>
          <TableCell className='td-price' align="right">900.000 VNĐ</TableCell>
          <TableCell align="right">28-11-2024</TableCell>
          <TableCell align="right">
              <Button variant="contained" color="success">
                  Chi tiết
              </Button>
          </TableCell>
      </TableRow>
  </>
}

export default Item_thong_ke

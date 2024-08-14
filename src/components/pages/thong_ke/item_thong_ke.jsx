import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

function Item_thong_ke({_id, name, price, ngaythang, name_dm, mota}) {
  return <>
      <TableRow>
          <TableCell className='td-name' component="th" scope="row" align="center">{name}</TableCell>
          <TableCell align="center">{name_dm}</TableCell>
          <TableCell className='td-price' align="center">${price}</TableCell>
          <TableCell align="center">{ngaythang}</TableCell>
      </TableRow>
  </>
}

export default Item_thong_ke

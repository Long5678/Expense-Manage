import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Item_thong_ke from './item_thong_ke';
import { useSelector } from 'react-redux';

function List_thong_ke() {
    let chitieuData = useSelector((state) => state.chitieu.chitieuDatas);

    let datas = chitieuData.map((item, index) => {
        return <Item_thong_ke key={index} {...item} index={index} />
    })
  return <>
      <div>
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell align="center">Expenses</TableCell>
                          <TableCell align="center">Expenditure type</TableCell>
                          <TableCell align="center">Amount</TableCell>
                          <TableCell align="center">Date</TableCell>

                      </TableRow>
                  </TableHead>
                  <TableBody>

                    {datas}

                  </TableBody>
              </Table>
          </TableContainer>
      </div>
  </>

}

export default List_thong_ke
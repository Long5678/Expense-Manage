import Button from '@mui/material/Button';

function Tk_tien() {
  return <>
      <div className='box-btn-baocao'>
          <Button variant="contained" color="success" size="large">
              Ngân Sách : <span>9.500.000 VNĐ</span>
          </Button>
          <Button variant="contained" size="large">
              Tổng Chi : <span>3.500.000 VNĐ</span>
          </Button>
          <Button variant="contained" color="secondary" size="large">
              Số Dư : <span>6.000.000 VNĐ</span>
          </Button>
      </div>
  </>
}

export default Tk_tien
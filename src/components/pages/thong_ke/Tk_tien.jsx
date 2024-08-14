import Button from '@mui/material/Button';

function Tk_tien() {
  return <>
      <div className='box-btn-baocao'>
          <Button variant="contained" color="success" size="large">
              Budget: $300
          </Button>
          <Button variant="contained" size="large">
          Total Expenses: $1000
          </Button>
          <Button variant="contained" color="secondary" size="large">
          Expected Spending: $2500
          </Button>
      </div>
  </>
}

export default Tk_tien
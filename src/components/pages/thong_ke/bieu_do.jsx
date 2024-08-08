import { PieChart } from '@mui/x-charts/PieChart';
function Bieu_do() {
  return <>
      <div className='container-main'>
          <h2>Biểu đồ</h2>
          <PieChart
              series={[
                  {
                      data: [
                          { id: 0, value: 30, label: 'Trà sửa' },
                          { id: 1, value: 100, label: 'Tiền nước' },
                          { id: 2, value: 500, label: 'Tiền điện' },
                      ],
                  },
              ]}
              width={400}
              height={200}
          />

      </div>
  </>
}

export default Bieu_do
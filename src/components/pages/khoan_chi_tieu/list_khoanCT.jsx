import Item_khoanCT from "./item_khoanCT"
import { useSelector } from "react-redux"

function List_khoanCT() {
    let chitieuData = useSelector((state) => state.chitieu.chitieuDatas);

    let datas = chitieuData.map((item, index) => {
        return <Item_khoanCT key={index} {...item} index={index} />
    })
    
    return <>
        <table className="table custom-table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    {/* <th scope="col">Type of spending</th> */}
                    <th scope="col">Amount of money</th>
                    <th scope="col">Date</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {datas}
                {/* <tr>
                  <th scope="row">1</th>
                  <td className='td-name'>Tiền điện</td>
                  <td>Hóa đơn</td>
                  <td>900.000 VNĐ</td>
                  <td>28-11-2004</td>
                  <td>
                      <div className='box-btn'>
                          <button type="button" className="btn btn-primary">Sửa</button>
                          <button type="button" className="btn btn-danger">Xóa</button>
                      </div>

                  </td>
              </tr>

              <tr>
                  <th scope="row">2</th>
                  <td className='td-name'>Tiền nước</td>
                  <td>Hóa đơn</td>
                  <td>100.000 VNĐ</td>
                  <td>18-7-2004</td>
                  <td>
                      <div className='box-btn'>
                          <button type="button" className="btn btn-primary">Sửa</button>
                          <button type="button" className="btn btn-danger">Xóa</button>
                      </div>

                  </td>
              </tr>

              <tr>
                  <th scope="row">3</th>
                  <td className='td-name'>Trà sửa</td>
                  <td>Ăn uống</td>
                  <td>30.000 VNĐ</td>
                  <td>18-7-2004</td>
                  <td>
                      <div className='box-btn'>
                          <button type="button" className="btn btn-primary">Sửa</button>
                          <button type="button" className="btn btn-danger">Xóa</button>
                      </div>

                  </td>
              </tr> */}

            </tbody>
        </table>
    </>
}

export default List_khoanCT
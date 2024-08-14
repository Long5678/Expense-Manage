import Item_user from "./item_user"
import { useSelector } from "react-redux"

function List_user() {
    let chitieuData = useSelector((state) => state.chitieu.chitieuDatas);

    let datas = chitieuData.map((item, index) => {
        return <Item_user key={index} {...item} index={index} />
    })
  return <>
  <h1>User Expense Manage</h1>
      <table className="table custom-table">
          <thead style={{ fontSize: "1rem" }}>
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Type of Spending</th>
                  <th scope="col">Price</th>
                  <th scope="col">Description</th>
                  <th scope="col">IdUser</th>
              </tr>
          </thead>
          <tbody  >
          {datas}
           

          </tbody>
      </table>
  </>
}

export default List_user

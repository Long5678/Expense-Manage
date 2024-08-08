import Item_user from "./item_user"
function List_user() {
  return <>
  <h1>Quản lý user</h1>
      <table className="table custom-table">
          <thead style={{ fontSize: "1rem" }}>
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Tên khách hàng</th>
                  <th scope="col">Thao tác</th>
              </tr>
          </thead>
          <tbody  >
              <Item_user />
           

          </tbody>
      </table>
  </>
}

export default List_user

import Item_loai from "./item_loai"
import { useDispatch, useSelector } from "react-redux"
import { handleLoadDanhmuc } from "../../../redux/action_thunk"
import { useEffect, useContext } from "react"
import { Main_context } from "../../../context/main_context"


function List_loai() {
    let dispatch = useDispatch();
    let {userToken} = useContext(Main_context);  // lấy id người dùng ở context
    let danhmucData = useSelector((state) => state.danhmuc.danhmucDatas);  // nó sẽ lấy được cải mảng danhmucDatas nằm trong danhmuc_slice.js
    
    let datas = danhmucData.map((item,index)=> {
        return <Item_loai key={index} {...item} index={index}/>
    })

    useEffect(()=> {
        if (userToken.id) {  // mới lần đầu render là userToken.id = underfine , nên phải check nếu tồn tại ms dispatch
            // console.log("useEffrct");
            
            dispatch(handleLoadDanhmuc(userToken.id));
        }
    }, [userToken.id]) // nó sẽ render cái phần ở trong dựa vào sự thay đổi của userToken.id
  return <>
      <table className="table custom-table">
          <thead style={{ fontSize: "1rem" }}>
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name list</th>
                  <th scope="col"></th>
              </tr>
          </thead>
          <tbody  > 

              {datas}

          </tbody>
      </table>
  </>
}

export default List_loai
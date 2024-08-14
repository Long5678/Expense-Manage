import { handleDeleteChiTieu} from "../../../redux/action_thunk"
import { useDispatch } from "react-redux"

function Item_khoanCT({_id, name, price, ngaythang, mota, name_dm, index}) {
    let dispatch = useDispatch();
  return <>
      <tr>
          <th scope="row">{index+1}</th>
          <td className='td-name'>{name}</td>
          <td>{name_dm}</td>
          <td>${price}</td>
          <td>{mota}</td>
          <td>{ngaythang}</td>
          <td>
              <div className='box-btn'>
                  <button type="button" className="btn btn-primary">Edit</button>
                  <button onClick={() => {dispatch(handleDeleteChiTieu(_id))}} type="button" className="btn btn-danger">Delete</button>
              </div>

          </td>
      </tr> 
  </>
}

export default Item_khoanCT
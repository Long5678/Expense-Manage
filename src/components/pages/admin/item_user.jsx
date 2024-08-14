import { handleDeleteChiTieu} from "../../../redux/action_thunk"
import { useDispatch } from "react-redux"

function Item_user({_id, name, price, ngaythang, mota, name_dm, idUser ,index}) {
    let dispatch = useDispatch();
    return <>
        <tr>
        <th scope="row">{index+1}</th>
          <td className='td-name'>{name}</td>
          <td>{name_dm}</td>
          <td>${price}</td>
          <td>{mota}</td>
          <td>{idUser}</td>
            <td>
                <div className='box-btn'>
                    <button onClick={() => {dispatch(handleDeleteChiTieu(_id))}} type="button" className="btn btn-danger">Xóa</button>
                </div>

            </td>
        </tr>
    </>
}

export default Item_user
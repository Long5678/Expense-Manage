import { handleDeleteDM } from "../../../redux/action_thunk";
import { useDispatch } from "react-redux";

import Form_Editloai from "./formedit_loai";
function Item_loai({ _id, name, idUser, index }) {
    let dispatch = useDispatch()



  return <>
      <tr>
          <th scope="row">{index + 1}</th>
          <td>{name}</td>
          <td>
              <div className='box-btn'>
                  <Form_Editloai/>
                  <button onClick={() => {dispatch(handleDeleteDM(_id))}} type="button" className="btn btn-danger">Delete</button>
              </div>

          </td>
      </tr>
  </>
}

export default Item_loai
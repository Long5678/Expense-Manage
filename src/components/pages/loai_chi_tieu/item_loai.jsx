import { handleDeleteDM } from "../../../redux/action_thunk";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { Main_context } from "../../../context/main_context";
function Item_loai({ _id, name, idUser, index }) {
    let dispatch = useDispatch()
    let { isPopupVisible, setPopupVisible, handlePopup } = useContext(Main_context)

    function EditLoai() {
        handlePopup()
    }
  return <>
      <tr>
          <th scope="row">{index + 1}</th>
          <td>{name}</td>
          <td>
              <div className='box-btn'>
                  <button onClick={EditLoai} type="button" className="btn btn-primary">Edit</button>
                  <button onClick={() => {dispatch(handleDeleteDM(_id))}} type="button" className="btn btn-danger">Delete</button>
              </div>

          </td>
      </tr>
  </>
}

export default Item_loai
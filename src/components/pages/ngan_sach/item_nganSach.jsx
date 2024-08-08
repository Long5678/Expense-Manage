import { handleDeleteNgansach } from "../../../redux/action_thunk"
import { useDispatch } from "react-redux";

function Item_nganSach({ _id, price, name_ngansach, idUser, index }) {
    let dispatch = useDispatch()
    return <>
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{name_ngansach}</td>
            <td>${price}</td>
            <td>
                <div className='box-btn'>
                    <button type="button" className="btn btn-primary">Edit</button>
                    <button onClick={() => {dispatch(handleDeleteNgansach(_id))}} type="button" className="btn btn-danger">Delete</button>
                </div>
            </td>
        </tr>
    </>
}

export default Item_nganSach
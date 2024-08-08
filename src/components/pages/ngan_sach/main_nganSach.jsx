import Form_nganSach from "./form_nganSach"
import List_nganSach from "./list_nganSach"
import { useDispatch } from "react-redux"
import { handleLoadDanhmuc } from "../../../redux/action_thunk"
import { handleLoadNgansach } from "../../../redux/action_thunk"
import { Main_context } from "../../../context/main_context"
import { useContext ,useEffect } from "react"

function Main_nganSach() {

  let dispatch = useDispatch();
  let { userToken } = useContext(Main_context)

  useEffect(() => {
    if ( userToken.id) {
      // Call both actions sequentially with error handling
      const fetchData = async () => {
        try {
          await dispatch(handleLoadNgansach(userToken.id));
          await dispatch(handleLoadDanhmuc(userToken.id));
        } catch (error) {
          console.error("Error dispatching actions:", error);
        }
      };

      fetchData();
    }
  }, [userToken.id]);
  return <>
      <div className='container-main'>
          <Form_nganSach />
          <List_nganSach />

      </div>
  </>
}

export default Main_nganSach
import Item_nganSach from "./item_nganSach"
import { useSelector } from "react-redux"

function List_nganSach() {
    let ngansachData = useSelector((state)=> state.ngansach.ngansachDatas);
    // console.log(ngansachData);
    
    
    let datas = ngansachData.map((item,index)=> {
        return <Item_nganSach key={index} {...item} index={index}/>
    })

    
    return <>
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Budget Name</th>
                        <th scope="col">Budget money</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {datas}
                    {/* <Item_nganSach />
                    <Item_nganSach />
                    <Item_nganSach /> */}

                </tbody>
            </table>
        </div>
    </>
}

export default List_nganSach
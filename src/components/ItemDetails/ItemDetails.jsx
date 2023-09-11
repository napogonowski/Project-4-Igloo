import { useLocation, useSearchParams } from "react-router-dom";
import * as itemService from "../../utilities/items-service"
import { useEffect } from "react";
export default function ItemDetails({selectedItem, setSelectedItem, userItem, setUserItem}) {
  const { search, hash } = useLocation();
  const [searchParams] = useSearchParams();

  const selectedId = searchParams.get('selectedId');

  async function getOneItem(selectedId){
    try{
      const item = await itemService.getOneItem(selectedId) 
      setSelectedItem(item)
    } catch(error){
      console.log("failed to get user Item", error )
    }
  } 
    useEffect(() => {
      getOneItem(selectedId);
      // console.log("New console.log", selectedItem);
    }, [selectedId])
 

  async function _handleDelete(selectedId) {
    const newItemList = await itemService.deleteItem(selectedId);
    
    // const newItemList = userItem.filter((item) => item._id !== selectedId  )
    setUserItem(newItemList); 
  
  }

  
  return(
    <>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Details:</th>
              <td>{selectedItem.name}</td>
            </tr>
            <tr>
              <th>Quantity</th>
              <td>{selectedItem.qty}</td>
            </tr>
            <tr>
              <th>Expiry Date:</th>
              <td>{selectedItem.expDate}</td>
            </tr>
          </tbody>
        </table>
        <div className="btn">
          <button>edit</button>
          <br />
          <button onClick={() => _handleDelete(selectedId)}>remove</button>
        </div>
      </div>
    </>
   );

}
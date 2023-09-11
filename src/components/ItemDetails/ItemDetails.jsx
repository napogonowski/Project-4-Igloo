import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as itemService from "../../utilities/items-service"

export default function ItemDetails({selectedItem, setSelectedItem, userItem, setUserItem}) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate(); 
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
    }, [selectedId]);

  async function _handleDelete(selectedId) {
    const newItemList = await itemService.deleteItem(selectedId);
    setUserItem(newItemList); 
    navigate("/fridge");
    setSelectedItem({});
  
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
            <button onClick={() => _handleDelete(selectedId)}>DELETE</button>
        
        </div>
      </div>
    </>
  );

}
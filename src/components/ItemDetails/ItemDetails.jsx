import { useLocation, useSearchParams } from "react-router-dom";
import * as itemService from "../../utilities/items-service"
import { useEffect } from "react";
export default function ItemDetails({selectedItem, setSelectedItem}) {
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
      getOneItem(selectedId)
      console.log("New console.log", selectedItem);
    }, [selectedId])
 

  console.log({ selectedId });

  
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
          <button>remove</button>
        </div>
      </div>
    </>
   );

}
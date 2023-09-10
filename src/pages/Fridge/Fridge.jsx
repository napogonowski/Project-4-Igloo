import FridgeItems from "../../components/FridgeItems/FridgeItems";
import ActionBar from "../../components/ActionBar/ActionBar";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import "./Fridge.css"

export default function Fridge() {
  return (
    <main className="Fridge">
      <aside>
        <ActionBar />
      </aside>
      <FridgeItems />
      <ItemDetails />
    </main>

     
    
  );
}
import SideBar from "../SideBar/SideBar";

export default function ActionBar(){
  return (
    <>
    <SideBar />
      <div>
        <h1>IGLOO LOGO</h1>
        <ul>
          <li>Total items </li>
          <li>Expiring Items </li>
        </ul>
        <button>Freezer Toggle </button>
        <button>Add Fridge Item</button>
      </div>
    </>
  );
}
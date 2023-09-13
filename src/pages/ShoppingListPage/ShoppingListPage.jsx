import ShoppingListTable from "../../components/ShoppingListTable/ShoppingListTable";
import ShoppingSideBar from "../../components/SideBar/ShoppingSideBar";
import "./ShoppingListPage.css";

export default function ShoppingListPage({ user }) {
  return (
    <>
      <main className="shoppingList">
        <aside>
          <ShoppingSideBar user={user} />
        </aside>
        <div className="tabledContent">
          <ShoppingListTable />
        </div>
      </main>
    </>
  );
}

import ShoppingAction from "../../components/ShoppingAction/ShoppingAction";
import ShoppingListTable from "../../components/ShoppingListTable/ShoppingListTable";
import ShoppingSideBar from "../../components/SideBar/ShoppingSideBar";
import "./ShoppingListPage.css";

export default function ShoppingListPage({ user }) {
  return (
    <>
      <main className="shoppingList grid grid-cols-2 grid-rows-3		">
        {/* <main className="shoppingList grid grid-cols-[1fr, 400px, 1fr]"> */}
        <aside className="bg-red-500 col-start-1 rounded-2xl">
          <ShoppingSideBar user={user} />
        </aside>
        <div className="tabledContent col-start-2 row-start-1 ">
          <ShoppingAction />
        </div>
        <div className="tabledContent col-start-2 row-start-2 mt-20 ">
          <ShoppingListTable />
        </div>
      </main>
    </>
  );
}

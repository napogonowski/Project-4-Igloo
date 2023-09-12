import * as usersService from "../../utilities/users-service";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemForm from "../../components/ItemForm/ItemForm";
import { Button } from "../../components/ui/button";
export default function AddItemPage({ user }) {
  const [formCount, setFormCount] = useState(1);

  const renderForms = () => {
    const forms = [];
    for (let i = 0; i < formCount; i++) {
      forms.push(<ItemForm key={i} />);
    }
    return forms;
  };

  return (
    <>
      <div className="grid-cols-3">
        <Button onClick={() => setFormCount(formCount + 1)}>
          Add another item
        </Button>
        <div className="col-start-2">{renderForms()}</div>
        <div>
          <Link to="/fridge">
            <Button>Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

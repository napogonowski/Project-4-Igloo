import * as usersService from '../../utilities/users-service';
import { useState } from 'react';
import ItemForm from '../../components/ItemForm/ItemForm';

export default function AddItemPage({user}) {
  const [formCount, setFormCount] = useState(1); 

  const renderForms = () => {
    const forms = [];
    for (let i = 0; i < formCount; i++) {
      forms.push(<ItemForm key={i} />); 
    }
    return forms; 
  }


  return (
    <>
      <h1>Add Item Page</h1>
      {renderForms()}
      <button onClick={() => setFormCount(formCount + 1)}>Add another item</button>
      {/* submit button on form - should there be only 1 for all of them, the user would have to press submit reach time and thats kind of a trek */}
      
      
    </>
  );
}
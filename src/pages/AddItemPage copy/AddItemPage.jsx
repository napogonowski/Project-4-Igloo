import * as usersService from "../../utilities/users-service";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemForm from "../../components/ItemForm/ItemForm";
import { Button } from "../../components/ui/button";
// export default function AddItemPage({ user }) {
//   // const [formCount, setFormCount] = useState(1);
//   const [formFieldCount, setFormFieldCount] = useState(1);

//   // const renderForms = () => {
//   //   const forms = [];
//   //   for (let i = 0; i < formCount; i++) {
//   //     forms.push(<ItemForm key={i} />);
//   //   }
//   //   return forms;
//   // };
//   async function _handleSubmit(e) {
//     e.preventDefault();
//     try {
//       console.log("Item form JSX Page ", formData);
//       const newItem = await itemsService.createItem(formData);
//     } catch (error) {
//       console.log("Error creating Item (JSX FORM PAGE)", e);
//     }
//   }
//   const renderFormFields = () => {
//     const formsFields = [];
//     for (let i = 0; i < formFieldCount; i++) {
//       formsFields.push(<ItemForm key={i} />);
//     }
//     return formsFields;
//   };

//   return (
//     <>
//       {/* <div className="grid-cols-3">
//         <Button onClick={() => setFormCount(formCount + 1)}>
//           Add another item
//         </Button>
//         <div className="col-start-2">{renderForms()}</div>
//         <div>
//           <Link to="/fridge">
//             <Button>Home</Button>
//           </Link>
//         </div>
//       </div> */}

//       <div className="grid-cols-3">
//         <Button onClick={() => setFormFieldCount(formFieldCount + 1)}>
//           Add another item
//         </Button>
//         <form autoComplete="off" onSubmit={_handleSubmit}>
//           <div className="col-start-2">{renderFormFields()}</div>
//           <Button
//             className=" m-5  text-xl tracking-wider font-bold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-4 hover:scale-110 hover:bg-orange-500 duration-300 "
//             type="submit"
//           >
//             Submit
//           </Button>
//         </form>
//         <div>
//           <Link to="/fridge">
//             <Button>Home</Button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

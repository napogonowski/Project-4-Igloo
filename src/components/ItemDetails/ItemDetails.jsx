export default function ItemDetails() {
  return(
    <>
      <div>
        <table>
          <h5>Details</h5>
          <tbody>
            <tr>
              <th>Details:</th>
              <td>item details</td>
            </tr>
            <tr>
              <th>Quantity</th>
              <td>4</td>
            </tr>
            <tr>
              <th>Expiry Date:</th>
              <td>date</td>
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
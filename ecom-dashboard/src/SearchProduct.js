import Header from "./Header";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchProduct() {
  const [data, setData] = useState([]);

  async function search(key) {
    console.warn(key);
    let result = await fetch("http://localhost:8000/api/search/" + key);
    result = await result.json();
    setData(result);
  }

  async function deleteOperation(id) {
    if (
      window.confirm(
        "Are you sure you want to delete product with id = " + id + " ?"
      )
    ) {
      let result = await fetch("http://localhost:8000/api/delete/" + id, {
        method: "DELETE",
      });
      result = await result.json();
      console.warn(result);
      search();
      alert("Product has been deleted");
    } else {
      search();
    }
  }

  return (
    <div>
      <Header />

      <div className="col-sm-6 offset-sm-3">
        <h1>Search Product</h1>
        <br />
        <input
          onChange={(e) => search(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Type here to search for a product"
        />
        <br />
        <Table solid bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>

          {data.map((item) => (
            <tbody>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <img
                    style={{ width: 100 }}
                    src={"http://localhost:8000/" + item.file_path}
                  ></img>
                </td>
                <td>
                  <span
                    className="btnDelete"
                    onClick={() => deleteOperation(item.id)}
                  >
                    Delete
                  </span>
                  <Link to={"update/" + item.id}>
                    <span className="btnUpdate">Update</span>
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
}
export default SearchProduct;

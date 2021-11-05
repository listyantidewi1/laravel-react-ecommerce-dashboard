import Header from "./Header";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function UpdateProducts(props) {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  console.warn("props", props.match.params.id);
  const [data, setData] = useState([]);

  useEffect(async () => {
    let result = await fetch(
      "http://localhost:8000/api/product/" + props.match.params.id
    );
    result = await result.json();
    setData(result);
    setName(result.name);
    setPrice(result.price);
    setDescription(result.description);
    setFile(result.file);
  }, []);

  async function editProduct(id) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("price", price);
    formData.append("name", name);
    formData.append("description", description);
    let result = await fetch(
      "http://localhost:8000/api/updateproduct/" + id + "?_method=PUT",
      {
        method: "POST",
        body: formData,
      }
    );
    alert("Product has been updated!");
    history.push("/");
  }

  return (
    <div>
      <Header />
      <h1>Update Products</h1>
      <div className="col-sm-6 offset-sm-3">
        <br />
        <input
          className="form-control"
          type="text"
          defaultValue={data.name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          defaultValue={data.price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          defaultValue={data.description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="form-control"
          type="file"
          defaultValue={data.file_path}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <img
          width="50%"
          height="50%"
          src={"http://localhost:8000/" + data.file_path}
        />{" "}
        <br />
        <br />
        <button className="btn btn-danger" onClick={() => editProduct(data.id)}>
          Update Product
        </button>
      </div>
    </div>
  );
}
export default withRouter(UpdateProducts);

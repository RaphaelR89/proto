import api from "../config/api";
import axios from "axios";
import React, { useState } from "react";
axios;

const UploadPage = () => {
  const [file, setFile] = useState("");

  const handleUploadChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  // API
  const uploadImage = async (e) => {
    e.preventDefault();
    console.log("Upload!");
    const formData = new FormData();
    formData.append("image", file);
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await api
      .post("/upload-image", formData, headers)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log("erro tente mais tarde");
        }
      });
  };

  return (
    <div>
      <section>
        <div className="content">
          <h2>Upload Imagens ou Arquivos</h2>
        </div>
      </section>
      <div className="form-container">
        <form onSubmit={uploadImage} className="form">
          <h3>Adicione uma imagem:</h3>
          <input type="file" name="file" onChange={handleUploadChange} />
          <br />
          <br />
          <img src={file} alt="" />
          <button type="submit" className="submit">
            Upload!
          </button>
        </form>
      </div>
    </div>
  );
  className = "form";
};

export default UploadPage;

/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom"

function Bussiness2() {
  const history = useNavigate();
  const [File, setFile] = useState(null);
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Amount, setAmount] = useState("");
  const [Qty, setQty] = useState("");

  const [PlantName, setPlantName] = useState("");
  const [PlantCare, setPlantCare] = useState("");

  const [SoilName, setSoilName] = useState("");
  const [SoilType, setSoilType] = useState("");
  const [Description, setDescription] = useState("");
  const [Char, setChar] = useState("");
  const [GoodFor, setGoodFor] = useState("");

  const [PotCt, setPotCt] = useState("");
  const [Clr, setClr] = useState([]);
  const [PotType, setPotType] = useState([]);

  const [UtilName, setUtilName] = useState("");
  const [UtilDescription, setUtilDescription] = useState("");
  const [UtilUsage, setUtilUsage] = useState("");

  const [isPlant, setisPlant] = useState(false);
  const [isSoil, setisSoil] = useState(false);
  const [isPot, setisPot] = useState(false);
  const [isUtil, setisUtil] = useState(false);

  const handleSubmit = async ()=> {

    try {
      const formData = new FormData();
      formData.append("File", File); // Append the file to the FormData object
      formData.append("Name", Name);
      formData.append("Number", Number);
      formData.append("Amount", Amount);
      formData.append("Qty", Qty);
      formData.append("PlantName", PlantName);
      formData.append("PlantCare", PlantCare);
      formData.append("isPlant", isPlant);
  
        const response = await axios.post('http://localhost:3000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Response:', response.data);
      history("/business");
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4" style={{ textAlign: "center", marginTop: "10px" }}>
        Selling Form{" "}
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <form style={{ width: "60%" }}  method = "post" >
          <div className="form-group my-2">
            <label htmlFor="name">Email :</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Enter your email"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="number">Number:</label>
            <input
              type="tel"
              className="form-control"
              name="number"
              id="number"
              placeholder="Enter your phone number"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="amount">Amount (INR):</label>
            <input
              type="number"
              className="form-control"
              name="amount"
              id="amount"
              placeholder="Enter the amount"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>

          <div className="form-group my-2">
            <label htmlFor="qty">Quantity :</label>
            <input
              type="number"
              className="form-control"
              name="qty"
              id="qty"
              placeholder="Enter quantity"
              onChange={(e) => {
                setQty(e.target.value);
              }}
            />
          </div>

          <div className="form-group my-2">
            <input
              type="file"
              id="imageInput"
              name="imageInput"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>

          <div className="form-group my-2">
            <label>What do you want to sell?</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ctgr"
                id="Plants"
                value="Plants"
                onClick={() => {
                  setisPlant(true);
                  setisSoil(false);
                  setisPot(false);
                  setisUtil(false);
                }}
              />
              <label className="form-check-label" htmlFor="Plants">
                Plants
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ctgr"
                id="Pots"
                value="Pots"
                onClick={() => {
                  setisPlant(false);
                  setisSoil(false);
                  setisPot(true);
                  setisUtil(false);
                }}
              />
              <label className="form-check-label" htmlFor="Pots">
                Pots/Decorators
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ctgr"
                id="Soil"
                value="Soil"
                onClick={() => {
                  setisPlant(false);
                  setisSoil(true);
                  setisPot(false);
                  setisUtil(false);
                }}
              />
              <label className="form-check-label" htmlFor="Soil">
                Soil
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ctgr"
                id="Utils"
                value="Utils"
                onClick={() => {
                  setisPlant(false);
                  setisSoil(false);
                  setisPot(false);
                  setisUtil(true);
                }}
              />
              <label className="form-check-label" htmlFor="Utils">
                Garden Equipments
              </label>
            </div>
          </div>
          {isPlant == true ? (
            <Plant />
          ) : isPot == true ? (
            <Pots />
          ) : isSoil == true ? (
            <Soil />
          ) : isUtil == true ? (
            <Util />
          ) : (
            ""
          )}

          <button type="submit" className="btn btn-success" name="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const Plant = (props) => {
  return (
    <div className="additional-fields">
      <div className="form-group my-2">
        <label htmlFor="plantName">Name of Plant:</label>
        <input
          type="text"
          className="form-control"
          name="plant_name"
          id="plantName"
          placeholder="Enter plant name"
          onChange={() => {}}
        />
      </div>
      <div className="form-group my-2">
        <label htmlFor="plantCare">Plant Care:</label>
        <textarea
          className="form-control"
          id="plantCare"
          name="plant_care"
          placeholder="Enter plant care details"
          onChange={() => {}}
        ></textarea>
      </div>
    </div>
  );
};

var clr = ["Brown"];
const Pots = (props) => {
  const updator = (value) => {
    var exist = clr.indexOf(value);
    if (exist != -1) {
      clr = clr.filter((color) => color != value);
      console.log(clr);
    } else {
      clr.push(value);
      console.log(clr);
    }
  };

  return (
    <div className="additional-fields">
      <div className="form-group my-2">
        <label>Category:</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="potCategory"
            id="ceramic"
            value="Ceramic"
            onChange={() => {}}
          />
          <label className="form-check-label" htmlFor="ceramic">
            Ceramic
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="potCategory"
            id="clay"
            value="Clay"
            onChange={() => {}}
          />
          <label className="form-check-label" htmlFor="clay">
            Clay
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="potCategory"
            id="plasticFiber"
            value="Plastic Fiber"
            onChange={() => {}}
          />
          <label className="form-check-label" htmlFor="plasticFiber">
            Plastic Fiber
          </label>
        </div>
      </div>
      <div className="form-group my-2">
        <label htmlFor="color">Color:</label>

        <label htmlFor="color" className="mx-2">
          Red :
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          name="pot_color"
          id="Red"
          value="Red"
          onChange={() => {
            updator("Red");
          }}
        />

        <label htmlFor="color" className="mx-2">
          Blue :
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          name="pot_color"
          id="Blue"
          value="Blue"
          onChange={() => {
            updator("Blue");
          }}
        />

        <label htmlFor="color" className="mx-2">
          Green :
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          name="pot_color"
          id="Green"
          value="Green"
          onChange={() => {
            updator("Green");
          }}
        />
      </div>
      <div className="form-group">
        <label>Type:</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="potType"
            id="decorative"
            value="Decorative"
            onChange={() => {}}
          />
          <label className="form-check-label" htmlFor="decorative">
            Decorative
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="potType"
            id="classic"
            value="Classic"
            onChange={() => {}}
          />
          <label className="form-check-label" htmlFor="classic">
            Classic
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="potType"
            id="handmade"
            value="Handmade"
            onChange={() => {}}
          />
          <label className="form-check-label" htmlFor="handmade">
            Handmade
          </label>
        </div>
      </div>
    </div>
  );
};

const Soil = (props) => {
  return (
    <div className="additional-fields">
      <div className="form-group">
        <label htmlFor="soilType">Type:</label>
        <input
          type="text"
          className="form-control"
          id="soilType"
          placeholder="Enter soil type"
          onChange={() => {}}
        />
      </div>
      <div className="form-group">
        <label htmlFor="soilDescription">Description:</label>
        <textarea
          className="form-control"
          id="soilDescription"
          placeholder="Enter soil description"
          onChange={() => {}}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="characteristics">Characteristics:</label>
        <textarea
          className="form-control"
          id="characteristics"
          placeholder="Enter characteristics"
          onChange={() => {}}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="goodFor">Good For:</label>
        <input
          type="text"
          className="form-control"
          id="goodFor"
          placeholder="Enter good for information"
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

const Util = (props) => {
  return (
    <div className="additional-fields">
      <div className="form-group">
        <label htmlFor="equipmentsDescription">Description:</label>
        <textarea
          className="form-control"
          id="equipmentsDescription"
          placeholder="Enter equipments description"
          onChange={() => {}}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="usage">Usage:</label>
        <input
          type="text"
          className="form-control"
          id="usage"
          placeholder="Enter usage information"
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default Bussiness2;

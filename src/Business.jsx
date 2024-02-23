/* eslint-disable react/prop-types */
import { useState } from "react";
import Message from "./Messages";
function ProductSellingForm() {
  const [Ctgr, setCtgr] = useState("");
  const [errors, seterrors] = useState({
    name: "",
    number: "",
    amount: "",
    qty: "",
    image: "",

    plant_name: "",
    plant_care: "",

    soil_name: "",
    soil_type: "",
    description: "",
    characteristics: "",
    good_for: "",

    category: "",
    pot_color: ["Brown"],
    pot_type: "",

    util_name: "",
    util_description: "",
    usage: "",
  });

  const [formData, setformData] = useState({
    name: "",
    number: "",
    amount: "",
    qty: "",
    image: "",

    plant_name: "",
    plant_care: "",

    soil_name: "",
    soil_type: "",
    description: "",
    characteristics: "",
    good_for: "",

    category: "",
    pot_color: ["Brown"],
    pot_type: "",

    util_name: "",
    util_description: "",
    usage: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validation();
    seterrors(errors);

    console.log("Form submitted:", formData);
  };

  const validation = () => {
    const error = {};

    if (!formData.name || formData.name == "") {
      error.name = "Name can't be blank";
    } else {
      error.name = "";
    }

    if (!formData.number || formData.number == "") {
      error.number = "Last name can't be blank";
    } else if (formData.number.length != 10) {
      error.number = "10 Digit Mobile number only";
    } else {
      error.number = "";
    }

    if (!formData.amount || formData.amount == "") {
      error.amount = "Amount can't be blank";
    } else {
      error.amount = "";
    }

    if (!formData.qty || formData.qty == "") {
      error.qty = "Quantity can't be blank";
    } else {
      error.qty = "";
    }

    if (!formData.image || formData.image == "") {
      error.image = "Upload image";
    } else {
      error.image = "";
    }

    if (!formData.plant_name || formData.plant_name == "") {
      error.plant_name = "Plant name can't be blank";
    } else {
      error.plant_name = "";
    }

    if (!formData.plant_care || formData.plant_care == "") {
      error.plant_care = "Plant care can't be blank";
    } else {
      error.plant_care = "";
    }

    if (!formData.soil_name || formData.soil_name == "") {
      error.soil_name = "Soil name can't be blank";
    } else {
      error.soil_name = "";
    }

    if (!formData.soil_type || formData.soil_type == "") {
      error.soil_type = "Soil type can't be blank";
    } else {
      error.soil_type = "";
    }

    if (!formData.description || formData.description == "") {
      error.description = "Soil description can't be blank";
    } else {
      error.description = "";
    }

    if (!formData.good_for || formData.good_for == "") {
      error.good_for = "Goods for field can't be blank";
    } else {
      error.good_for = "";
    }

    if (!formData.category || formData.category == "") {
      error.category = "Please select Category";
    } else {
      error.category = "";
    }

    if (formData.pot_color.length == 0) {
      error.pot_color = "Please select pot colors";
    } else {
      error.pot_color = "";
    }

    if (!formData.pot_type || formData.pot_type == "") {
      error.pot_type = "Please select pot type";
    } else {
      error.pot_type = "";
    }

    if (!formData.util_name || formData.util_name == "") {
      error.util_name = "Util name can't be blank";
    } else {
      error.util_name = "";
    }

    if (!formData.util_description || formData.util_description == "") {
      error.util_description = "Utility description can't be blank";
    } else {
      error.util_description = "";
    }

    if (!formData.usage || formData.usage == "") {
      error.usage = "Utility usage can't be blank";
    } else {
      error.usage = "";
    }

    return error;
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
        <form style={{ width: "60%" }} onSubmit={handleSubmit}>
          {errors.name ? (
            <Message msg={errors.name} msg_type="error" />
          ) : errors.number ? (
            <Message msg={errors.number} msg_type="error" />
          ) : errors.amount ? (
            <Message msg={errors.amount} msg_type="error" />
          ) : errors.qty ? (
            <Message msg={errors.qty} msg_type="error" />
          ) : Ctgr == "Plants" ? (
            errors.plant_name ? (
              <Message msg={errors.plant_name} msg_type="error" />
            ) : errors.plant_care ? (
              <Message msg={errors.plant_care} msg_type="error" />
            ) : (
              ""
            )
          ) : Ctgr == "Pots" ? (
            errors.pot_type ? (
              <Message msg={errors.pot_type} msg_type="error" />
            ) : errors.pot_color.length ==0 ? (
              <Message msg={errors.pot_color} msg_type="error" />
            ) : errors.category ? (
              <Message msg={errors.category} msg_type="error" />
            ) : (
              ""
            )
          ) : Ctgr == "Soil" ? (
            errors.soil_name ? (
              <Message msg={errors.soil_name} msg_type="error" />
            ) : errors.soil_type ? (
              <Message msg={errors.soil_type} msg_type="error" />
            ) : errors.description ? (
              <Message msg={errors.description} msg_type="error" />
            ) : errors.characteristics ? (
              <Message msg={errors.characteristics} msg_type="error" />
            ) : errors.good_for ? (
              <Message msg={errors.good_for} msg_type="error" />
            ) : (
              ""
            )
          ) : Ctgr == "Utils" ? (
            errors.util_name ? (
              <Message msg={errors.util_name} msg_type="error" />
            ) : errors.util_description ? (
              <Message msg={errors.util_description} msg_type="error" />
            ) : errors.description ? (
              <Message msg={errors.description} msg_type="error" />
            ) : errors.characteristics ? (
              <Message msg={errors.characteristics} msg_type="error" />
            ) : errors.good_for ? (
              <Message msg={errors.good_for} msg_type="error" />
            ) : (
              ""
            )
          ) : (
            ""
          )}
          <div className="form-group my-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={(e) => {
                setformData((data) => ({
                  ...data,
                  [e.target.name]: e.target.value,
                }));
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
                setformData((data) => ({
                  ...data,
                  [e.target.name]: e.target.value,
                }));
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
                setformData((data) => ({
                  ...data,
                  [e.target.name]: e.target.value,
                }));
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
                setformData((data) => ({
                  ...data,
                  [e.target.name]: e.target.value,
                }));
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
                onClick={(e) => {
                  setCtgr(e.target.value);
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
                onClick={(e) => {
                  setCtgr(e.target.value);
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
                onClick={(e) => {
                  setCtgr(e.target.value);
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
                onClick={(e) => {
                  setCtgr(e.target.value);
                }}
              />
              <label className="form-check-label" htmlFor="Utils">
                Garden Equipments
              </label>
            </div>
          </div>
          {Ctgr === "Plants" ? (
            <Plant f={setformData} />
          ) : Ctgr === "Pots" ? (
            <Pots f={setformData} />
          ) : Ctgr === "Soil" ? (
            <Soil f={setformData} />
          ) : Ctgr === "Utils" ? (
            <Util f={setformData} />
          ) : (
            ""
          )}

          <button type="submit" className="btn btn-success" name="submit">
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
          onChange={(e) => {
            props.f((data) => ({ ...data, [e.target.name]: e.target.value }));
          }}
        />
      </div>
      <div className="form-group my-2">
        <label htmlFor="plantCare">Plant Care:</label>
        <textarea
          className="form-control"
          id="plantCare"
          name="plant_care"
          placeholder="Enter plant care details"
          onChange={(e) => {
            props.f((data) => ({ ...data, [e.target.name]: e.target.value }));
          }}
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
            onChange={(e) => {
              props.f((data) => ({ ...data, [e.target.name]: e.target.value }));
            }}
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
            onChange={(e) => {
              props.f((data) => ({ ...data, [e.target.name]: e.target.value }));
            }}
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
            onChange={(e) => {
              props.f((data) => ({ ...data, [e.target.name]: e.target.value }));
            }}
          />
          <label className="form-check-label" htmlFor="plasticFiber">
            Plastic Fiber
          </label>
        </div>
      </div>
      <div className="form-group my-2">
        <label htmlFor="color">Color:</label>

        <label htmlFor="color" className="mx-2">Red :</label>
        <input
          className="form-check-input"
          type="checkbox"
          name="pot_color"
          id="Red"
          value="Red"
          onChange={(e) => {
            updator("Red");
            props.f((data) => ({ ...data, [e.target.name]: clr }));
          }}
        />

        <label htmlFor="color" className="mx-2">Blue :</label>
        <input
          className="form-check-input"
          type="checkbox"
          name="pot_color"
          id="Blue"
          value="Blue"
          onChange={(e) => {
            updator("Blue");
            props.f((data) => ({ ...data, [e.target.name]: clr }));
          }}
        />

        <label htmlFor="color" className="mx-2">Green :</label>
        <input
          className="form-check-input"
          type="checkbox"
          name="pot_color"
          id="Green"
          value="Green"
          onChange={(e) => {
            updator("Green");
            props.f((data) => ({ ...data, [e.target.name]: clr }));
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
            onChange={(e) => {
              props.f((data) => ({ ...data, [e.target.name]: e.target.value }));
            }}
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
            onChange={(e) => {
              props.f((data) => ({ ...data, [e.target.name]: e.target.value }));
            }}
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
            onChange={(e) => {
              props.f((data) => ({ ...data, [e.target.name]: e.target.value }));
            }}
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
          onChange={(e) => {
            props.f((data) => ({ ...data, [e.target.name]: e.target.value }));
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="soilDescription">Description:</label>
        <textarea
          className="form-control"
          id="soilDescription"
          placeholder="Enter soil description"
          onChange={(e) => {
            props.f((data) => ({ ...data, [e.target.name]: e.target.value }));
          }}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="characteristics">Characteristics:</label>
        <textarea
          className="form-control"
          id="characteristics"
          placeholder="Enter characteristics"
          onChange={(e) => {
            props.f((data) => ({ ...data, [e.target.name]: e.target.value }));
          }}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="goodFor">Good For:</label>
        <input
          type="text"
          className="form-control"
          id="goodFor"
          placeholder="Enter good for information"
          onChange={(e) => {
            props.f((data) => ({ ...data, [e.target.name]: e.target.value }));
          }}
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
          onChange={(e) => {
            props.f((data) => ({ ...data, [e.target.name]: e.target.value }));
          }}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="usage">Usage:</label>
        <input
          type="text"
          className="form-control"
          id="usage"
          placeholder="Enter usage information"
          onChange={(e) => {
            props.f((data) => ({ ...data, [e.target.name]: e.target.value }));
          }}
        />
      </div>
    </div>
  );
};

export default ProductSellingForm;


const Business = ()=>{

  return (
    <>
    <div className="container">
    <h2 className="mb-4">Product Selling Form</h2>
    <form >
        <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>

        <div className="form-group">
            <label >Number:</label>
            <input type="tel" className="form-control" id="number" placeholder="Enter your phone number" />
        </div>

        <div className="form-group">
            <label>Amount (INR):</label>
            <input type="number" className="form-control" id="amount" placeholder="Enter the amount"  />
        </div>

        <div className="form-group">
            <label>Upload Pictures:</label>
            <div className="custom-file">
                <input type="file" className="custom-file-input" id="pictures" accept="image/*" />
                <label className="custom-file-label" ></label>
            </div>
        </div>

        <div className="form-group">
            <label>What do you want to sell?</label>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="productType" id="Plants" value="Plants"  onClick="showPlantFields()" />
                <label className="form-check-label" >Plants</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="productType" id="Pots" value="Pots" onClick="showPotFields()"/>
                <label className="form-check-label" >Pots/Decorators</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="productType" id="Soil" value="Soil" onClick="showSoilFields()"/>
                <label className="form-check-label" >Soil</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="productType" id="Equipments" value="Equipments" onClick="showEquipmentsFields()"/>
                <label className="form-check-label" >Garden Equipments</label>
            </div>
        </div>
    </form>
    </div>
    </>
  );
}

export default Business  ; 
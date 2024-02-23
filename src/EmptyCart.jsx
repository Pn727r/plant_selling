import GIF from "./assets/cart.gif";

const EmptyCart = () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  return (
    <>
      <div
        className="container"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <img
          src={GIF}
          alt="Animated GIF"
          style={{ width: width * 0.3, height: height * 0.5 }}
        />
      </div>

      <div style={{ textAlign: "center", marginTop: 20 }}>
        <p style={{ fontSize: width * 0.02, fontWeight: "bold" }}>
          Your cart is empty.
        </p>
        <p style={{ fontSize: width * 0.02 }}>
          Looks like you have not added anything to your cart. Go
          <br /> ahead & explore top items.
        </p>
      </div>
    </>
  );
};

export default EmptyCart;

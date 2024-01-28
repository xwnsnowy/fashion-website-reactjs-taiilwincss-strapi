import CartHeader from "../components/CartHeader/";

const CartLayout = ({ children }) => {
  return (
    <>
      <CartHeader />
      {children}
    </>
  );
};

CartLayout.propTypes = {
  children: CartLayout.node,
};

export default CartLayout;

import DefaultHeader from "../components/DefaultHeader";
import PropTypes from "prop-types";
import DefaultFooter from "../components/DefaultFooter";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <DefaultHeader />
      {children}
      <DefaultFooter />
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

export default DefaultLayout;

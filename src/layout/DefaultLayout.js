import DefaultFooter from "./footer/DefaultFooter";
import DefaultHeader from "./header/DefaultHeader";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <DefaultHeader />
      {children}
      <DefaultFooter />
    </>
  );
};

export default DefaultLayout;

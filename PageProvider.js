import React, { createContext, useContext } from "react";

export const PageContext = createContext();

const View = ({ children, pageContext, ...props }) => {
  const [isSSR, $isSSR] = React.useState(true);
  React.useEffect(() => {
    $isSSR(false);
  }, []);
  return (
    <PageContext.Provider value={{ isSSR, ...pageContext }}>
      {children}
    </PageContext.Provider>
  );
};
export const usePageContext = () => {
  return useContext(PageContext) || {};
};
export default View;

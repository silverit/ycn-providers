// src/context/state.js
import React from "react";
import PageProvider from "./PageContext";
import _ from "lodash";

const Providers = ({ providers, children, ...props }) => {
  if (_.first(providers)) {
    const firstProvider = providers.shift();
    return React.createElement(
      firstProvider,
      props,
      <Providers providers={providers} {...props}>
        {children}
      </Providers>
    );
  }

  return children;
};
export default function Wrapper({ children, ...props }) {
  return (
    <Providers providers={[PageProvider]} {...props}>
      {children}
    </Providers>
  );
}

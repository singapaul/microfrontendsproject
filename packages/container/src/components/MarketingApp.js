import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

// We can use this generic approach to render any framework into this react
// container
export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

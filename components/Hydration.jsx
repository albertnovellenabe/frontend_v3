"use client";
import React, { Children, useEffect, useState } from "react";

const Hydration = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <></>;
  }
  return <div>{children}</div>;
};

export default Hydration;

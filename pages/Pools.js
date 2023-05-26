import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import images from "../assets";
import Style from "../styles/Pools.module.css";

import { PoolAdd, PoolConnect } from "../Components/index";
import { SwapTokenContext } from "../Context/SwapContext";

const Pool = () => {
  const { account } = useContext(SwapTokenContext);
  return (
    <div className={Style.Pool}>{account ? <PoolAdd /> : <PoolConnect />}</div>
  );
};

export default Pool;

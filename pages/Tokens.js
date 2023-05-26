import React, { useState, useEffect } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/Tokens.module.css";
import images from "../assets";
import { AllTokens } from "../Components/index";

const Tokens = () => {
  const [allTokenList, setAllTokenList] = useState([
    {
      number: 1,
      image: images.etherlogo,
      name: "Ether",
      symbol: "ETH",
      price: "$1,732.86",
      change: "- 0.31",
      tvl: "$2,000,337,780",
      volume: "$1,451,523,748",
    },
    {
      number: 2,
      image: images.etherlogo,
      name: "USDC Coin",
      symbol: "USDC",
      price: "$0.997",
      change: "+ 0.01",
      tvl: "$33,432,757,756",
      volume: "$716.5 M",
    },
    {
      number: 3,
      image: images.etherlogo,
      name: "Wrapped BTC",
      symbol: "WBTC",
      price: "$27,080.03",
      change: "- 2.42",
      tvl: "$4,075,824,161",
      volume: "$163,779,587",
    },
    {
      number: 4,
      image: images.etherlogo,
      name: "Filecoin",
      symbol: "FIL",
      price: "$5.40",
      change: "+ 0.01",
      tvl: "$2,217,237,256",
      volume: "$185,568,541",
    },
  ]);

  const [copyAllTokenList, setCopyAllTokenList] = useState(allTokenList);
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  const onHandleSearch = (value) => {
    const filteredTokens = allTokenList.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredTokens.length === 0) {
      setAllTokenList(copyAllTokenList);
    } else {
      setAllTokenList(filteredTokens);
    }
  };

  const onClearSearch = () => {
    if (allTokenList.length && copyAllTokenList.length) {
      setAllTokenList(copyAllTokenList);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      onHandleSearch(search);
    } else {
      onClearSearch();
    }
  }, [search]);

  return (
    <div className={Style.Tokens}>
      <div className={Style.Tokens_box}>
        <h2>Top tokens on Jackrabbit</h2>
        <div className={Style.Tokens_box_header}>
          <div className={Style.Tokens_box_ethereum}>
            <p>
              <Image
                src={images.etherlogo}
                alt="ether"
                width={20}
                height={20}
              />
            </p>
            <p>Ethereum</p>
          </div>
          <div className={Style.Tokens_box_search}>
            <p>
              <Image src={images.search} alt="image" width={20} height={20} />
            </p>
            <input
              type="text"
              placeholder="Filter tokens"
              onChange={(e) => setSearchItem(e.target.value)}
              value={searchItem}
            />
          </div>
        </div>

        <AllTokens allTokenList={allTokenList} />
      </div>
    </div>
  );
};

export default Tokens;

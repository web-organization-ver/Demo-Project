import React, { useState } from "react";

const Telegram = () => {
  const [urlval, seturlval] = useState("https://t.me/+wvxTjfEV-TllZDQ1");

  function remove() {
    seturlval(urlval.slice(0, 14) + "etr5d3-TllZDQ1");
  }
  return (
    <div>
      <a href={urlval} onClick={() => remove()} target="_blank">Link</a>
    </div>
  );
};

export default Telegram;

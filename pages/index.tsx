import { generatePrimeSync } from "crypto";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [value, setValue] = useState<string[]>(["apple", "grape", "orange"]);

  const onClick = () => {
    const copy = [...value];
    copy.push("追加");
    setValue(copy);
  };
  useEffect(() => {
    console.log("更新されました");
    console.log(value);
  }, [value]);

  return (
    <div>
      {value.map((i, index) => (
        <p key={index}>{i}</p>
      ))}
      <p onClick={onClick}>配列追加</p>
    </div>
  );
};

export default Home;

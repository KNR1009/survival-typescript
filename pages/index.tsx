import { generatePrimeSync } from "crypto";
import type { NextPage } from "next";
import _ from "lodash";

const Home: NextPage = () => {
  const user = {
    name: "kazu",
    age: 24,
    phone: 12345678,
    address: "東京都",
  };

  const userInfo = _.pick(user, ["name", "age"]);

  console.log(userInfo);

  return <div>aaa</div>;
};

export default Home;

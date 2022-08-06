import { generatePrimeSync } from "crypto";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  type Person = {
    name: string;
    age: number;
    phone: string;
  };

  // type createdPick<T, K extends keyof T> = {
  //   [P in K]: T[P];
  // };

  type newPerson = Exclude<Person, "age">;

  return <div></div>;
};

export default Home;

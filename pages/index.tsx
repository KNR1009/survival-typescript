import type { NextPage } from "next";

const Home: NextPage = () => {
  type Person = {
    name: string;
    age?: number;
    address?: string;
    email: string;
  };

  type User = "kazu" | "taro" | "hanako";

  type newUser = Exclude<User, "kazu">;

  return <div>aaa</div>;
};

export default Home;

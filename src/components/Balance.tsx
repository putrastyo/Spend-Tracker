import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Balance = () => {
  const balance = useSelector((state: RootState) => state.transactions.balance);
  return (
    <div className="text-center text-white h-[20%] flex flex-col justify-center">
      <p className="font-light mb-1">Available Balance</p>
      <h1 className=" text-4xl font-bold">Rp {balance.toLocaleString()}</h1>
    </div>
  );
};

export default Balance;

import { useSelector } from "react-redux";

const Balance = () => {
  const balance = useSelector((state) => state.transactions.balance);
  return (
    <div className="text-center text-white h-[20%] flex flex-col justify-center">
      <p className="font-light mb-1">Available Balance</p>
      <h1 className=" text-4xl font-bold">Rp {balance.toLocaleString()}</h1>
    </div>
  );
};

export default Balance;

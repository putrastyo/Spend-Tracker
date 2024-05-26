import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { resetAll } from "../slices/transactionSlice";

const Balance = () => {
  const dispatch = useDispatch();

  const balance = useSelector((state: RootState) => state.transactions.balance);

  const handleResetAll = () => {
    if (window.confirm("Are you sure you want to reset all transactions?")) {
      dispatch(resetAll());
    }
  };

  return (
    <div className="text-center text-white h-[20%] flex flex-col justify-center items-center">
      <p className="font-light mb-1">Available Balance</p>
      <h1 className=" text-4xl font-bold">Rp {balance.toLocaleString()}</h1>
      <button
        className="text-sm mt-4 bg-red-500 text-white p-1 rounded"
        onClick={handleResetAll}
      >
        Reset Data
      </button>
    </div>
  );
};

export default Balance;

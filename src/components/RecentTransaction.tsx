import { Link } from "react-router-dom";
import TransactionItem from "./TransactionItem";
import { useSelector } from "react-redux";

const RecentTransaction = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const recentTransaction = [...transactions].reverse();
  return (
    <div className="h-full pb-12 pe-3 overflow-auto">
      <div className="flex justify-between items-center mb-3">
        <h5 className="text-lg font-medium">Recent Transaction</h5>
        <Link to={"/transaction"} className="text-sm">
          See all
        </Link>
      </div>
      <div className="flex flex-col">
        {recentTransaction.map((transaction, index) => (
          <TransactionItem
            type={transaction.type}
            category={transaction.category}
            amount={transaction.amount}
            note={transaction.note}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransaction;

import { useSelector } from "react-redux";
import { formatDateString } from "../utils/formatDateAndTime";

const Transaction = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  // Group transactions by date
  const groupedTransactions = transactions.reduce((groups, transaction) => {
    const date = transaction.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
    return groups;
  }, {});

  return (
    <div className="p-4 h-full pb-20 overflow-auto">
      <h1 className="text-xl font-bold mb-4">All Transactions</h1>
      {Object.keys(groupedTransactions).map((date) => (
        <div key={date} className="mb-4">
          <h3 className="text-lg font-semibold mb-2">
            {formatDateString(date)}
          </h3>
          <ul className="border rounded-lg">
            {groupedTransactions[date].map((transaction, index) => (
              <li
                key={index}
                className={`${
                  transaction.type === "Income" ? "bg-emerald-50" : "bg-red-50"
                } border-b last:border-0 p-2`}
              >
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium">{transaction.type}</div>
                    <div className="text-sm text-gray-500">
                      {transaction.category}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      {transaction.amount.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {transaction.time}
                    </div>
                    <div className="text-sm text-gray-500">
                      {transaction.note}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Transaction;

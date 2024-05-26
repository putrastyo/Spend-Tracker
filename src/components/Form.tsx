import { FaPlus } from "react-icons/fa";
import Input from "./ui/Input";
import { useState } from "react";
import Select from "./ui/Select";
import { formatDate, formatTime } from "../utils/formatDateAndTime";
import { useDispatch } from "react-redux";
import { addTransaction } from "../slices/transactionSlice";

const Form = () => {
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState(formatDate(new Date()));
  const [time, setTime] = useState(formatTime(new Date()));
  const [note, setNote] = useState("");

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case "type":
        setType(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "amount":
        setAmount(Number(value));
        break;
      case "date":
        setDate(value);
        break;
      case "time":
        setTime(value);
        break;
      case "note":
        setNote(value);
        break;
      default:
        break;
    }
  };

  const expenseCategories = [
    "Shopping",
    "Food & Beverage",
    "Bills",
    "Transfer",
    "Travel",
    "Health",
    "Education",
    "Other",
  ];
  const incomeCategories = [
    "Salary",
    "Freelance",
    "Investment",
    "Gift",
    "Other",
  ];

  const handleAddTransaction = () => {
    if (!type || !category || !amount || !date || !time) {
      return alert("Please fill in all fields");
    }
    const newTransaction = {
      type,
      category,
      amount,
      date,
      time,
      note,
    };
    localStorage.setItem("transactions", JSON.stringify(newTransaction));
    dispatch(addTransaction(newTransaction));

    setType("");
    setCategory("");
    setAmount(0);
    setDate(formatDate(new Date()));
    setTime(formatTime(new Date()));
    setNote("");
    setShowForm(false);
  };

  return (
    <>
      <button
        className={`${
          showForm ? "bg-red-500" : "bg-sky-500"
        } border-4 border-white rounded-full absolute z-50 top-0 left-1/2 transition-colors -translate-x-1/2 -translate-y-1/2 p-3`}
        onClick={() => setShowForm((prev) => !prev)}
      >
        <FaPlus
          size={20}
          color="white"
          className={`${showForm && "rotate-45"} transition-transform`}
        />
      </button>
      <div
        className={`${
          showForm ? "bottom-12" : "-bottom-[450px]"
        } bg-white absolute p-4 w-full z-10 border-t-2 border-zinc-300 rounded-t-3xl transition-all`}
      >
        <h3 className="text-xl font-medium mb-3">Add Transaction</h3>
        <div className="grid grid-cols-2 gap-2">
          <Select
            name="type"
            value={type}
            onChange={handleChange}
            options={["Income", "Expense"]}
          />
          <Select
            name="category"
            value={category}
            onChange={handleChange}
            options={type === "Income" ? incomeCategories : expenseCategories}
            disabled={type === "" ? true : false}
          />
        </div>
        <div className="flex mb-3">
          <input disabled value="Rp" className="w-10 text-center border" />
          <Input
            type="number"
            placeholder="amount"
            name="amount"
            value={amount || ""}
            onChange={handleChange}
          />
        </div>
        <Input
          type="date"
          placeholder="Date"
          name="date"
          value={date}
          onChange={handleChange}
        />
        <Input
          type="time"
          placeholder="Time"
          name="time"
          value={time}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Note"
          name="note"
          value={note}
          onChange={handleChange}
        />
        <button
          className="bg-sky-500 text-white p-3 w-full mb-10"
          onClick={handleAddTransaction}
        >
          Add Transaction
        </button>
      </div>
    </>
  );
};

export default Form;

import { FaShoppingBag as Shopping } from "react-icons/fa";
import { IoFastFood as Food } from "react-icons/io5";
import { FaMoneyBill as Bills } from "react-icons/fa";
import { BiTransfer as Transfer } from "react-icons/bi";
import { FaPlane as Travel } from "react-icons/fa";
import { AiFillMedicineBox as Health } from "react-icons/ai";
import { IoSchoolSharp as Education } from "react-icons/io5";
import { BiSolidCategory as Other } from "react-icons/bi";
import { FaDollarSign as Salary } from "react-icons/fa6";
import { GiPayMoney as Freelance } from "react-icons/gi";
import { FaGift as Gift } from "react-icons/fa";
import { FaPiggyBank as Investment } from "react-icons/fa";

type TransactionItemProps = {
  type: string;
  category: string;
  amount: number;
  note: string;
};

const categoryIcons: { [key: string]: React.ElementType } = {
  Shopping: Shopping,
  "Food & Beverage": Food,
  Bills: Bills,
  Transfer: Transfer,
  Travel: Travel,
  Health: Health,
  Education: Education,
  Other: Other,
  Salary: Salary,
  Freelance: Freelance,
  Gift: Gift,
  Investment: Investment,
};

const TransactionItem = ({
  type,
  category,
  amount,
  note,
}: TransactionItemProps) => {
  const Icon = categoryIcons[category];
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-3">
        <div className="bg-gray-100 p-2 rounded-full">
          <Icon color="skyblue" size={14} />
        </div>
        <div>
          <p className="font-medium">{category}</p>
          <small className="text-sm">{note}</small>
        </div>
      </div>
      <small
        className={`${
          type === "Income" ? "text-emerald-500" : "text-red-500"
        } text-sm font-medium`}
      >
        Rp{amount}
      </small>
    </div>
  );
};

export default TransactionItem;

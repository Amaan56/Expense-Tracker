import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <p className="expenses-list__fallback">No expense found</p>;
  }

  const expensesContent = props.filteredExpenses.map((expense) => (
    <ExpenseItem
      title={expense.title}
      date={expense.date}
      amount={expense.amount}
      key={expense.id}
    />
  ));
  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;

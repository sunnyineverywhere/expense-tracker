import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div className="expense-item-date">March 28th 2021</div>
      <div className="expense-item-description">
        <h2>Car Insurance</h2>

        <div className="expense-item-price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

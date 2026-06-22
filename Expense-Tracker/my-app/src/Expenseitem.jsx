
function Expenseitem ({item,onDelete}){
    return(
        <>
            <div className="expense-item">
                <span className="expense-name">
                    {item.title}
                </span>

                <span className="amount">
                    ₹{item.amount}
                </span>

                <button className="delete-btn" onClick={()=> onDelete(item.id)}>
                    ×
                </button>
            </div>

           
        </>
    )
       
}

export default Expenseitem
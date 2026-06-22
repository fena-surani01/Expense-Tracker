import Expenseitem from "./Expenseitem"

function Expenselist ({expenses , onDelete}){

    if(expenses.length === 0)
    {
        return(
            <p className="no-expense">No Expenses Yet !!</p>
        )
    }

    return(
        <div className="expense-list">
            {
                expenses.map((item)=>(
                    <Expenseitem key={item.id} item={item} onDelete={onDelete}/>
                ))
            }
        </div>
    )
       
}

export default Expenselist
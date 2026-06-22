import { useState,useEffect,useRef } from "react"

function Expenseform ({onAddExpense}){
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState('')

    const titleRef = useRef()

    function handleSubmit(e){
        e.preventDefault()

        if(!title || !amount) return alert("Please Fill all the details !!")

        const newExpense = {
            id : Date.now(),
            title,
            amount : parseFloat(amount)
        }
        onAddExpense(newExpense)
        setTitle('')
        setAmount('')
        titleRef.current.focus()
    }

    return(
            <form onSubmit={handleSubmit}>
                <div className="expense-form">
                    <input
                        type="text"
                        placeholder="Expense Title"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        ref={titleRef}
                    /> 
                    <input
                        type="number"
                        placeholder="Amount ₹"
                        value= {amount}
                        onChange={(e)=>setAmount(e.target.value)}

                    />
                    <button>Add Expense</button>
                </div>
            </form>
    )
}

export default Expenseform
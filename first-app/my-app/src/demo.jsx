function first(){
    function inner()
    {
        return "Fena"
    }

    return <h1>My name is {inner()}</h1>
}

export default first
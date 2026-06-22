function Demo_loop(){
    const cities = ['Ahmedabad','Surat','Rajkot']
    
    return (
        <div>
            <ul>
                {
                    cities.map((city,index)=>(
                        <li>{index} - {city}</li>
                    ))
                }
            </ul>
        </div>
    )
}


export default Demo_loop
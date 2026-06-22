// function demo_obj(){
//     const person = {
//         "first":"fena",
//         "age":'10',
//         "gender":'female'
//     }

//     return(
//         <>
//             <ol>
//                 <li>{person.first}</li>
//                 <li>{person.age}</li>
//                 <li>{person.gender}</li>

//             </ol>
//         </>
//     )
// }

function demo_obj(){
    const person = [
        {
            "first":"fena",
            "age":'10',
            "gender":'female'
        },
        {
            "first":"Dev",
            "age":'20',
            "gender":'female'
        },
        {
            "first":"Shanvi",
            "age":'13',
            "gender":'female'
        }
    ]

    return(
        <>
            <ol>
                {
                    person.map((per,index)=>(
                        <li>{per.first} is a {per.age} Year old person - {per.gender}</li>
                    ))
                }
            </ol>
        </>
    )
}

export default demo_obj
import React from 'react'
const list=[
    {name:'numan',
reg:'2016-cs-311'},
{
    name:'usman',
    reg:'2016-cs-114'
}
]

const ShowPackages=(props)=>{
 const lst=list.map((object)=><div><h1>{object.name}</h1><h4>{object.reg}</h4><br />
    </div>
)
return <div>{lst}
<button onClick={()=>props.createPack()}>create package</button></div>
}
export default ShowPackages
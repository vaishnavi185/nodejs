import React from 'react'

export default function Des() {
    const phoneDiary = [
  { name: 'Vaishnavi', phone: '123-456-7890',
  
 address: [
  {streeet:"galino9",city:"chennai"},
  {streeet:"galino0",city:"chennai"}
  ]  }
];
const phnlist=phoneDiary.map((item,index)=>{
    return(
        <div key={(index)}>
name:{item.name},phone:{item.phone}
{item.address.map((addr,addin)=>{
  return(
    <div key={addin}>
      Street: {addr.streeet}, City: {addr.city}
    </div>
  )
})}
        </div>
    )
})
  return (
    <div>
      {phnlist}
    </div>
  )
}

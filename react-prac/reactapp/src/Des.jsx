import React from 'react'

export default function Des() {
    const phoneDiary = [
  { name: 'Vaishnavi', phone: '123-456-7890' },
  { name: 'Tan', phone: '987-654-3210' },
];
const phnlist=phoneDiary.map((item,index)=>{
    return(
        <div key={(index)}>
name:{item.name},phone:{item.phone}
        </div>
    )
})
  return (
    <div>
      {phnlist}
    </div>
  )
}

import React from 'react'

export default function ListItem({item, handleRemove}) {

  return (
    <li style={{border: "2px solid green"}}>{item.name} <button onClick={() => handleRemove(item.id)}>Remove</button> {    console.log("listItem")}</li>
  )
}

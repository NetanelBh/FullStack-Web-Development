import React from 'react'

export default function ListItem({item}) {

  return (
    <li style={{border: "2px solid green"}}>{item.name} {    console.log("listItem")}</li>
  )
}

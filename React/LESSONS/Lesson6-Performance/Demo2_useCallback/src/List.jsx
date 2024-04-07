import React, {memo} from 'react'
import ListItem from './ListItem'

 function List({users, handleRemove}) {
    
    return (
        <div style={{border: "2px solid blue"}}>
            {console.log("List")}
            <ul>
                {users.map((user) => {
                    return <ListItem handleRemove={handleRemove} key={user.id} item={user} />
                })}
            </ul>

        </div>
    )
}

export default memo(List)
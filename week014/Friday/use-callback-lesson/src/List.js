import {useEffect, useState} from "react"

function List({getItems}){
    const [items, setItems] = useState([])

    useEffect(()=>{
        setItems(getItems(3))
        console.log("Updating Items")
    }, [getItems])

    return items.map(item=><div key={item}>{item}</div>)
}

export default List
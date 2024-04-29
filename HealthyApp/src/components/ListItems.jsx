import style from "./ListItems.module.css"
export default function ListItems({list, handleRemoveItems, handleBuyItems, handleBuyItemsDouble}){

    return (
        <>
        <ul className="list-group">
            {list.map((items)=>{
                return <li className={`${style['list-items']} list-group-item ${items.isBuy && 'active'}`} key={items.id} >{items.list} <button className={`${style.button} btn btn-info`} onClick={()=> handleBuyItems(items.id)}>Buy</button> <button className={`${style.button} btn btn-danger`} onClick={()=> handleRemoveItems(items.id)} onDoubleClick={()=> handleBuyItemsDouble(items.id)}>Remove</button></li>
            })}
        </ul>
        </>
    )
}
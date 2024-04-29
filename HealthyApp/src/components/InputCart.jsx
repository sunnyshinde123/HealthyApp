import style from "./InputCart.module.css"

export default function InputCart({handleKeyDown}){

    return (
        <>
        <div className={style['input-container']}>
            <input type="text" placeholder="add item here..." onKeyDown={(event)=> handleKeyDown(event)}/>
        </div>
        </>
    )
}
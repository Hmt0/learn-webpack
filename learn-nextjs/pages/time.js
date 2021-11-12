import React, {useState} from "react"

export default () => {
    const [time, setTime] = useState(Date.now())
    const changeTime = async() => {
        const moment = await import('moment')
        setTime(moment.default(Date.now()).format())
    }

    return(
        <>
            <div>{time}</div>
            <div><button onClick={changeTime}>改变时间格式</button></div>
        </>
    )
}
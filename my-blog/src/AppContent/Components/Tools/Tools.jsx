import CalendarTool from "./CaledarTool/CalendarTool.jsx";
import style from'./Tools.module.css'
export default function Tools(){
    return (
        <div className={style.content}>
            <CalendarTool></CalendarTool>
        </div>
    )
}
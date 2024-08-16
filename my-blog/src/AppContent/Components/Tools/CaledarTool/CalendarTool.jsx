import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import style from './CalenderTool.module.css'
export default function CalendarTool(){
    return(
    <div className={style.content}>
        <Calendar
       
        className={style.reactCalendar}
        locale="en"
        ></Calendar>
    </div>
    )
}
import './index.css'
const ScheduleItem = props => {
    const { ceremony } = props
    const { event, date, time } = ceremony
    return (
        <li className="schedule-item-frame d-flex flex-column justify-content-center align-items-center">
            <h1 className='scheduled-event'>{event}</h1>
            <p className='scheduled-date'>{date}</p>
            <p className='scheduled-time'>{time}</p>
        </li>
    )
}

export default ScheduleItem
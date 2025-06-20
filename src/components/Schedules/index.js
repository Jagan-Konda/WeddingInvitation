import './index.css'
import ScheduleItem from '../ScheduleItem'

const ScheduleList = [
    {
        id: 1,
        event: "Mehndi Ceremony",
        date: "March 25, 2025",
        time: "4:00 PM - 7:00 PM"
    },
    {
        id: 2,
        event: "Sangeet Night",
        date: "March 26, 2025",
        time: "7:00 PM - 11:00 PM"
    },
    {
        id: 3,
        event: "Haldi Ceremony",
        date: "March 27, 2025",
        time: "10:00 AM - 1:00 PM"
    },
    {
        id: 4,
        event: "Pithi Ceremony",
        date: "March 28, 2025",
        time: "11:00 AM - 2:00 PM"
    },
    {
        id: 5,
        event: "Tilak Ceremony",
        date: "March 29, 2025",
        time: "12:00 PM - 3:00 PM"
    },
    {
        id: 6,
        event: "Bachelor Party",
        date: "March 27, 2025",
        time: "8:00 PM - 1:00 AM"
    }
]
const Schedules = () => {
    return (
        <div className='schedules-bg-container'>
            <h1 className='schedules-heading'>Schedules</h1>
            <ul className='schedules-list-container'>
                {ScheduleList.map(eachCeremony => (
                    <ScheduleItem ceremony={eachCeremony} key={eachCeremony.id} />
                ))}
            </ul>

        </div>
    )
}

export default Schedules
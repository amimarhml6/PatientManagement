import Navbar from '../../Component/Navbar/Navbar'
import Statistque from '../../Component/AdminComponent/AppointmentManagePage/Statistique/Statistique'
import AppointementTable from '../../Component/AdminComponent/AppointmentManagePage/AppointmentTables'
export default function AppointmentPage() {
    return (
        <div>
            <Navbar/>
            <Statistque/>
            <AppointementTable/>
        </div>
    );
}
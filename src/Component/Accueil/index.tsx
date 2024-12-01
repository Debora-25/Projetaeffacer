import Guest from "../layouts/GuestLayout"
import MySilders from '../Silders/HomeSildersIndex'
import '../../Styles/guest.css'
import '../../Styles/accueil.css'

function Home()  {

    return (
    <>

    <Guest>
        <div className="accueilmain">
            <div className="silder">
                <MySilders/>
            </div>
        </div>
    
    </Guest>
    
    </>
    )
}
export default Home
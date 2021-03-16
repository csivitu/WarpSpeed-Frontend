import '../../App.css'
import '../bg.css'

function Home(){
    return(
        <div className="inside">
            <img className="logo" src="../images/Warpspeed.png" />
            <video src="/videos/homepage.mp4" autoPlay loop muted type="video/mp4" className="bg"/>
        </div>
    
    )
}           
export default Home;
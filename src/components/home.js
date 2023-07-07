import img2 from '../imges/bg-01.jpg';
import img3 from '../imges/underline.png';
import './home.css'
function home() {
    return (
        <div id='home'>
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="home " style={{ backgroundImage: `url(${img2})` }}>
            </div>
            <h3 className='cafeRestaurant'>
                Café et Restaurant Merci!
            </h3>
            <img className='imgUnderline img-fluid' src={img3} width={"400px"} height={"30px"} />
            <div className='container'>
                <div className='row'>
                    <p className='description text-center'>
                        "
                        Le café est une boisson populaire et largement consommée à travers le monde.
                        Il est préparé à partir des graines torréfiées du caféier,
                        un arbuste originaire des régions tropicales. Le café est apprécié
                        pour son arôme riche et stimulant, ainsi que pour ses effets énergisants.
                        Le café contient de la caféine, un stimulant naturel qui agit
                        sur le système nerveux central."
                    </p>
                </div>
            </div>

        </div>


    );
}
export default home;
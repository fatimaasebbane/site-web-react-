import img4 from '../imges/restaurant.jpg';
import img5 from '../imges/underline.png';
import './restaurant.css';
function restaurant() {
    return (
        <div className="restaurant" id='restaurant'>
            <h3 className='cafe'>Restaurant Merci !</h3>
            <img className='imgUnderline3' src={img5} width={"300px"} height={"20px"} />

            <div className='container'>
                <div className="row">
                    <div className="motRestaurant col-md-6">
                        <p>
                            Le café est une boisson populaire préparée à partir des grains
                            torréfiés de la plante de café. Il est apprécié pour sa saveur stimulante et son
                            arôme distinctif.<br />
                            Le café est souvent consommé chaud et peut être servi noir. </p>  <button className='btn btn-danger border border-secondary rounded-0'>MENU RESTAURANT</button>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <img className='img-fluid' src={img4} alt="cafe" width={"450px"} height={"470px"} />
                    </div>
                </div>
            </div>

        </div>
    );
}
export default restaurant;
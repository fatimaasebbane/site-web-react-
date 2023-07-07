import img3 from '../imges/cafe.jpg';
import img4 from '../imges/underline.png';
import './coffee.css';
function coffee() {
    return (
        <div className="coffee" id='coffee'>
            <h3 className='cafe'>Café  Merci !</h3>
            <img className='imgUnderline2' src={img4} />

            <div className='container'>
                <div className="row">
                    <div className="mot col-md-6 col-lg-6 ">
                        Le café est une boisson populaire préparée à partir des grains
                        torréfiés de la plante de café.<br /><br />

                        Le café est souvent consommé chaud et peut être servi noir,
                        avec du lait.
                        <br />
                        <button className='btn btn-primary border border-secondary rounded-0'>MENU CAFE</button>

                    </div>
                    <div className="col-md-6 col-lg-6">
                        <img className='img-fluid' src={img3} alt="cafe" width={"450px"} height={"440px"} />
                    </div>
                </div>
            </div>

        </div>
    );
}
export default coffee;
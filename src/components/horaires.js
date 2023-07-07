import './horaires.css';
import cafeMerci from '../imges/cafeMerci.jpg';
import img5 from '../imges/underline.png';

function horaires() {
    return (
        <div className='container'>
            <h3 className="horaire">Nos horaires</h3>
            <img className='imgUnderline4' src={img5} width={"300px"} height={"20px"} />

            <div class="row">
                <div className='col-md-7' >
                    <img className='imgCafeRestaurant' src={cafeMerci} alt='cafeMerci' width={"470px"} height={"350px"} />
                </div>
                <div className='col-md-5'>
                    <ul class="list-unstyled text-center">
                        <li class="d-flex"><span>lundi     8:00 - 00:00</span></li>
                        <li class="d-flex"><span>mardi     8:00 - 00:00</span></li>
                        <li class="d-flex"><span>mercredi  8:00 - 00:00</span></li>
                        <li class="d-flex"><span>jeudi     8:00 - 00:00</span></li>
                        <li class="d-flex"><span>vendredi  8:00 - 00:00</span></li>
                        <li class="d-flex"><span>samedi    8:00 - 00:00</span></li>
                        <li class="d-flex"><span>dimanche  fermé</span></li>
                    </ul>
                </div>
            </div>
            <div className='row icons'>
                <div className='col-md-4 '>
                    <button className='btn btn-success '>
                        <i class="fas fa-chair"></i>
                    </button>

                    <div className='reserver' >Réservation</div>
                </div>

                <div className='col-md-4'>
                    <button className='btn btn-success'>
                        <i class="fas fa-calendar-alt"></i>
                    </button>

                    <div className='event'> Organiser vos événements</div>
                </div>

                <div className='col-md-4 '>
                    <button className='btn btn-success'>
                        <i class="fas fa-truck"></i>
                    </button>

                    <div className='livraison'> Livraison à domicile</div>
                </div>

            </div>

        </div >
    );
}
export default horaires;
import './contact.css';
import img3 from '../imges/underline.png';
function contact() {
    return (
        <div class="container">
            <section class="">
                <h2 class="h1-responsive  text-center my-4">Contact us</h2>
                <img className='imgUnderline6' src={img3} width={"300px"} height={"20px"} />
                <div className="row icon">

                    <div className="col-md-4 text-center">
                        <i class="fas fa-phone mt-4 fa-2x"></i>
                        <p>+212 234 5679 89</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <i class="fas fa-envelope mt-4 fa-2x"></i>
                        <p>Merci@gmail.com</p>
                    </div>
                    <div className="col-md-4 text-center adresse">
                        <i class="fas fa-map-marker-alt fa-2x"></i>
                        <p>rue Ddchira, Laayoune, Maroc</p></div>
                </div>

                <div class="row ">
                    <div class="col-md-12 mb-md-2 mb-6 formContact">
                        <form id="contact-form" name="contact-form" action="#" method="post">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="nom" class=""> NOM</label>
                                        <input type="text" id="nom" name="nom" class="form-control" />

                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="prenom" class=""> PRENOM</label>
                                        <input type="text" id="prenom" name="email" class="form-control" />

                                    </div>
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="tel" class=""> TELEPHONE</label>
                                        <input type="tel" id="tel" name="tel" class="form-control" />
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="email" class=""> EMAIL</label>
                                        <input type="email" id="email" name="email" class="form-control" />

                                    </div>
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <label for="adresse" class="">ADRESSE</label>
                                        <input type="text" id="adresse" name="adresse" class="form-control" />

                                    </div>
                                </div>
                            </div>
                            <br />

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form">
                                        <label for="message">MESSAGE</label>
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>

                                    </div>

                                </div>
                            </div>
                            <button class="btn btn-primary  border border-secondary rounded-0" type="submit">ENVOYER</button>
                        </form>
                        <div class="status"></div>
                    </div>
                </div>

            </section>

        </div>
    );
}
export default contact;
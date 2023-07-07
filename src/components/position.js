import './position.css'
function position() {
    return (
        <div><div className="container">
            <h3 className="titre text-center ">Visitez nous!</h3>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className='embed-responsive-item w-100' src="https://www.google.com/maps/d/u/0/embed?mid=1_b7EFZrV5tN4GsJ5KpJufvSj3T4p0wo&ehbc=2E312F" width="980" height="480"></iframe>
            </div>
        </div>
            <hr className="ligne" />
            <p className="site text-end">www.Merci.com</p>
        </div>
    );
}
export default position;
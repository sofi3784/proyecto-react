

const ProductDetail = ({item}) => {
    return (
        <div className="row g-0">
            <div className="col-md-4 imgBody">
                    <img src={item.img} alt="" className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.marca} {item.modelo}</h5>
                    <p className="card-text">Tipo: {item.tipo}</p>
                    <p className="card-text">Año: {item.año}</p>
                    <p className="card-text">Versión: {item.version}</p>
                    <p className="card-text">Color: {item.color}</p>
                    <p className="card-text">Combustible:{item.combustible}</p>
                    <p className="card-text">Puertas: {item.puertas}</p>
                    <p className="card-text">Transmisión: {item.transmision}</p>
                    <p className="card-text">Motor: {item.motor}</p>
                    <p className="card-text">Carroceria: {item.carroceria}</p>
                    <p className="card-text">Km: {item.km}</p>
                    <p className="card-text">Precio: ${item.precio}</p>
                </div>
            </div>
            
            
        </div>
    );
}

export default ProductDetail;

const CarDetailCard = ({
    image,
    model,
    year,
    color,
    price
    
  }) => {
    return (
      <div className="card">
        <img src={image} />
        <h2>{model}</h2>
        <h3>{year}</h3>
        <h3>{color}</h3>
        <h3>{price}</h3>
      </div>
    );
  };
  
  export default CarDetailCard;

  
import './Card.scss';

function Card({number, asset}) {
  return (
    <div className="card-container" style={{
    backgroundImage: `url(${asset}), linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    )`}}>
       <span className='card-number'>{number}</span>
       <span className='card-heading'>Lorem ipsum dolor sit</span>
       <span className='card-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
    </div>
  )
}

export default Card
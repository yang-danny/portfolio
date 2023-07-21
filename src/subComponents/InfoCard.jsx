
const InfoCard = (props) => {
  return (
    <div className="infoCard code">
        <div className='text'>
        <h3> {props.title} </h3>
        <h4 > {props.subTitle} </h4>
        <p > {props.des}</p>
    </div>
    <img className='highLight' src={props.src} alt={props.title} />
  </div>
  )
}

export default InfoCard

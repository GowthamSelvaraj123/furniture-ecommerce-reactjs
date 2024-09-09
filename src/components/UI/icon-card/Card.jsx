export default function Card({cardData, index})
{
    return(
        <>
        	<div className="feature">
				<div className="icon">
					<img src={cardData.img} alt="Image" className="imf-fluid" />
				</div>
                    <h3>{cardData.title}</h3>
				<p>{cardData.description}</p>
			</div>
        </>
    )
}
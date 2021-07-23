export function Card (props) {
    
    function handleClick() {
        props.onCardClick(props.card)
    }

    return (
        <div className="elements__place">
            <img className="elements__photo" alt={props.card.name} src={props.card.link} onClick={handleClick}/>
            <div className="elements__name-like">
                <h2 className="elements__title">{props.card.name}</h2>
                <div className="elements__info-like">
                    <button type="button" className="elements__like"></button>
                    <p className="elements__like-value">{props.card.likes.length}</p>
                </div>
            </div>
            <button type="button" className="elements__trash-btn"></button>
        </div>
    )
}
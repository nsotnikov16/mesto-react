export function Card (props) {
    
    function handleClick() {
        props.onCardClick(props.card)
    }

    //Я надеюсь, это не будет критическим замечанием, если я изображение передал атрибутом, а не как по брифу через style={{backgroundImage: ...}}
    //Если я правильно понял, то бриф был подстроен под тех кто изображение передавал через div изначально?

    return (
        <div className="elements__place">
            <img className="elements__photo" alt={props.card.name} src={props.card.link} onClick={handleClick}/>
            <div className="elements__name-like">
                <h2 className="elements__title">{props.card.name}</h2>
                <div className="elements__info-like">
                    <button type="button" className="elements__like"></button>
                    <p className="elements__like-value"></p>
                </div>
            </div>
            <button type="button" className="elements__trash-btn"></button>
        </div>
    )
}
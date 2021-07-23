import React from 'react'
import avatar from '../images/avatar.jpg'
import editAvatar from '../images/edit-avatar.svg'
import {api} from '../utils/api'
import {Card} from './Card'

function Main (props) {
    
    const [userName, setUserName] = React.useState("Жак-Ив Кусто");
    const [userDescription, setUserDescription] = React.useState(
      "Исследователь океанов"
    );
    const [userAvatar, setUserAvatar] = React.useState(avatar);
    const [cards, setCards] = React.useState([]);

    function getUserData(res) {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    }

    React.useEffect(() => {
      Promise.all([api.getUserData(), api.getInitialCards()])
        .then(([userData, cardsData]) => {
          getUserData(userData);
          setCards(cardsData);
        })
        .catch((err) => alert(err));
    }, []);

    function cardClickImgOpen(data) {
      props.isCardOpen(data);
    }

    const cardsItems = cards.map((item) => {
      return <Card key={item._id} card={item} onCardClick={cardClickImgOpen} />;
    });


    return (
        <main className="content page__container">
              <section className="profile">
                  <div className="profile__container">
                      <div className="profile__change" onMouseOver={props.onHoverAvatar} onMouseOut={props.onHoverAvatar}>
                          <img src={userAvatar} alt="Аватар" className={`profile__avatar ${(props.isHover && "profile__avatar_opacity") || ''}`} />
                          <img src={editAvatar} alt="Изменить аватар" className={`profile__edit-avatar ${(props.isVisible && "profile__edit-avatar_visible") || ''}`} onClick={props.onEditAvatar}/>
                      </div>
                      <div className="profile__into">
                          <div className="profile__username-btn">
                              <h1 className="profile__username">{userName}</h1>
                              <button type="button" className="profile__edit-btn" onClick={props.onEditProfile}></button>
                          </div>
                          <p className="profile__info">{userDescription}</p>
                      </div>
                  </div>
                  <button type="button" className="profile__add-btn" onClick={props.onAddPlace}></button>
              </section>
              <section className="elements">
                {(cards.length !== 0) && <>{cardsItems}</>}
              </section>
          </main>
    )
}

export default Main
import styles from '.cards module.css';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

function Cards() {
  const [cards, setCards] = useState([]);
  const [cardsIndex, setCardsIndex] = useState(0);

  useEffect(() => {
    const fetchCards = async () => {
      const items = [
        { id: 1, color: 'blue', tariff: 300, speed: 10 },
        { id: 2, color: 'green', tariff: 450, speed: 50 },
        { id: 3, color: 'red', tariff: 550, speed: 100 },
        { id: 4, color: 'black', tariff: 1000, speed: 200 },
      ];

      setCards(items);
    };
    fetchCards();
  });

  const handleNext = () => {
    setCardsIndex((cardsIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCardsIndex((cardsIndex - 1 + cards.length) % cards.length);
  };

  if (cards.length === 0) return <div>Loading...</div>;

  const currentCard = cards[cardsIndex];

  return (
    <main>
      <div className={styles.cardNext}>
        <button onClick={handlePrevious}>Предыдущий</button>
        <section className={styles.cardList} onClick={handleNext}>
          <Card
            key={currentCard.id}
            color={currentCard.color}
            tariff={currentCard.tariff}
            speed={currentCard.speed}
          />
        </section>
        <button onClick={handleNext}>Следующий</button>
      </div>
    </main>
  );
}

export default Cards;

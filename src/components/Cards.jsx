import './style.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cards() {
  return (
    <CardGroup className="common">
      <Card>
        <Card.Header className="tarif">
          <p className="tarif-name">Безлимитный 300</p>
        </Card.Header>
        <Card.Body className="card-body">
          <Card.Title>
            <h1 className="payment">руб 300/мес</h1>
          </Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">до 10 Мбит/сек</small>
        </Card.Footer>
        <Card.Footer className="volume">
          <small className="text-muted">
            Объем включенного трафика не ограничен
          </small>
        </Card.Footer>
      </Card>
      <Card className="card">
        <Card.Header className="tarif-2">
          <p className="tarif-name">Безлимитный 450</p>
        </Card.Header>
        <Card.Body className="card-body-2">
          <Card.Title>
            <h1 className="payment">руб 450/мес</h1>
          </Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">до 50 Мбит/сек</small>
        </Card.Footer>
        <Card.Footer className="volume">
          <small className="text-muted">
            Объем включенного трафика не ограничен
          </small>
        </Card.Footer>
      </Card>
      <Card className="card-special">
        <Card.Header className="tarif-3">
          <p className="tarif-name">Безлимитный 550</p>
        </Card.Header>
        <Card.Body className="card-body-3">
          <Card.Title>
            <h1 className="payment">руб 550/мес</h1>
          </Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">до 100 Мбит/сек</small>
        </Card.Footer>
        <Card.Footer className="volume">
          <small className="text-muted">
            Объем включенного трафика не ограничен
          </small>
        </Card.Footer>
      </Card>
      <Card className="card">
        <Card.Header className="tarif-4">
          <p className="tarif-name">Безлимитный 1000</p>
        </Card.Header>
        <Card.Body className="card-body-4">
          <Card.Title>
            <h1 className="payment">руб 1000/мес</h1>
          </Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">до 200 Мбит/сек</small>
        </Card.Footer>
        <Card.Footer className="volume">
          <small className="text-muted">
            Объем включенного трафика не ограничен
          </small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cards;

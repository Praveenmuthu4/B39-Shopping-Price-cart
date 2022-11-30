import "./App.css";

function App() {
  return (
    <div className="App">
      <Heading />
      <Chart />
      <Footer />
    </div>
  );
}

function Heading() {
  return (
    <div className="top-container">
      <h1>Shop in Style</h1>
      <h4>With this shop hompeage template</h4>
    </div>
  );
}

function Chart() {
  const cardData = [
    {
      id: 1,
      cardImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      content: "Fancy Product",
      price: "$40.00 - $80.00",
    },
    {
      id: 2,
      cardImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      content: "Special Item",
      price: "",
    },
    {
      id: 3,
      cardImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      content: "Sale Item",
      price: "",
    },
    {
      id: 4,
      cardImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      content: "Popular Item",
      price: "$120.00 - $280.00",
    },
    {
      id: 5,
      cardImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      content: "Sale Item",
      price: "",
    },
    {
      id: 6,
      cardImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      content: "Fancy Product",
      price: "$120.00 - $280.00",
    },
    {
      id: 7,
      cardImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      content: "Special Item",
      price: "",
    },
    {
      id: 8,
      cardImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      content: "Popular Item",
      price: "$40.00",
    },
  ];

  const cardList = cardData.map((x) => {
    return (
      <div className="chart-container">
        <div className="top-widget-container">
          <img className="top-content" src={x.cardImage}></img>
          <Badge id={x.id} />
        </div>
        <div className="bottom-widget-container">
          <p className="bottom-content">{x.content}</p>
          <Star id={x.id} />

          <DiscountPrice id={x.id} price={x.price} />
          <Button id={x.id} />
        </div>
      </div>
    );
  });

  return <div className="whole-container">{cardList}</div>;
}

function DiscountPrice({ id, price }) {
  return (
    <div>
      {(() => {
        if (id === 2 || id === 7) {
          return (
            <div className="price-content">
              <span className="text-on-line">$20</span>  $18
            </div>
          );
        } else if (id === 3 || id === 5) {
          return (
            <div className="price-content">
              <span className="text-on-line">$50</span>  $25
            </div>
          );
        } else {
          return <div className="price-content">{price}</div>;
        }
      })()}
    </div>
  );
}

function Badge({ id }) {
  return (
    <div>
      {(() => {
        if (id === 2 || id === 3 || id === 5 || id === 7) {
          return <div className="badge">Sale</div>;
        }
      })()}
    </div>
  );
}

function Star({ id }) {
  const starImage = "https://img.icons8.com/emoji/512/star-emoji.png";
  return (
    <div>
      {(() => {
        if (id === 2 || id === 4 || id === 8 || id === 7) {
          return (
            <div className="starImg">
              <span>
                <img className="star" src={starImage}></img>
              </span>
              <span>
                <img className="star" src={starImage}></img>
              </span>
              <span>
                <img className="star" src={starImage}></img>
              </span>
              <span>
                <img className="star" src={starImage}></img>
              </span>
              <span>
                <img className="star" src={starImage}></img>
              </span>
            </div>
          );
        }
      })()}
    </div>
  );
}

function Button({ id }) {
  return (
    <div>
      {(() => {
        if (id === 1 || id === 6) {
          return <button className="view">View options</button>;
        } else if (id === 3 || id === 5) {
          return <button className="cart-without-star">Add to cart</button>;
        } else {
          return <button className="add-cart">Add to cart</button>;
        }
      })()}
    </div>
  );
}

function Footer() {
  return (
    <div className="bottom-container">
      <h3>Copyright © Your Website 2022</h3>
    </div>
  );
}

export default App;

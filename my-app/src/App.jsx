import "./app.css";

const Image = ({ color }) => {
  return (
    <div
      className="img"
      style={{
        backgroundColor: color || "red",
      }}
    ></div>
  );
};

const Card = ({ title, price, color }) => {
  return (
    <>
      <div className="card">
        <Image color={color} />
        <div className="content">
          <div className="title">{title || "Title"}</div>
          <div className="price">{price || 200}</div>
        </div>
      </div>
    </>
  );
};

const App = () => {
  const data = [
    { title: "title 1", price: "2000", color: "red" },
    { title: "title 2", price: "2200", color: "black" },
    { title: "title 3", price: "200", color: "pink" },
    { title: "title 4", price: "600", color: "blue" },
    { title: "title 5", price: "500", color: "purple" },
    { title: "title 6", price: "300", color: "green" },
    { title: "title 7", price: "2800", color: "indigo" },
    { title: "title 8", price: "800", color: "violet" },
  ];
  return (
    <div className="cards">
      {data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          price={item.price}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      My Favourite Foods
    </h1>
    <div>
      <img src={img + "?grayscale"} alt="random from lorem ipsum" />
      <br />
      <img
        className="food-image"
        alt="bacon"
        src="https://tse1.mm.bing.net/th?id=OIP.3Ihl_KNA5sFfmSO3EMUfkgHaE8&pid=Api&P=0&w=244&h=164"
      />
      <img
        className="food-image"
        alt="sherry trifle"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3972cqafXYYqSiQrBDe9TNHXajTANz3GytqzJfQM8IbX0Bt_p&usqp=CAU"
      />
      <img
        className="food-image"
        alt="roast beef"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf5AQViqiuwsomPtFTN1DmfbF_TMhK-hjZM9WjkVcLXar1CQNm&usqp=CAU"
      />
    </div>
  </div>,
  document.getElementById("root")
);

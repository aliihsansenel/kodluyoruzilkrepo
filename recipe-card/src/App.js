import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/beyti.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Beyti Kebabı",
    date: "23 Haziran 2021, Çarşamba",
    description:
      "Beyti kebabı, Türk mutfağında kuzu etinden yapılan ve yoğurtla servis edilen bir kebap türüdür. Adını Beyti restoranının kurucusu Beyti Güler'den almıştır. Beyti Güler, 1961'deki İsviçre seyahatinde Möller'in et yapma şeklinden etkilenerek bu kebabı üretmiştir.",
  };

  const likeCount = 193;
  const isLiked = false;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          author={recipeAuthor}
          image={food}
          recipe={recipeItem}
          count={likeCount}
          liked={isLiked}
        />
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Logo from "./components/Logo/Logo";
import CardList from "./components/CardList/CardList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
      images: [
        "https://i.redd.it/2qmnb44sbt7z.jpg",
        "https://media.deseretdigital.com/file/f8c61e3732?resize=width_1200&order=resize,crop&type=jpg&c=3&a=9ac95963",
        "https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_feature.jpg",
        "https://images.fatherly.com/wp-content/uploads/2018/12/darthvader-header.jpg?q=65&enable=upscale&w=600",
        "https://vignette.wikia.nocookie.net/starwars/images/9/91/OwenLarsHS-SWE.jpg/revision/latest?cb=20120428164235",
        "https://vignette.wikia.nocookie.net/disney/images/8/84/BeruWhitesunLars.jpg/revision/latest?cb=20121227005055",
        "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=960",
        "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406"
      ]
    }
  }

  async componentDidMount() {
    const transformName = (name) => {
      for (let i = 0; i < name.length; i++) {
        if (name.charAt(i) === " ") {
          name = name.substring(0, i) + "_" + name.charAt(i + 1).toUpperCase() + name.substring(i + 2);
        }
      }
      return name;
    }
    
    for (let i = 1; i < 10; i++) {
      if (i === 5) {
        continue; 
      }

      const personData = await fetch(`https://swapi.co/api/people/${i}`).then(res => res.json());
      const name = personData.name; 
      const worldData = await fetch(personData.homeworld).then(res => res.json());
      const world = worldData.name;
      const wikiLink = "https://starwars.fandom.com/wiki/" + transformName(name);
      this.setState({people: this.state.people.concat([
        {
          name: name,
          world: world,
          wikiLink: wikiLink
        }
      ])});
    }
  }

  render() {
    const {people, images} = this.state;

    return (
      <div className="App">
        <Logo />
        <CardList people={people} images={images}/>
      </div>
    );
  }
}

export default App;

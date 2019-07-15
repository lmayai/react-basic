import React, {Fragment } from 'react';
import './styles/Personajes.css';
import CharacterCard from './../components/CharacterCard';
import Loader from './../components/Loader';
import LogoRickMorty from "./../images/RickMorty.png";
class Personajes extends React.Component{
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      results:[]
    },
  }
  
  componentDidMount(){
    this.fetchCharacters();
  }
  
  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
      const data = await response.json();
      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(
            this.state.data.results,
            data.results
          )
        },
        nextPage: this.state.nextPage + 1,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }

  }

  render(){
    if(this.state.error){
      return(`Error: ${this.state.error}`)
    }

    return(
      <Fragment>
          <div className="RickMorty">
            <img src={LogoRickMorty} alt=""/>

            <ul className="row">
              {
                this.state.data.results.map( (character) => {
                  return(
                    <li className="col-6 col-md-3" key={character.id}>
                      <CharacterCard character={character}/>
                    </li>
                  )
                })
              }
            </ul>

            { //Cuando este cargando se sacar el loading
              this.state.loading && (
                <div className="loader">
                  <Loader />
                </div>
              )
            }

            { //Cuando termine de cargar se agrega un boton para ver más personajes
              !this.state.loading && (
                <button className="botonVerMas" onClick={ () => this.fetchCharacters() }>Ver más</button>
              )
            }

          </div>
      </Fragment>
    )
  }
}

export default Personajes;
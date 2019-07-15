import React, { Component, Fragment } from 'react'; 

function CharacterCard(props){
  const {character} = props;

  return(
    <Fragment>
      <img src={character.image} alt="image"/>
      <h4>{character.name}</h4>
    </Fragment>
  ) 
  
}

export default CharacterCard;
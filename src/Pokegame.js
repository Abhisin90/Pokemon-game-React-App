import React, { Component } from 'react'
import Pokedex from './Pokedex'

class Pokegame extends Component {
    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    }
    render(){
        const pokemonn = [];
        let pokemonn2 = [...this.props.pokemon]
        while(pokemonn.length !== (this.props.pokemon.length)/2){
            let index = Math.floor(Math.random()*pokemonn2.length)
            pokemonn.push(pokemonn2[index])
            pokemonn2 = [...pokemonn2.slice(0,index),...pokemonn2.slice(index+1)]
        }
        const power1 = pokemonn.reduce((power,pokemon) => power + pokemon.base_experience,0)
        const power2 = pokemonn2.reduce((power,pokemon) => power + pokemon.base_experience,0)
        console.log(power1,power2)
        return(
            <div>
                <Pokedex num={1} pokemon={pokemonn} exp={power1} isWinner={power1>power2} />
                <Pokedex num={2} pokemon={pokemonn2} exp={power2} isWinner={power2>power1}/>
            </div>
        )
    }
}

export default Pokegame
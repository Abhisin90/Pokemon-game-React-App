import React, {Component} from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'

class Pokedex extends Component {
    render(){
        let title
        if(this.props.isWinner){
            title = <h2 className='Pokedex-winner'>Winning hand</h2>
        } else {
            title = <h2 className='Pokedex-loser'>Losing hand</h2>
        }
        return(
            <div className="Pokedex">
                <h1>Pokedex </h1>
                {title}
                <h3>Total Experience: {this.props.exp}</h3>
                <div className='Pokedex-cards'>
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>
                    ))}
                </div>
                
            </div>
        )
    }
}

export default Pokedex
import React, {Component} from 'react'
import './Pokecard.css'

const three = (id) => (id<=999? `00${id}`.slice(-3):id)

class Pokecard extends Component {
    render(){
        const {id,name,type,base_experience} = this.props
        let usid = three(id)
        const s = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${usid}.png`
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>{name}</h1>
                <div className='Pokecard-Image'>
                    <img src={s} alt={name}/>
                </div>
                <div className='Pokecard-data'>Type: {type}</div>
                <div className='Pokecard-data'>Exp: {base_experience}</div>
            </div>
        )
    }
}


export default Pokecard
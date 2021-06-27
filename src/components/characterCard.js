import React, { Component } from 'react';
import './cardstyles.modules.css';

class CharacterCard extends Component {
    constructor (props){
        super (props);
        this.state = {
            character_specs: {},
        }
    }

    async componentDidMount() {
        const url = `https://finalspaceapi.com/api/v0/character/${this.props.id}`;
        const res = await fetch(url);
        const character = await res.json();

        //console.log(character);

        this.setState({
            character_specs: character,
        })
    }

    render() {
        return (
            <div className = 'cardItem'>
                <div>
                    <img src = {this.state.character_specs.img_url} />
                </div>
                <h3>
                    {this.state.character_specs.name}
                </h3>
                <div>
                    {this.state.character_specs.gender}
                </div>
            </div>
        );
    }
}

export default CharacterCard;
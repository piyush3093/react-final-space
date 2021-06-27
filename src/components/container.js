import React, { Component } from 'react';
import CharacterCard from './characterCard';

class FinalSpace extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const ids = [];
        for(let i = 1; i <= 40; i++){
            ids.push(i);
        }
        return (
            <>
                {ids.map((id, key) => <React.Fragment key = {key}><CharacterCard id = {id} /></React.Fragment>)}
            </>
        )
    }
}

export default FinalSpace;
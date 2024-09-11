import React from 'react'
import './Card.css'
import { Check, CheckSquare, Clock, MoreHorizontal } from 'react-feather';
import Chip from '../chip/Chip';

function Card() {
    return (
        <div className='card'>
            <div className='card_top'>
                <div className='card_labels'>
                    <Chip text='Frontend' color='green' />
                    {/* <Chip close text='frontend' color='blue' /> */}
                </div>
                <MoreHorizontal />
            </div>
            <div className='card_title'>
                hjhkjhjh
            </div>
            <div className='card_footer'>
                <p><Clock /> 29 sept</p>
                <p><CheckSquare /> 1/4</p>
            </div>
        </div>
    )
}

export default Card;
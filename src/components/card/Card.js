import React ,{useState}from 'react'
import './Card.css'
import { Check, CheckSquare, Clock, MoreHorizontal } from 'react-feather';
import Chip from '../chip/Chip';
import DropDown from '../DropDown/DropDown';

function Card() {
    const [showDropDown, setShowDropDown] = useState(false)

    const handleCLick = () => {
        setShowDropDown(!showDropDown)
    }
    return (
        <div className='card'>
            <div className='card_top'>
                <div className='card_labels'>
                    <Chip text='Frontend' color='green' />
                    {/* <Chip close text='frontend' color='blue' /> */}
                </div>
                <div className="card_top_more" onClick={()=> 
                    setShowDropDown(true)}>
                    <MoreHorizontal className="card_top_icon" />
                    {showDropDown && (
                        <DropDown
                        onClose={() => setShowDropDown(false)}>
                            <div className="card_dropdown">
                                <p style={{display:"flex",justifyContent:"center", alignItems:"center"}}>Delete card</p>
                            </div>

                        </DropDown>
                    )}
                </div>
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
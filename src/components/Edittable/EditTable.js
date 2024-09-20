import React from 'react'
import { X } from 'react-feather'
import { useState } from 'react'
import './EditTable.css'

function EditTable(props) {
    const [showEdit, setShowEdit] = useState(false) // [showEdit, setShowEdit]
    return (
        <div className='edit_table'>
            {showEdit ?
                <form className={`edit_table_edit ${props.editClass || ''} `}
                    onSubmit={(event) => {
                        event.preventDefault()
                        if (props.onSubmit) props.onSubmit()
                    }}>
                    <input type="text"
                    autoFocus
                        placeholder={props.placeholder || 'Enter card title'}
                        defaultValue={props.text} />
                    <dic className='edit_table_footer'>
                        <button type='submit'>{props.buttonText || 'Add card'}</button>
                        <X onClick={() => setShowEdit(false)} />
                    </dic>
                </form>
                : <p className={`edit_table_display ${props.displayClass || ''}`} onClick={() => setShowEdit(true)}>
                {props.text || 'Add card'}
            </p>
            }
        </div>
    )
};
export default EditTable;
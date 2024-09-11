import React from 'react'
import { X } from 'react-feather'
import { useState } from 'react'

function EditTable(props) {
    const [showEdit, setShowEdit] = useState(false) // [showEdit, setShowEdit]
    return (
        <div className='edit_table'>
            <p>
                {props.text || 'Add card'}
            </p>
            {showEdit ?

                <form className='edit_table_edit'
                    onSubmit={(event) => {
                        event.preventDefault()
                        if (props.onSubmit) props.onSubmit()
                    }}>
                    <input type="text"
                        placeholder={props.placeholder}
                        defaultValue={props.text} />
                    <dic className='edit_table_footer'>
                        <button type='submit'>{props.buttonText || 'Add card'}</button>
                        <X onclose={props.onClose} />
                    </dic>
                </form>
                :""
            }
        </div>
    )
};
export default EditTable;
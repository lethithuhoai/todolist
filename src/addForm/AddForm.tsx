import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

AddForm.propTypes = {
    onSubmit: PropTypes.func,
};
AddForm.defaultProps = {
    onSubmit: null
}



function AddForm(props: any) {
    const { onSubmit } = props
    const [value, setValue] = useState("")

    function handleChangeValue(e: any) {
        console.log(e.target.value)
        setValue(e.target.value)
    }

    function handleOnSubmit(e: any) {

        e.preventDefault();
        if (!onSubmit) return;
        const formValues = {
            title: value
        }
        onSubmit(formValues)
        setValue('')
    }


    return (
        <form onSubmit={handleOnSubmit}>
            <Input type="Add New" className='inputAdd' value={value} onChange={handleChangeValue} />
        </form>
    );
}

export default AddForm;
import React from 'react'
import { Field, reduxForm } from 'redux-form'

const required = value => value ? undefined : 'Required'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const AddTicketsForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name='name' type='text'
                   component={renderField} label='Film name'
                   validate={ required }
            />
            <Field name='title' type='text'
                   component={renderField} label='Title'
                   validate={ required }
            />
            <Field name='price' type='text'
                   component={renderField} label='Price'
                   validate={ required }
            />
            <Field name='count' type='text'
                   component={renderField} label='Number of tickets'
                   validate={ required }
            />
            <Field name='url' type='text'
                   component={renderField} label='URL'
                   validate={ required }
            />
            <div>
                <button type='submit' disabled={submitting}>Submit</button>
                <button type='button' disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'addTicketsForm' // a unique identifier for this form
})(AddTicketsForm)

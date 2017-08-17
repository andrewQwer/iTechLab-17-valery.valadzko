import React from 'react'
import { Field, reduxForm } from 'redux-form'

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined
const aol = value =>
    value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const FieldLevelValidationForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name='username' type='text'
                   component={renderField} label='User name'
                   validate={[ required, maxLength15 ]}
            />
            <Field name='password' type='text'
                   component={renderField} label='Password'
                   validate={[ required, maxLength15 ]}
            />
            <Field name='firstname' type='text'
                   component={renderField} label='First name'
                   validate={[ required, maxLength15 ]}
            />
            <Field name='secondname' type='text'
                   component={renderField} label='Second name'
                   validate={[ required, maxLength15 ]}
            />
            <Field name='email' type='email'
                   component={renderField} label='Email'
                   validate={[required, email]}
                   warn={aol}
            />
            <div>
                <button type='submit' disabled={submitting}>Submit</button>
                <button type='button' disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm)

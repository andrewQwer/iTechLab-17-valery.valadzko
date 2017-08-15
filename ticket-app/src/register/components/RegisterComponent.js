import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props){
        super(props);
        this.error = '';
        this.checkInput = this.checkInput.bind(this);
        this.showResponse = this.showResponse.bind(this);
    }
    showResponse(value) {
        if (value !== '') {
            this.error = 'That is good value';
            console.log(this.error);
        } else {
            this.error = 'That is bad value';
            console.log(this.error);
        }
    }
    checkInput(e){
        e.preventDefault();
        this.showResponse(e.target.value);
        this.forceUpdate();
    }

    render() {
        let firstname, secondname, email, password, reppassword;
        return (
            <div className='registration'>
                <span className='registration__title'>Registration</span>
                <form onSubmit={(e) => {e.preventDefault(); console.log(firstname.value, secondname.value, email.value, password.value, reppassword.value);}}>
                    <input
                        type='text'
                        className='registration__input'
                        placeholder='First name'
                        ref={(node) => firstname = node}
                        onBlur={this.checkInput}
                    /><span className='registration__error-message'>{this.error}</span>
                    <input
                        type='text'
                        className='registration__input'
                        placeholder='Second name'
                        ref={(node) => secondname = node}
                        onBlur={this.checkInput}
                    /><span className='registration__error-message'>{this.error}</span>
                    <input
                        type='text'
                        className='registration__input'
                        placeholder='E-mail'
                        ref={(node) => email = node}
                        onBlur={this.checkInput}
                    /><span className='registration__error-message'>{this.error}</span>
                    <input
                        type='text'
                        className='registration__input'
                        placeholder='Password'
                        ref={(node) => password = node}
                        onBlur={this.checkInput}
                    /><span className='registration__error-message'>{this.error}</span>
                    <input
                        type='text'
                        className='registration__input'
                        placeholder='Repeat password'
                        ref={(node) => reppassword = node}
                        onBlur={this.checkInput}
                    /><span className='registration__error-message'>{this.error}</span>
                    <input className='registration__button' type='submit' value='Sign up'/>
                </form>
            </div>
        )
    }
}


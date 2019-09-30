import React from 'react';

class LinkForm extends React.Component {
    state = {
        modal: false
    }

    handleSubmit = (event)=> {
        event.preventDefault()
        console.log('submitted')
        document.getElementById("notify-form").reset();
        this.setState({
            modal: true
        })
    }
    render(){
        return (
                <article>
                    <div>
                        <form id='shorten-form' onSubmit={this.handleSubmit}>
                        <input name='fullurl' type='text' placeholder=''/>
                        <button className='submit' type="submit">
                            Shorten
                        </button>
                        </form>
                    </div>
                </article>
          )
    }
  
}

export default LinkForm;
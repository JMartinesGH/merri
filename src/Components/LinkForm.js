import React from 'react';

class LinkForm extends React.Component {
    state = {
        urls: [],
        curUrl: ''
    }

    handleSubmit = (url,event)=> {
        event.preventDefault()
        console.log('shorten clicked')

        this.setState({
            [url]: url
        })
        document.getElementById("shorten-form").reset();
    }

    handleChange = (event)=> {
        this.setState({
            curUrl: event.target.value
        })
    }
    render(){
        return (
                <article>
                    <div>
                        <form id='shorten-form' onSubmit={this.handleSubmit}>
                        <input 
                            name='fullurl' 
                            type='url' 
                            placeholder='' 
                            value={this.state.curUrl}
                            onChange={this.handleChange}
                            onSubmit={(value,event)=>this.handleSubmit(value,event)}
                        />
                            <button className='submit' type="submit" onSubmit={(url,event)=>this.handleSubmit(url,event)}>
                                Shorten
                            </button>
                        </form>
                    </div>
                </article>
          )
    }
  
}

export default LinkForm;
import React from 'react';

class Admin extends React.Component {
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
                        Admin
                    </div>
                </article>
          )
    }
  
}

export default Admin;
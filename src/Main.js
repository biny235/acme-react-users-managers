import React from 'react';
import axios from 'axios';
import Users from './Users';

export default class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            users: [],
            managers: []
        }
    }

    componentDidMount(){
        axios.get('/api/users')
            .then(res => res.data)
            .then(users => this.setState({ users: users }))
    }

    render(){
        return(
            <div>
                <div>
                    <ul>
                        <li>Users</li>
                        <li>Managers</li>
                    </ul>
                </div>
                <div>
                {   this.props.children ?
                    React.cloneElement(this.props.children,
                    {
                        users: this.state.users,

                    })
                    :
                    null
                }
                    
                </div>

            </div>
        )
    }

}


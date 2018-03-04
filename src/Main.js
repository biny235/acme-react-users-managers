import React from 'react';
import axios from 'axios';
import Users from './Users';
import { Link } from 'react-router'

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
            .then(users => {
                this.setState({ 
                    users: users,
                    managers: users.filter(user=> user.employees.length)
                 })
                
            })
    }

    render(){
        return(
            <div>
                <div>
                    <ul>
                        <li><Link to={'/users'}> Users </Link></li>
                        <li><Link to={'/managers'}> Managers </Link></li>
                    </ul>
                </div>
                <div>
                {   this.props.children ?
                    React.cloneElement(this.props.children,
                    {
                        users: this.state.users,
                        managers: this.state.managers
                    })
                    :
                    null
                }
                    
                </div>

            </div>
        )
    }

}


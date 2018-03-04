import React from 'react';


export default class Users extends React.Component{

    render(){
        const users = this.props.users;
        return( 
            <ul>
                {users.map(user =>{
                    return <li key={user.id}>
                        {user.name}
                        {user.employees.length ? ` manages ${user.employees.map(user=> user.name).join(', ')}`: null}
                    </li>
                })}
            </ul>
            
        )
    }
}
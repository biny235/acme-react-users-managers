import React from 'react';


export default class Lis extends React.Component{

    render(){

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
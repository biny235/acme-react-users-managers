import React from 'react';

export default class Manager extends React.Component{

    render(){
        const managers = this.props.managers
        return(
            
            <ul>
            {managers.map(manager =>{
                return <li key={manager.id}>
                    {`${manager.name} manages ${manager.employees.map(user=> user.name).join(', ')}`}
                </li>
            })}
        </ul>
        )
    }

}
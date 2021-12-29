//import React from 'react';
import axios from 'axios';
import React, { Component } from 'react';

class Table  extends Component {
   state = { 
       counter: 0,
       status: " ",
       statusText: " ",
       person:[]
    }
    
    Change = () => 
    {
        this.setState({
            counter:this.state.counter+1,
        })
    }
    componentDidMount = () =>
    {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) =>
        {
            this.setState({
                person: response.data,
                status: response.status,
                statusText:response.statusText
                
            }) 
            // just for the checking that is accessed from api or not
            console.log(this.state.person);
       })
    }

    render() { 
        return (  
            <>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card shadow mt-lg-5">
                            <div className="d-flex justify-content-between">
                                <h1 className="title text-center mx-5 px-5 my-3">Number Of Tables {this.state.counter}</h1>
                                <button className="btn btn-lg btn-primary mx-5 px-5 my-3" onClick={this.Change}>Change the number of tables</button>
                                <p>{ this.state.statusText}</p>
                                </div>
                                <div className="card-body">
                                <table className="table ">
                                    <thead>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>Username</th>
                                        <th>email</th>
                                        <th>addres</th>
                                        <th>Phone</th>
                                        <th>website</th>
                                    </thead>
                                    <tbody>
                                            {
                                                this.state.person.map((list) =>
                                                {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>{list.id}</td>
                                                                <td>{list.name}</td>
                                                                <td>{list.username}</td>
                                                                <td>{list.email}</td>
                                                                <td>{list.address.city,list.address.street}</td>
                                                                <td>{list.phone}</td>
                                                                <td>{list.website}</td>
                                                              
                                                            </tr>
                                                        </>
                                                )
                                            })
                                                  
                                             }
                                        </tbody>
                                </table>
                             </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
 


export default Table ;


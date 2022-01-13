import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class CreateKimlikComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            adi:'',
            soyadi:'',
            emailId:'',
            babaadi:'',
            anneadi:'',
            telno:''
        }
        this.changeAdiHandler = this.changeAdiHandler.bind(this);
        this.changesoyadiHandler = this.changesoyadiHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changebabaadiHandler = this.changebabaadiHandler.bind(this);
        this.changeanneadilHandler = this.changeanneadilHandler.bind(this);
        this.changetelnoHandler = this.changetelnoHandler.bind(this);
    }



    saveOrUpdateKimlik = (e) => {
        e.preventDefault();
        debugger;
        let kimlik = {
            adi: this.state.adi, 
            soyadi: this.state.soyadi, 
            emailId: this.state.emailId,
            telno:this.state.telno,
            babaadi:this.state.babaadi,
            anneadi:this.state.anneadi
        };
        console.log('kimlik => ' + JSON.stringify(kimlik));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createKimlik(kimlik).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateKimlik(kimlik, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
    }



    changeAdiHandler= (event) => {
        this.setState({adi: event.target.value});
    }

    changesoyadiHandler= (event) => {
        this.setState({soyadi: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changetelnoHandler= (event) => {
        this.setState({telno: event.target.value});
    }
    changebabaadiHandler= (event) => {
        this.setState({babaadi: event.target.value});
    }
    changeanneadilHandler= (event) => {
        this.setState({anneadi: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }
    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add kimlik</h3>
        }else{
            return <h3 className="text-center">Update kimlik</h3>
        }
    }
    render() {
        

        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Adı: </label>
                                            <input placeholder="Adı" name="adi" className="form-control" 
                                                value={this.state.adi} onChange={this.changeAdiHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Soyadı: </label>
                                            <input placeholder="Soyadı" name="soyadi" className="form-control" 
                                                value={this.state.soyadi} onChange={this.changesoyadiHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Tel No: </label>
                                            <input placeholder="TEl No" name="telno" className="form-control" 
                                                value={this.state.telno} onChange={this.changetelnoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Baba Adı: </label>
                                            <input placeholder="Baba Adı" name="babaadi" className="form-control" 
                                                value={this.state.babaadi} onChange={this.changebabaadiHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Anne Adı: </label>
                                            <input placeholder="Anne Adı" name="anneadi" className="form-control" 
                                                value={this.state.anneadi} onChange={this.changeanneadilHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateKimlik}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )

    }
}

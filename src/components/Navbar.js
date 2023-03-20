import React, { Component } from "react";

class Navbar extends Component{
    constructor(props){
        super(props);
            this.state = {
                daftar: "Daftar Nama",
                title: "Daftar b"
            };
            this.handleMassage = this.handleMassage.bind(this);
            this.rubahData = this.rubahData.bind(this);
    };

    handleMassage(value, e) {
        e.preventDefault();
        alert(this.state.daftar);
        alert(value);
    }

    rubahData() {
        this.setState({ title:"Mantab"});
    }

    render(){
        return(
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link " href="/" onClick={e => this.handleMassage("Pesan dari Agung", e)}>Daftar</a>
                        </li>
                        <li class="nav-item">
                        <a>{this.state.title}</a>
                        </li>
                        <li class="nav-item">
                        <button onClick={e => this.rubahData(e)}>Rubah</button>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar;
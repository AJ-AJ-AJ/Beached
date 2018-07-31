import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class HomePage extends Component {
    state = {
        beaches: [],
        jamaicaId: "",
        bahamasId: "",
        usviId: ""
    }

    componentDidMount = async () => {
        await this.fetchBeachNamesAndId()
    }

    fetchBeachNamesAndId = () => {
        let jamaicaId = 0
        let bahamasId = 0
        let usviId = 0
        axios.get('/api/beach')
            .then((response) => {
                console.log(response.data)
                return this.setState({beaches:response.data})
            }) 
            .then(() => {
                let jamaica = this.state.beaches.filter((beach)=> {
                    return beach.name.toUpperCase() === 'JAMAICA'
                })
                let bahamas = this.state.beaches.filter((beach)=> {
                    return beach.name.toUpperCase() === 'BAHAMAS'
                })
                let usvi = this.state.beaches.filter((beach)=> {
                    return beach.name.toUpperCase() === 'USVI'
                })
                jamaicaId = `/beach/${jamaica.id}`
                bahamasId = `/beach/${bahamas.id}`
                usviId = `/beach/${usvi.id}`
                this.setState({jamaicaId, bahamasId, usviId})
                console.log(jamaicaId)
            })
    }

        render(){
            return(
                <div>
                    <h1>ello</h1>
                    <a href={this.state.jamaicaId} alt="">
                    Jamaica
                    </a>
                </div>
            )
        }
    }

    export default HomePage;
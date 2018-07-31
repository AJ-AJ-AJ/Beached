import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class HomePage extends Component {
    state = {
        beaches: [],
        beachId: "",
    }

    componentDidMount = async () => {
        await this.fetchBeachNamesAndId()
    }

    fetchBeachNamesAndId = () => {
        let beachId = 0
        axios.get('/api/beach')
            .then((response) => {
                console.log(response.data)
                return this.setState({beaches:response.data})
            }) 
            .then(() => {
                let beach = this.state.beaches.filter((beach)=> {
                    return beach.name.toUpperCase() === 'BEACH'
                })
                beachId = `/beach/:beach_id`
            })
    }

        render(){
            return(
                <div>
                    <h1>ello</h1>
                    <a href="/beach/:beach_id" alt="">
                    Beach
                    </a>
                </div>
            )
        }
    }

    export default HomePage;
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
                return this.setState({ beaches: response.data })
            })
            .then(() => {
                let beach = this.state.beaches.filter((beach) => {
                    return beach.name.toUpperCase() === 'BEACH'
                })
                beachId = `/beach/:beach_id`
            })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Beached.</h1>
                    <img className='landingImg' src="https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5222667852001_5214854492001-vs.jpg?pubId=5104226627001&videoId=5214854492001" alt="jamaica" />
                </div>
                <a href="/beach/:beach_id">
                    <div className='landingDiv'>
                        <div className='photoDiv1'>
                            <h2>JA</h2>
                        </div>
                        <div className='photoDiv2'>
                            <h2>FIJI</h2>
                        </div>
                    </div>

                    <div className='landingDiv'>
                        <div className='photoDiv2'>
                            <h2>CUBA</h2>
                        </div>
                        <div className='photoDiv1'>
                            <h2>DR</h2>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default HomePage;
import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class BeachHomePage extends Component{
    state = {
        beach:{},
        reviews:[]
    }

    componentDidMount = () => {
        this.fetchBeachAndPostData()
    }

    fetchBeachAndPostData = () => {
        let beach = {}
        let reviews =[]
        axios.get(`/api/beach/${this.props.match.params.id}`)
            .then((response) => {
                beach = response.data
                return axios.get(`/api/beach/${this.props.match.params.id}/reviews`)
            })
        this.setState({ beach, reviews})
    }

    render(){
        const beachId = this.props.match.params.id
        const beach = `${beachId}`
        const beachReviewTextBox = reviewState.map((review) =>{
            return (
                <div key={review.id}>
                    <div>
                        <Link to={`/beach/${beachId}/reviews/${review.id}`}>{post.title}</Link>
                        <br/>
                        {review.description}
                    </div>
                </div>
            )
        })
    const newReviewAddress = `/beach/${this.props.match.params.id}/reviews/new`
    return (
        <div>
        <div>
            <Link to='/'> Beached. </Link>
            <Link to={beach}>{this.state.city.name}</Link>
            <div>
                <img src={this.state.beach.image_url} alt=""/>
                {beachReviewTextBox}
            </div>
        </div>
        <div>
            <button className="newReviewButton" onClick={() => this.goBack()}>Back</button>
            <button className="newReviewButton">
                <a className="newReviewLink" href={newReviewAddress}>New Review</a>
            </button>
        </div>
        </div>
        
    )
    }
}

export default BeachHomePage;
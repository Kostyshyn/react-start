import React, { Component } from 'react';
import './style.css';

import axios from 'axios'

const uri = "http://jsonplaceholder.typicode.com/posts";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
        	posts: []
        }
    }
    componentDidMount(){
		axios.get(uri).then((response) => {
			this.setState({
            	posts: response.data
            });
            console.log(this.state.posts)
		}).catch((err) => {
			console.log(err);
		})   	
    }
	render(){
		return (
			<div className="posts-wrapper">
				{
				this.state.posts.map((post) => {
					return ( 
						<div key={ post.id } className="post">
							<h3>{ post.title }</h3>
							<p className="post-body">{ post.body }</p>
						</div>
						)
				})
				}
			</div>
		);
	}
}

export default App;

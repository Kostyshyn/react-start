import React, { Component } from 'react';
import './style.css';

import axios from 'axios'

const ROOT_URI = 'http:\//jsonplaceholder.typicode.com';

const Post = ({ post }) => (
	<div key={ post.id } className="post">
		<h3>{ post.title }</h3>
		<p className="post-body">{ post.body }</p>
	</div>	
);

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
        	posts: []
        }
    }
    componentDidMount(){
		axios.get(ROOT_URI + '/posts').then((response) => {
			this.setState({
            	posts: response.data.slice(0, 10)
            });
            console.log(this.state.posts)
		}).catch((err) => {
			console.log(err);
		})   	
    }
	render(){
		return (
			<div className="posts-wrapper">
				{ this.state.posts.map((post) => { return ( <Post post={ post } /> ) }) }
			</div>
		);
	}
}

export default App;

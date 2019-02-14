import React, {Component} from 'react'
import NewsList from './NewsList'

export default class MainContainer extends Component {
	constructor(props) {
		super(props)

		this.state ={
			topStories: []
		}
	}

//let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b4172956a9da4dae8783297f33ec469b'
	getHeadlines = (async () => {
		try {
			const options = {
	  			method: 'get',
	  			headers: {
	    			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
	    			'x-api-key': 'b4172956a9da4dae8783297f33ec469b'
	  			},	  			
	  			//b4172956a9da4dae8783297f33ec469b
			}	
			let url = 'https://newsapi.org/v2/top-headlines/?country=us'
			let req = new Request(url,options);	
			const response = await (fetch(req));
			const data = await response.json();
			//console.log(data);
			if (data.status === "ok") {
				this.setState({topStories: data.articles});
			}
		} catch (err) {
			console.log("Error found", err.name, err.message)
		}
	}); 
	
	componentDidMount(){
	  this.getHeadlines()
	} 

	render() {
		return (
			<div>
				<h1>-----------------US Top Stories------------------</h1>
				<NewsList topStories={this.state.topStories} />
			</div>
		)
	}
}




/*


//This is the new and improved fetch with ES7 async (which is better than promises!)
const deleteProduct2 = (async (id) => {
	const response = await (fetch('/products/delete/' + id, { method: 'delete'}));
	const data = await response.text();
	console.log(data);   //data is empty on an res.end()
	if (data === "DONE") {
		window.location.href="/products";
	}
}); 

const deleteCustomer2 = (async (id) => {
	const response = await (fetch('/customers/delete/' + id, { method: 'delete'}));
	const data = await response.text();
	console.log(data);   //data is empty on an res.end()
	if (data === "DONE") {
		window.location.href="/customers";
	}
}); 

const updateCustomer = (async (id) => {
	let string = "";
	$( "input" ).filter(function (index) {
		string = string + this.name + "=" + this.value + "&";
	});

	string = string + "customer-index=" + id;
	
	const options = {
  		method: 'put',
  		headers: {
    		'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
  		},
  		body: string
	}
	
	const response = await (fetch('/customers/update/' + id, options ));
	const data = await response.text();

	if (data === "DONE") {
		window.location.href=`/customers/${id}`;
	}
}); 

const updateProduct = (async (id) => {
	console.log("3333333333333333")


	let string = "";
	$( "input" ).filter(function (index) {
		string = string + this.name + "=" + this.value + "&";
	});

	string = string + "product-index=" + id;
	console.log(string)


	const options = {
  		method: 'put',
  		headers: {
    		'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
  		},
  		body: string
	}
	console.log(id)

	const response = await (fetch('/products/update/' + id, options ));
	const data = await response.text();
	console.log(data)
	if (data === "DONE") {
		window.location.href=`/products/${id}`;
	}
}); 
*/
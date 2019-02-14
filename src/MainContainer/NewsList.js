import React, { Component } from 'react'

export default class NewsList extends Component {

 /*
    deleteCrime(item,index,event) {
       //console.log(item)
       //console.log(index)
       this.props.deleteCrime(index)
    }
*/
    render() {
        const newsList = this.props.topStories.map((item, index) => {
            return (
                <li key={index}>
                    <h1>{item.title}
                    </h1>
                </li>
            )
        })
        return (
            <ul>
                {newsList}
            </ul>
        )
    }




};
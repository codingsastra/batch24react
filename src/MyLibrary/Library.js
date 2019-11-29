import React, {Component} from 'react'
import BookList from './BookList'
import Wishlist from './Wishlist'

class Library extends Component{
    constructor(){
        super();

        var books=[
            {
                id:1,
                title:'JS Fundamentals',
                author:"John"
            },
            {
                id:2,
                title:'React Beginner',
                author:"Dan"
            },
            {
                id:3,
                title:'Node in action',
                author:"Dean"
            }
        ]

        this.state={
            books:books,
            wishList:[]
        }
    }

    addToWishlist=(book)=>{
        console.log(JSON.stringify(book))
        this.setState({
            wishList:[
                ...this.state.wishList,
                book
            ]
        })
    }

    render(){
        return (
            <div>
                <h1>Library</h1>
                <BookList books={this.state.books} addToWishlist={this.addToWishlist}/>
                <Wishlist books={this.state.wishList}/>
            </div>
        )
    }
}

export default Library;
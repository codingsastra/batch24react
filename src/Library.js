import React, {Component} from 'react'

class Library extends Component{
    constructor(){
        super();

        this.state={
            books:[],
            title:'',
            author:''
        }
    }

    onTitleChange=(e)=>{
        this.setState({
            title:e.target.value
        })
    }

    onAuthorChange=(e)=>{
        this.setState({
            author:e.target.value
        })
    }

    addBook=()=>{
        this.setState({
            books:[
                ...this.state.books,
                {
                    id:this.state.books.length+1,
                    title:this.state.title,
                    author:this.state.author
                }
            ],
            title:'',
            author:''
        })
    }

    deleteBook=(id)=>{
        this.setState({
            books:this.state.books.filter((book)=>{
                return book.id!=id
            })
        })
    }

    render(){
        return(
            <div>
                <h1>My Library</h1>
                <input type="text" value={this.state.title} placeholder="Enter title" onChange={this.onTitleChange} name="title"/>
                <input type="text" value={this.state.author} placeholder="Enter author" onChange={this.onAuthorChange} name="author"/>
                <button onClick={this.addBook}>Add Book</button>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th></th>
                    </tr>
                    {
                        this.state.books.map((book,index)=>{
                            return <tr key={index}>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td><button onClick={
                                    ()=>{
                                        this.deleteBook(book.id);
                                    }
                                }>Delete</button></td>
                            </tr>
                        })
                    }
                </table>
            </div>
        )
    }
}

export default Library;
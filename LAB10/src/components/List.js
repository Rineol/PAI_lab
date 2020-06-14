import React from 'react';
import TodoItems from "./Todo";
import Filter from "./Filter";



class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []

        };
        this.visible = true;
        this.number = 0;
        this.addItem = this.addItem.bind(this);
        this.handleClick = this.handleClick.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
    }

    addItem(e) {
        var itemArray = this.state.items;

        if (this._inputElement.value !== "") {
            itemArray.unshift(
                {
                    text: this._inputElement.value,
                    id: this.number,
                    completed: false,
                    style: null
                    
                }
            );
            this.number = this.number + 1
            this.setState({
                items: itemArray
            });

            this._inputElement.value = "";
        }
        
        e.preventDefault();
    }

    
    handleFilter(){
        this.setState(prevState =>{
            return {
                ...prevState,
                visible: !prevState.visible,
                
            }
        })
    }
        
    
    handleClick(id) {
        this.setState(prevState =>{
            const newItems = prevState.items.map( item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    }
                    return item
                }
            )
            return {
                ...prevState,
                items: newItems,
            }
        })
    }

  
    render() {
        const todoItems = this.state.items.map(item => <TodoItems id = {item.id} item={item} handleClick={this.handleClick} visible={this.state.visible} style={item.style}/>)
        return (
            <div className="ListMain">
                <div className="header">
                    <Filter handleFilter={this.handleFilter} visible={this.visible}/>
                    <p>{todoItems}</p> 
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                               placeholder="Enter a new task" >
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default List;
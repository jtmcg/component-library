import React, { Component } from 'react';
import './DropDown.css';

/*
Expected Props:
    selectionList = an array of items that go in the dropdown
    handleSelect = a method from the parent to return the active selection
*/

export default class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSelection: this.props.selectionList[0],
            selectionList: this.props.selectionList,
            menuOpen: false,
        }

        this.dropdownClicked = this.dropdownClicked.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }

    dropdownClicked() {
        const menuOpen = this.state.menuOpen;
        this.setState({
            menuOpen: !menuOpen,
        });
    }

    selectItem(selectedItem) {
        const menuOpen = this.state.menuOpen;
        console.log(selectedItem);
        this.setState({
            activeSelection: selectedItem,
            menuOpen: !menuOpen,
        })
    }
    
    render() {
        console.log(this.state.activeSelection)
        var expandedDropDown;
        if (this.state.menuOpen) {
            expandedDropDown = this.state.selectionList.map(listItem => {
                return (
                    <div className="list-item-box" key={listItem} onClick={() => this.selectItem(listItem)}>
                        <p className="list-item-text">{listItem}</p>
                    </div>
                )
            });
        } else {
            expandedDropDown = null;
        }
        return (
            <div className="drop-down-container">
                <div className="active-selection-container">
                    <p id="active-selection">{this.state.activeSelection}</p>
                    <div id="dropdown-button" onClick={this.dropdownClicked}>V</div>
                </div>
                {expandedDropDown}
            </div>
        )

    }
}

import React, { Component } from 'react';
import './BottomDropDown.css';

/*
Expected Props:
    selectionList = an array of items that go in the dropdown
    handleSelect = a method from the parent to return the active selection
*/

export default class BottomDropDown extends Component {
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
        });
        this.props.handleSelect(selectedItem);
    }
    
    render() {
        console.log(this.state.activeSelection)
        var expandedDropDown;
        const clickedStatus = (this.state.menuOpen)? "\u25b2" : "\u25bc";
        
        if (this.state.menuOpen) {
            expandedDropDown = this.state.selectionList.map(listItem => {
                var id = null;
                if (listItem === this.state.activeSelection) {
                    id = "active-BDD";
                }

                return (
                    <div className="list-item-box-BDD" id={id} key={listItem} onClick={() => this.selectItem(listItem)}>
                        <p className="list-item-text-BDD">{listItem}</p>
                    </div>
                )
            });
        } else {
            expandedDropDown = null;
        }
        return (
            <div className="drop-down-container-BDD">
                <p id="active-selection-BDD" onClick={this.dropdownClicked}><span>{this.state.activeSelection}</span></p>
                {expandedDropDown}
                <div id="dropdown-button-BDD" onClick={this.dropdownClicked}><span>{clickedStatus}</span></div>
            </div>
        )

    }
}

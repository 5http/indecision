import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    addOption = (option) => {
        if(!option) {
            return 'Enter some text to add an option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    pickOption = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({selectedOption:option}));
    }

    deleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option) 
        }));
    }

    clearOption = () => {
        this.setState(() => ({selectedOption:undefined}));
    }

    deleteAllOptions = () => {
        this.setState(() => ({options:[]}));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({options}));
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    render() {
        const subtitle = 'Algorithmic life decisions';
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        pickOption={this.pickOption}
                    />
                    <div className='widget'>
                        <Options 
                            options={this.state.options}
                            deleteAllOptions={this.deleteAllOptions}
                            deleteOption={this.deleteOption}
                        />
                        <AddOption 
                            addOption={this.addOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    clearOption={this.clearOption}
                />
            </div>
        )
    }
}
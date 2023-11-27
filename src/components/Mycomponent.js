import React from 'react';
import DisplayInfor from './DisplayInfor';
// class compoent
class Mycomponent extends React.Component {
    // JSX
    state = {
        listInfor: [
            {
                id: 1,
                name: 'thai',
                age: 3,
            },
            {
                id: 2,
                name: 'long',
                age: 115,
            },
            {
                id: 3,
                name: 'hoa',
                age: 5,
            },
        ],
    };

    handleOnChangeName(e) {
        e.preventDefault();
        return this.setState({
            name: e.target.value,
        });
    }
    handleOnChangeAge(e) {
        e.preventDefault();
        return this.setState({
            age: e.target.value,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const newInfor = {
            id: Math.floor(Math.random() * 100 + 1) + '-ramdom',
            name: this.state.name,
            age: this.state.age,
        };

        this.setState({
            listInfor: [newInfor, ...this.state.listInfor],
        });
    };
    onRemove = (newListInfor) => {
        this.setState({
            listInfor: newListInfor,
        });
    };

    render() {
        console.log(1);
        return (
            <div>
                my first component
                <form
                    onSubmit={(e) => {
                        this.handleSubmit(e);
                    }}
                >
                    <div>
                        <label htmlFor="name">name</label>
                        <input
                            id="name"
                            type="text"
                            onChange={(e) => {
                                this.handleOnChangeName(e);
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="age">age</label>
                        <input
                            id="age"
                            type="text"
                            onChange={(e) => {
                                this.handleOnChangeAge(e);
                            }}
                        />
                    </div>
                    <button>submit</button>
                    <DisplayInfor
                        listInfor={this.state.listInfor}
                        onRemove={this.onRemove}
                    />
                </form>
            </div>
        );
    }
}

export default Mycomponent;

// function component

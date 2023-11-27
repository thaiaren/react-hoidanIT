import React from 'react';

class DisplayInfor extends React.Component {
    state = {
        togleShowHide: true,
        textShowHide: 'hide',
    };
    handleShowHide = (e) => {
        this.setState({
            togleShowHide: !this.state.togleShowHide,
            textShowHide: this.state.textShowHide === 'hide' ? 'show' : 'hide',
        });
    };

    handleRemove = (item, listInfor) => {
        const index = listInfor.findIndex((id) => id === item);
        if (index < 0) return;
        const newListInfor = [...listInfor];
        newListInfor.splice(index, 1);
        this.props.onRemove(newListInfor);
    };

    // handleClick = () => {
    //     console.log(221);
    // };

    render(props) {
        const { listInfor } = this.props;
        console.log('render', listInfor);
        return (
            <div>
                <div
                    onClick={(e) => {
                        this.handleShowHide();
                    }}
                >
                    click {this.state.textShowHide}
                </div>

                {listInfor.map((item) => {
                    const styleColer = item.age > 10 ? 'red' : 'blue';
                    return (
                        <div key={item.id}>
                            {this.state.togleShowHide && (
                                <div className={styleColer}>
                                    <span> {item.name}</span>
                                    <span> {item.age}</span>
                                    <span
                                        onClick={() => {
                                            this.handleRemove(item, listInfor);
                                        }}
                                    >
                                        {' '}
                                        xoá
                                    </span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default DisplayInfor;

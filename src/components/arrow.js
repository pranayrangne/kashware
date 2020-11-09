import React, { Component } from 'react'

export default class Arrow extends Component {
    render() {
        return (
            <div>
                <div className="justify-content-center">
                    <center style={{
                        position: 'fixed',
                        color: '#AAA6A1',
                        fontSize: "3em",
                        cursor: "pointer",
                        left: "50%",
                        zIndex: this.props.zIndex,
                        bottom: "0"
                    }}><i onClick={this.props.onClick} class="fas fa-angle-double-down"></i></center>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { bookDetails } = this.props;
        return (
            <div className="modal-card">
                <div className="modal-card-details" >
                    <p>
                        <b>{bookDetails.title}</b>
                        <br/>
                        {bookDetails.description}
                    </p>
                </div>
            </div>
        );
    }
}

export default Card;
import React from 'react';

const ReviewItem = (props) => {
    //console.log(props);
    const {name, quantity} = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '10px',
        paddingBottom: '5px'
    }
    return (
        <div style={reviewItemStyle}>
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <br/>
            <button className="main-button">Remove Item</button>
        </div>
    );
};

export default ReviewItem;
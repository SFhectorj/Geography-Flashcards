import React from "react";

export default function CardInfo({ title, description, total }) {
    return (
        <div className="card-info">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>Total Cards: {total}</p>
        </div>
    );
}
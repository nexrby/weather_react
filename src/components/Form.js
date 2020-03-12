import React from 'react';

const Form = (props) => (
    <div>
        <form onSubmit={props.weatherMethod}>
            <input className="form-control mb-2" type="text" name="city" placeholder="Населенный пункт"/>
            <button className="btn btn-primary mb-2">Узнать</button>
        </form>
    </div>
)

export default Form;
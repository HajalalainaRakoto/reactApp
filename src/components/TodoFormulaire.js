import React from 'react';

const TodoFormulaire = () => {
    return (
            <div className="mx-auto text-center mt-2 p-3 col-7">
                <h3>TodoInput</h3>
                <div className="input-group rounded border border-primary mt-5">
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            @
                        </button>
                    </div>
                    <input type="text" className="form-control bg-light border-0" placeholder="New To Do"></input>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary text-center mt-3 w-100">Add new task</button>
                </div>
            </div>
    );
};

export default TodoFormulaire;
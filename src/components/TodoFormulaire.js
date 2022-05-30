import React, { useState } from 'react';

const TodoFormulaire = ({ todoList, setTodoList }) => {
    var [id, setId] = useState(21);
    var [nouveauTask, setNouveauTask] = useState(
        {
            id: "",
            task: "",
            complete: false
        }
    );

    var [info, setInfo] = useState(
        {
            message: "",
            class: ""
        }
    );


    function onChangeInputValue(e) {
        setNouveauTask({
            id: id,
            task: e.target.value,
            complete: false
        });
    }

    function onSubmit(e) {
        e.preventDefault();
        if (nouveauTask.task === '') {
            setInfo({
                message: "Veuillez renseigner le champ!",
                class: "alert alert-danger"
            });
        } else {
            setTodoList(todoList.concat(nouveauTask));
            setInfo({
                message: "Ajout avec succés",
                class: "alert alert-success"
            });
            setId(id + 1);
        }
        setNouveauTask(
            {
                id: "",
                task: "",
                complete: false
            }
        );
    }

    return (
        <form className="mx-auto text-center mt-2 p-3 col-7" onSubmit={onSubmit}>
            <h3>TodoInput</h3>
            <div className={info.class}>
                <strong>{info.message}</strong>
            </div>
            <div className="input-group rounded border border-primary mt-5">
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                        @
                    </button>
                </div>
                <input type="text" value={nouveauTask.task} onChange={onChangeInputValue} className="form-control bg-light border-0" placeholder="New To Do"></input>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary text-center mt-3 w-100">Add new task</button>
            </div>
        </form>
    );
};

export default TodoFormulaire;
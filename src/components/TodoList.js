import React, { useState } from 'react';

const TodoList = () => {

    const [todoList, setTodoList] = useState([
        {
            "id": 1,
            "task": "Give dog a bath",
            "complete": true
        },
        {
            "id": 2,
            "task": "Do laundry",
            "complete": true
        },
        {
            "id": 3,
            "task": "Vacuum floor",
            "complete": false
        },
        {
            "id": 4,
            "task": "Feed cat",
            "complete": true
        },
        {
            "id": 5,
            "task": "Change light bulbs",
            "complete": false
        },
        {
            "id": 6,
            "task": "Go to store",
            "complete": true
        },
        {
            "id": 7,
            "task": "Fill gas tank",
            "complete": true
        },
        {
            "id": 8,
            "task": "Change linens",
            "complete": false
        },
        {
            "id": 9,
            "task": "Rake leaves",
            "complete": true
        },
        {
            "id": 10,
            "task": "Bake cookies",
            "complete": false
        },
        {
            "id": 11,
            "task": "Take nap",
            "complete": true
        },
        {
            "id": 12,
            "task": "Read book",
            "complete": true
        },
        {
            "id": 13,
            "task": "Exercice",
            "complete": false
        },
        {
            "id": 14,
            "task": "Give dog a bath",
            "complete": false
        },
        {
            "id": 15,
            "task": "Do laundry",
            "complete": false
        },
        {
            "id": 16,
            "task": "Vacuum floor",
            "complete": false
        },
        {
            "id": 17,
            "task": "Feed cat",
            "complete": true
        },
        {
            "id": 18,
            "task": "Change light bulbs",
            "complete": false
        },
        {
            "id": 19,
            "task": "Go to store",
            "complete": false
        },
        {
            "id": 20,
            "task": "Fill gas tank",
            "complete": false
        }
    ]);

    function suppression(id) {
        var filtre = todoList.filter((f) => {
            return f.id !== id;
        });
        return filtre;
    }

    // function ajouter() {
    //     var newTask = {id:24, task:"koto", complete:false};
    //     var allTasks = todoList.concat(newTask);
    //     return allTasks;
    // }

    return (
        <div className="mx-auto text-center mt-2 p-3" id='todoList'>
            <h3 className='text-center'>TodoList</h3>
            {
                todoList.map((data) => (
                    <ul key={data.id} id={'list' + data.id} className='list-group list-group-horizontal'>
                        <li className='list-group-item col-7 border-0'>{data.task}</li>
                        <li className='list-group-item  border-0'>
                            <div className='form-check form-check-inline'>
                                <label className='form-check-label'>
                                    <input className='form-check-input' type='checkbox' />
                                </label>
                            </div>
                        </li>
                        <li className='list-group-item  border-0'>
                            <button className='btn btn-warning' disabled={data.complete} >Edit</button>
                        </li>
                        <li className='list-group-item  border-0'>
                            <button className='btn btn-danger' onClick={() => setTodoList(suppression(data.id))}>Delete</button>
                        </li>
                    </ul>
                ))
            }
        </div>
    );
};

export default TodoList;
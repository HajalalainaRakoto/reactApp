import React from 'react';

const TodoList = ({todoList, setTodoList}) => {

    function suppression(id) {
        var filtre = todoList.filter((f) => {
            return f.id !== id;
        });
        return filtre;
    }

    return (
        <div className="mx-auto text-center mt-2 p-3" id='todoList'>
            <h3 className='text-center'>TodoList</h3>
            {
                todoList.map((data) => (
                    <ul key={data.id} className='list-group list-group-horizontal'>
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
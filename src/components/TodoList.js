import React from 'react';

const TodoList = () => {
    const todoList = [
        {
            id: 1,
            name: '8h:mifoha dia mikaly'
        },
        {
            id: 2,
            name: '9h:manomboka midev'
        },
        {
            id: 3,
            name: '12h:mikaly atoandro'
        }
    ];
    return (
        <div className="mx-auto text-center mt-2 p-3">
            <h3 className='text-center'>TodoList</h3>
            {
                todoList.map((data) => (
                    <ul className='list-group list-group-horizontal'>
                        <li className='list-group-item col-7 border-0'>{data.name}</li>
                        <li className='list-group-item  border-0'>
                            <div className='form-check form-check-inline'>
                                <label className='form-check-label'>
                                    <input className='form-check-input' type='checkbox' value='checkedValue' />
                                </label>
                            </div>
                        </li>
                        <li className='list-group-item  border-0'>
                            <button className='btn btn-warning'>Edit</button>
                        </li>
                        <li className='list-group-item  border-0'>
                            <button className='btn btn-danger'>Delete</button>
                        </li>
                    </ul>
                ))
            }
        </div>
    );
};

export default TodoList;
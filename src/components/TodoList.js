import React from 'react';

const TodoList = () => {
    const todoList = [
           '8h:mifoha dia mikaly',
           '9h:manomboka midev',
           '12h:mikaly atoandro'
    ];
    return (
        <div className="mx-auto text-center mt-2 p-3" id='todoList'>
            <h3 className='text-center'>TodoList</h3>
            {
                todoList.map((data, index) => (
                    <ul key={index} className='list-group list-group-horizontal'>
                        <li className='list-group-item col-7 border-0'>{data}</li>
                        <li className='list-group-item  border-0'>
                            <div className='form-check form-check-inline'>
                                <label className='form-check-label'>
                                    <input className='form-check-input' type='checkbox' value='checkedValue' />
                                </label>
                            </div>
                        </li>
                        <li className='list-group-item  border-0'>
                            <button className='btn btn-warning' onClick={(e) => console.log(null)}>Edit</button>
                        </li>
                        <li className='list-group-item  border-0'>
                            <button className='btn btn-danger' onClick={(e) => e.target.parentNode.parentNode.parentNode.removeChild( e.target.parentNode.parentNode)}>Delete</button>
                        </li>
                    </ul>
                ))
            }
        </div>
    );
};

export default TodoList;
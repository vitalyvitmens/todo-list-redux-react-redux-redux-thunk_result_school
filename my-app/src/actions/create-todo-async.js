import { createTodo } from '../api';
import { ACTION_TYPE } from '../actions';
import { NEW_TODO_ID } from '../constants';

export const createTodosAsync = (newTodoData) => async (dispatch) => {
	dispatch({ type: ACTION_TYPE.LOADING_START });

	try {
		const todo = await createTodo(newTodoData);
		dispatch({ type: ACTION_TYPE.REMOVE_TODO, payload: NEW_TODO_ID });

		dispatch({
			type: ACTION_TYPE.ADD_TODO,
			payload: todo,
		});
	} finally {
		return dispatch({ type: ACTION_TYPE.LOADING_END });
	}
};

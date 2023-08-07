import { updateTodo } from '../api';
import { ACTION_TYPE } from '../actions';

export const updateTodoAsync = (newTodoData) => async (dispatch) => {
	dispatch({ type: ACTION_TYPE.LOADING_START });

	try {
		await updateTodo(newTodoData);
		dispatch({ type: ACTION_TYPE.UPDATE_TODO, payload: newTodoData });
	} finally {
		return dispatch({ type: ACTION_TYPE.LOADING_END });
	}
};

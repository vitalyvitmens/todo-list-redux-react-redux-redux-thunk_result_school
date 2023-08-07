import { deleteTodo } from '../api';
import { ACTION_TYPE } from '../actions';

export const deleteTodoAsync = (id) => async (dispatch) => {
	dispatch({ type: ACTION_TYPE.LOADING_START });

	try {
		await deleteTodo(id);
		dispatch({ type: ACTION_TYPE.REMOVE_TODO, payload: id });
	} finally {
		return dispatch({ type: ACTION_TYPE.LOADING_END });
	}
};

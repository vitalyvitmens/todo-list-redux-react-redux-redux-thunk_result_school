import { readTodos } from '../api';
import { ACTION_TYPE } from '../actions';

export const readTodosAsync = (searchPhrase, isAlphabetSorting) => async (dispatch) => {
	dispatch({ type: ACTION_TYPE.LOADING_START });

	try {
		const loadedTodos = await readTodos(searchPhrase, isAlphabetSorting);
		dispatch({ type: ACTION_TYPE.SET_TODOS, payload: loadedTodos });
	} finally {
		return dispatch({ type: ACTION_TYPE.LOADING_END });
	}
};

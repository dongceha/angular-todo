import { AppState } from './../index';
import { todoFeatureKey, State } from './../reducers/todo.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectorTodo = createFeatureSelector<AppState, State>(todoFeatureKey)

export const selectTodos = createSelector(selectorTodo, state => state.todos);


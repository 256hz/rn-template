import { createReducer } from '@reduxjs/toolkit';
import { UserProperty } from '@redux/types/user';
import { editUserProperty, logOut } from 'redux/action/user';

export type UserState = {
	[key in UserProperty]?: string | number;
};

const INITIAL_STATE: UserState = {
	id: undefined,
	first_name: undefined,
	last_name: undefined,
	email: undefined,
	password_hash: undefined,
	gender: undefined,
	age_group_start: undefined,
	activity_time_1: undefined,
	activity_time_2: undefined,
	activity_time_3: undefined,
	activity_time_4: undefined,
	current_step: undefined,
	current_day: undefined,
	current_activity: undefined,
};

export const user = createReducer(INITIAL_STATE, builder => {
	builder.addCase(editUserProperty, (state, { payload: { property, value } }) => ({ ...state, [property]: value }));
});

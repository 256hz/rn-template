// import { action, createAction } from 'typesafe-actions';
import { createAction } from '@reduxjs/toolkit';
import { UserProperty } from '@redux/types/user';

// export const editUserProperty = (property: UserProperty, value: string | number) => action('EDIT_USER_PROPERTY', { property, value });

interface UserPropertyResult {
	property: UserProperty;
	value: string | number;
}

export const editUserProperty = createAction('EDIT_USER_PROPERTY',
	(property: UserProperty, value: string | number) => ({ payload: { property, value } }));

// export const logOut = action('LOG_OUT');
export const logOut = createAction('LOG_OUT');

// export const logIn = (username: string, password: string) => action('LOG_IN', { username, password });

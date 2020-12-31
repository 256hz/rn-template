import { createAction } from '@reduxjs/toolkit';
import { UserProperty } from '@redux/types/user';

export const editUserProperty = createAction('EDIT_USER_PROPERTY',
	(property: UserProperty, value: string | number) => ({ payload: { property, value } }));

export const logIn = createAction('LOG_IN',
	(username: string, password: string) => ({ payload: { username, password } }));

export const logOut = createAction('LOG_OUT');


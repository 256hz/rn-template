import { createSelector } from '@reduxjs/toolkit';
import State from '@redux/RootState';
import { UserProperty } from 'redux/types/user';

const user = (state: State) => (state || {}).user || {};

export const getUserId = createSelector(user, userState => userState[UserProperty.ID]);

export const allState = createSelector(state => state, astate => astate);

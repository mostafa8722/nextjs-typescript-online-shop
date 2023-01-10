import color from '../interfaces/color/colorActionType';
import { colorInfo } from '../interfaces/info';
import { colorActionType } from '../actionTypes/actions';


export const add = (payload: colorInfo): color.add => {

  return { type: colorActionType.ADD_COLOR, payload }
}

export const update = (payload: colorInfo): color.update => {

  return { type: colorActionType.UPDATE_COLOR, payload }
}
export const loadAdminData = (payload: colorInfo[]): color.loadDataAdmin => {

  return { type: colorActionType.ADMIN_COLORS, payload }
}


export const loadData = (payload: colorInfo[]): color.loadData => {

  return { type: colorActionType.USER_COLORS, payload }
}



export const deleteData = (payload: colorInfo): color.deleteData => {

  return { type: colorActionType.DELETE_COLOR, payload }
}



export const loadColor = (payload: colorInfo): color.loadColor => {

  return { type: colorActionType.COLOR, payload }
}




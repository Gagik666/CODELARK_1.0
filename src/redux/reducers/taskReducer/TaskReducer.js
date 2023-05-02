import { COLOR } from "../../../assets/colors/Colors"
import { TYPE } from "./ActionsTypes"

const initialState = {
    taskTitle: [
        {
            id: 0,
            tasks: [
                {
                    id: 0,
                    name: "flexBox_mob",
                    title: "FlexBox"
                },
                {
                    id: 1,
                    name: "flexBox_mob2",
                    title: "FlexBox2"
                },
                {
                    id: 2,
                    name: "flexBox_mob3",
                    title: "FlexBox3"
                },
            ]
        },
        {
            id: 1,
            tasks: [
                {
                    id: 0,
                    name: "flexBox_web",
                    title: "FlexBox"
                },
                {
                    id: 1,
                    name: "flexBox_web2",
                    title: "FlexBox2"
                },
                {
                    id: 2,
                    name: "flexBox_web3",
                    title: "FlexBox3"
                },
            ]
        },
    ],
    tasks: [],
    unCheckVisibleBottomSheet: false,
    checkVisibleBottomSheet: false,
    flexTextInputColor: COLOR.black,
    flexTextInput: ''

}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.EDIT_LIST:
            return {
                ...state,
                tasks: action.list
            }
        case TYPE.EDIT_VISIBLE_UN_CHECK_BOTTOMSHEET:
            return {
                ...state,
                unCheckVisibleBottomSheet: action.val
            }
        case TYPE.EDIT_VISIBLE_CHECK_BOTTOMSHEET:
            return {
                ...state,
                checkVisibleBottomSheet: action.val
            }
        case TYPE.EDIT_FLEXT_TEXTINPUT_COLOR:
            return {
                ...state,
                flexTextInputColor: action.val
            }
        case TYPE.EDIT_FLEXT_TEXTINPUT:
            return {
                ...state,
                flexTextInput: action.val
            }
        default:
            return state
    }
}

export const selectTaskList = (s) => s.tasks.tasks
export const selectItemTasksTitle = (s) => s.tasks.taskTitle
export const selectUnCheckBottomSheet = (s) => s.tasks.unCheckVisibleBottomSheet
export const selectCheckBottomSheet = (s) => s.tasks.checkVisibleBottomSheet
export const selectFlexTExtInputColor = (s) => s.tasks.flexTextInputColor
export const selectFlexTExtInput = (s) => s.tasks.flexTextInput

export const editList = (list) => dispatch => dispatch({ type: TYPE.EDIT_LIST, list })
export const edtUnCheckVisibleBottomSheet = (val) => dispatch => dispatch({type: TYPE.EDIT_VISIBLE_UN_CHECK_BOTTOMSHEET, val})
export const edtCheckVisibleBottomSheet = (val) => dispatch => dispatch({type: TYPE.EDIT_VISIBLE_CHECK_BOTTOMSHEET, val})
export const editFlextTextInputColor = (val) => dispatch => dispatch({type: TYPE.EDIT_FLEXT_TEXTINPUT_COLOR, val})
export const editFlextTextInput = (val) => dispatch => dispatch({type: TYPE.EDIT_FLEXT_TEXTINPUT, val})
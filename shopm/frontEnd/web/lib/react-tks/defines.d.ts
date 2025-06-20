import React from 'react';

interface FollowStateProps {
    config?: FollowState_Config_Props;
    getData?: FollowState_GetData_Props;
    setData?: FollowState_SetData_Props;
    event?: FollowState_Event_Props;
}
interface FollowState_Config_Props {
    registerState?: FollowState_Config_RegisterState_Props[];
}
interface FollowState_SetData_Props {
    addState?: (newState: string) => void;
    clearStates?: () => void;
}
interface FollowState_GetData_Props {
    getRegistedStateConst?: <T_states>() => FollowState_CONST_STATE_Props<T_states>;
    getCurrrentState?: () => string | undefined;
    getBeforeState?: (index: number) => string | undefined;
    getAllState?: () => (string | undefined)[];
}
interface FollowState_Event_Props {
    isBeforCurrent?: (beforeState: string, currentState: string) => boolean;
}
interface FollowState_Config_RegisterState_Props {
    descrition?: string;
    state?: string;
}
type FollowState_CONST_STATE_Props<T_states> = {
    [key in keyof T_states]?: string;
};

interface TKSProps {
    name?: string;
    id?: string;
    data?: any;
    event?: {
        defaultEvent?: React.MouseEvent;
    };
    removeDefaultFunction: () => void;
    [key: string]: any;
}
declare const TKS_Init: TKSProps;
interface TableProps {
    config?: Table_Config_Props;
    data?: Table_Data_Props;
    control?: Table_Control_Props;
    event?: Table_Event_Props;
}
interface Table_Config_Props {
    name?: string;
    id?: string;
    columnsInfor?: ColumnsInforProps[];
    pageSize?: number;
    maxRow?: number;
    controlPos?: string;
    customColumn?: Table_Config_CustomColumn_Props;
    cell?: CellProps;
}
interface Table_Config_CustomColumn_Props {
    type?: 'add-sub' | 'get-data' | 'calculateMoney';
    fields?: string[];
    max_width?: string;
    is_amount_input_negative?: boolean;
    amount_input_max?: number;
}
interface Table_Data_Props {
    values?: {
        [key: string]: any;
    }[];
    all_values?: {
        [key: string]: any;
    }[];
    customColumn_values?: Table_Data_CustomColumn_DataIn_Type[][];
}
type Table_Data_CustomColumn_DataIn_Type = {
    field: string;
    data: string;
};
interface Table_Control_Props {
    pageIndex?: number;
    loadDataState?: string;
}
interface Table_Event_Props {
    onSelectedPage?: (TKS: TKSProps) => void;
    customColumn?: Table_Event_CustomColumn_Props;
}
interface Table_Event_CustomColumn_Props {
    onInputChange?: (TKS: TKSProps) => void;
    onAddButton?: (TKS: TKSProps) => void;
    onSubButton?: (TKS: TKSProps) => void;
    onInput?: (TKS: TKSProps) => void;
}
interface Table_Element_Props {
    rowsOfIndex: React.MutableRefObject<(HTMLDivElement | null)[]>;
    rows: React.MutableRefObject<(HTMLDivElement | null)[]>;
    rowsOfCalculate: React.MutableRefObject<(HTMLDivElement | null)[]>;
    cells: React.MutableRefObject<(HTMLDivElement | null)[]>;
}
interface Table_Resizable_Props {
    cell_X: React.MutableRefObject<number>;
    cell_Y: React.MutableRefObject<number>;
    isResizable_X: React.MutableRefObject<boolean>;
    isResizable_Y: React.MutableRefObject<boolean>;
    cellWidth: React.MutableRefObject<number>;
    cellHeight: React.MutableRefObject<number>;
    selectedColumn: React.MutableRefObject<number | undefined>;
    selectedRow: React.MutableRefObject<number | undefined>;
}
interface ContextTableProps {
    table?: TableProps;
    columnAmount: React.MutableRefObject<number>;
    rowAmount: React.MutableRefObject<number>;
    pageIndex: number;
    default_pageSize: number;
    default_maxRow: number;
    setPageIndex: React.Dispatch<React.SetStateAction<number>>;
    loadDataState: string | undefined;
    setLoadDataState: React.Dispatch<React.SetStateAction<string | undefined>>;
    isControl_pageIndex_defaultFunction: React.MutableRefObject<boolean>;
    isControl_loadDataState_defaultFunction: React.MutableRefObject<boolean>;
    follow_loadingState?: FollowStateProps;
    elements: React.MutableRefObject<Table_Element_Props>;
    row_hoverColor: string;
    resizable: React.MutableRefObject<Table_Resizable_Props>;
}
interface CellProps {
    fieldName?: string;
    content?: string;
    width?: string;
    height?: string;
    textColor?: string;
    textWeight?: string;
}
interface RowProps {
    children?: React.ReactNode;
    cells?: CellProps[];
}
interface TableControlProps {
    pageIndex: number;
    pageSize: number;
    maxRow: number;
}
interface TableConfigProps {
    columnAmount?: number;
    columnsInfor?: ColumnsInforProps[];
    pageSize?: number;
    maxRow?: number;
    controlPos?: string;
}
interface ColumnsInforProps {
    columnName: string;
    fieldName: string;
}
interface LoadProps {
    type: string;
    infor: DotCircleLoadProps | LineCircleLoadProps | SkeletonLoadProps;
}
interface DotCircleLoadProps {
    dotSize: string;
    dotBackgroundColor: string;
    dotAmount: string;
    circleSize: string;
}
interface LineCircleLoadProps {
    lineSize: number;
    lineBackgroundColor: string;
    circleSize: number;
}
interface SkeletonLoadProps {
    width?: number;
    maxminWidth?: 'max' | 'min';
    height?: number;
    maxminHeight?: 'max' | 'min';
}
interface WarnTriangleProps {
    size?: number;
    background?: string;
    fill?: string;
    stroke?: string;
    animation_time?: number;
    stroke_width?: number;
}
interface ErrorCircleProps {
    size?: number;
    background?: string;
    fill?: string;
    stroke?: string;
    animation_time?: number;
    stroke_width?: number;
}
interface TickSymbolProps {
    size?: number;
    background?: string;
    fill?: string;
    stroke?: string;
    animation_time?: number;
    stroke_width?: number;
}
interface DeleteCircleProps {
    size?: number;
    background?: string;
    fill?: string;
    stroke?: string;
    animation_time?: number;
    stroke_width?: number;
}
interface AddCircleProps {
    size?: number;
    background?: string;
    fill?: string;
    stroke?: string;
    animation_time?: number;
    stroke_width?: number;
}
interface SubCircleProps {
    size?: number;
    background?: string;
    fill?: string;
    stroke?: string;
    animation_time?: number;
    stroke_width?: number;
}
interface BigLeftArrowProps {
    fill?: string;
    stroke?: string;
    stroke_width?: number;
}
interface BigRightArrowProps {
    fill?: string;
    stroke?: string;
    stroke_width?: number;
}
interface BigDownArrowProps {
    fill?: string;
    stroke?: string;
    stroke_width?: number;
}
interface BigUpArrowProps {
    fill?: string;
    stroke?: string;
    stroke_width?: number;
}
interface DynamicBigRowArrowProps {
    fill?: string;
    stroke?: string;
    stroke_width?: number;
    direct?: 'left' | 'right';
    during_time_animation?: number;
}
interface ThreeDotHorizontalProps {
}
interface ThreeDotVerticalProps {
}
interface ToastMessageProps {
    config?: ToastMessage_Config_Props;
    data?: ToastMessage_Data_Props;
    control?: ToastMessage_Control_Props;
    event?: ToastMessage_Event_Props;
}
interface ToastMessage_Config_Props {
    name?: string;
    id?: string;
    max_message?: number;
}
interface ToastMessage_Data_Props {
    type?: string;
    message?: string;
}
interface ToastMessage_Control_Props {
}
interface ToastMessage_Event_Props {
    onData?: (TKS: TKSProps) => void;
}
interface OverlayProps {
    config?: Overlay_Config_Props;
    data?: Overlay_Data_Props;
    control?: Overlay_Control_Props;
    event?: Overlay_Event_Props;
}
interface Overlay_Config_Props {
    name?: string;
    id?: string;
    zIndex?: number;
    show_type?: string;
    opacity_time?: number;
    show_time?: number;
    blear_rate?: number;
}
interface Overlay_Data_Props {
}
interface Overlay_Control_Props {
    isShow?: boolean;
    isCenter?: boolean;
}
interface Overlay_Event_Props {
    onClose?: (TKS: TKSProps) => void;
}
interface DialogProps {
    config?: Dialog_Config_Props;
    data?: Dialog_Data_Props;
    control?: Dialog_Control_Props;
    event?: Dialog_Event_Props;
}
interface Dialog_Config_Props {
    name?: string;
    id?: string;
    activate_button_1?: boolean;
    activate_button_2?: boolean;
    activate_button_3?: boolean;
    button_1_name?: string;
    button_2_name?: string;
    button_3_name?: string;
    opacity_time?: number;
    show_time?: number;
    button_font_size?: number;
    button_min_width?: number;
}
interface Dialog_Data_Props {
    message?: string;
    message_type?: string;
    message_color?: string;
}
interface Dialog_Control_Props {
    isShow?: boolean;
}
interface Dialog_Event_Props {
    onClose?: (TKS: TKSProps) => void;
    onClickButton1?: (TKS: TKSProps) => void;
    onClickButton2?: (TKS: TKSProps) => void;
    onClickButton3?: (TKS: TKSProps) => void;
}
interface Table1_Props {
    config?: Table1_Config_Props;
    data?: Table1_Data_Props;
    control?: Table1_Control_Props;
    event?: Table1_Event_Props;
}
interface Table1_Config_Props {
    cell_width?: string;
    cell_maxWidth?: string;
    columnInfor?: Table1_Config_ColumnInfor_Props[];
}
interface Table1_Config_ColumnInfor_Props {
    columnName: string;
    fieldName: string;
}
interface Table1_Data_Props {
    values?: {
        [key: string]: any;
    }[];
}
interface Table1_Control_Props {
}
interface Table1_Event_Props {
}
interface Table1_CCRow_Props {
    config?: Table1_CCRow_Config_Props;
    data?: Table1_CCRow_Data_Props;
    control?: Table1_CCRow_Control_Props;
    event?: Table1_CCRow_Event_Props;
}
interface Table1_CCRow_Config_Props {
    index_in_table?: number;
}
interface Table1_CCRow_Data_Props {
    cells: Table1_CCCell_Props[];
}
interface Table1_CCRow_Control_Props {
}
interface Table1_CCRow_Event_Props {
}
interface Table1_CCCell_Props {
    config?: Table1_CCCell_Config_Props;
    data?: Table1_CCCell_Data_Props;
    control?: Table1_CCCell_Control_Props;
    event?: Table1_CCCell_Event_Props;
}
interface Table1_CCCell_Config_Props {
    index_in_table?: number;
    index_in_row?: number;
    text_color?: string;
    text_weight?: string;
    width?: string;
    height?: string;
}
interface Table1_CCCell_Data_Props {
    fieldName?: string;
    content?: string;
}
interface Table1_CCCell_Control_Props {
}
interface Table1_CCCell_Event_Props {
}
interface Table1_Context_Props {
    table1?: Table1_Props;
    elements: React.MutableRefObject<Table1_Element_Props>;
}
interface Table1_Element_Props {
    cell_element: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

export { TKS_Init };
export type { AddCircleProps, BigDownArrowProps, BigLeftArrowProps, BigRightArrowProps, BigUpArrowProps, CellProps, ColumnsInforProps, ContextTableProps, DeleteCircleProps, DialogProps, Dialog_Config_Props, Dialog_Control_Props, Dialog_Data_Props, Dialog_Event_Props, DotCircleLoadProps, DynamicBigRowArrowProps, ErrorCircleProps, LineCircleLoadProps, LoadProps, OverlayProps, Overlay_Config_Props, Overlay_Control_Props, Overlay_Data_Props, Overlay_Event_Props, RowProps, SkeletonLoadProps, SubCircleProps, TKSProps, Table1_CCCell_Config_Props, Table1_CCCell_Control_Props, Table1_CCCell_Data_Props, Table1_CCCell_Event_Props, Table1_CCCell_Props, Table1_CCRow_Config_Props, Table1_CCRow_Control_Props, Table1_CCRow_Data_Props, Table1_CCRow_Event_Props, Table1_CCRow_Props, Table1_Config_ColumnInfor_Props, Table1_Config_Props, Table1_Context_Props, Table1_Control_Props, Table1_Data_Props, Table1_Element_Props, Table1_Event_Props, Table1_Props, TableConfigProps, TableControlProps, TableProps, Table_Config_CustomColumn_Props, Table_Config_Props, Table_Control_Props, Table_Data_CustomColumn_DataIn_Type, Table_Data_Props, Table_Element_Props, Table_Event_CustomColumn_Props, Table_Event_Props, Table_Resizable_Props, ThreeDotHorizontalProps, ThreeDotVerticalProps, TickSymbolProps, ToastMessageProps, ToastMessage_Config_Props, ToastMessage_Control_Props, ToastMessage_Data_Props, ToastMessage_Event_Props, WarnTriangleProps };

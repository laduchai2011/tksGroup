import React from 'react';

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
interface CellProps {
    fieldName?: string;
    content?: string;
    width?: string;
    height?: string;
    textColor?: string;
    textWeight?: string;
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

interface MyTableProps extends React.HTMLProps<HTMLDivElement> {
    table?: TableProps;
    [key: string]: any;
}
declare const _default$i: React.NamedExoticComponent<MyTableProps>;

interface MyTable1Props extends React.HTMLProps<HTMLDivElement> {
    table1?: Table1_Props;
    [key: string]: any;
}
declare const _default$h: React.NamedExoticComponent<MyTable1Props>;

interface MyDialogProps extends React.HTMLProps<HTMLDivElement> {
    dialog?: DialogProps;
    [key: string]: any;
}
declare const _default$g: React.NamedExoticComponent<MyDialogProps>;

interface MyLoadProps extends React.HTMLProps<HTMLDivElement> {
    load: LoadProps;
    [key: string]: any;
}
declare const _default$f: React.NamedExoticComponent<MyLoadProps>;

interface MyOverlayProps extends React.HTMLProps<HTMLDivElement> {
    overlay?: OverlayProps;
    [key: string]: any;
}
declare const _default$e: React.NamedExoticComponent<MyOverlayProps>;

interface MyToastMessageProps extends React.HTMLProps<HTMLDivElement> {
    toastMessage?: ToastMessageProps;
    [key: string]: any;
}
declare const _default$d: React.NamedExoticComponent<MyToastMessageProps>;

interface MyTickSymbolProps extends React.HTMLProps<SVGSVGElement> {
    tickSymbol?: TickSymbolProps;
    [key: string]: any;
}
declare const _default$c: React.NamedExoticComponent<MyTickSymbolProps>;

interface MyWarnTriangleProps extends React.HTMLProps<SVGSVGElement> {
    warnTriangle?: WarnTriangleProps;
    [key: string]: any;
}
declare const _default$b: React.NamedExoticComponent<MyWarnTriangleProps>;

interface MyErrorCircleProps extends React.HTMLProps<SVGSVGElement> {
    errorCircle?: ErrorCircleProps;
    [key: string]: any;
}
declare const _default$a: React.NamedExoticComponent<MyErrorCircleProps>;

interface MyDeleteCircleProps extends React.HTMLProps<SVGSVGElement> {
    deleteCircle?: DeleteCircleProps;
    [key: string]: any;
}
declare const _default$9: React.NamedExoticComponent<MyDeleteCircleProps>;

interface MyBigLeftArrowProps extends React.HTMLProps<SVGSVGElement> {
    bigLeftArrow?: BigLeftArrowProps;
    [key: string]: any;
}
declare const _default$8: React.NamedExoticComponent<MyBigLeftArrowProps>;

interface MyBigRightArrowProps extends React.HTMLProps<SVGSVGElement> {
    bigRightArrow?: BigRightArrowProps;
    [key: string]: any;
}
declare const _default$7: React.NamedExoticComponent<MyBigRightArrowProps>;

interface MyBigDownArrowProps extends React.HTMLProps<SVGSVGElement> {
    bigDownArrow?: BigDownArrowProps;
    [key: string]: any;
}
declare const _default$6: React.NamedExoticComponent<MyBigDownArrowProps>;

interface MyBigUpArrowProps extends React.HTMLProps<SVGSVGElement> {
    bigUpArrow?: BigUpArrowProps;
    [key: string]: any;
}
declare const _default$5: React.NamedExoticComponent<MyBigUpArrowProps>;

interface MyDynamicBigRowArrowProps extends React.HTMLProps<SVGSVGElement> {
    dynamicBigRowArrowProps?: DynamicBigRowArrowProps;
    [key: string]: any;
}
declare const _default$4: React.NamedExoticComponent<MyDynamicBigRowArrowProps>;

interface MyAddCircleProps extends React.HTMLProps<SVGSVGElement> {
    addCircle?: AddCircleProps;
    [key: string]: any;
}
declare const _default$3: React.NamedExoticComponent<MyAddCircleProps>;

interface MySubCircleProps extends React.HTMLProps<SVGSVGElement> {
    subCircle?: SubCircleProps;
    [key: string]: any;
}
declare const _default$2: React.NamedExoticComponent<MySubCircleProps>;

interface MyThreeDotHorizontalProps$1 extends React.HTMLProps<SVGSVGElement> {
    threeDotHorizontal?: ThreeDotHorizontalProps;
    [key: string]: any;
}
declare const _default$1: React.NamedExoticComponent<MyThreeDotHorizontalProps$1>;

interface MyThreeDotHorizontalProps extends React.HTMLProps<SVGSVGElement> {
    threeDotVertical?: ThreeDotVerticalProps;
    [key: string]: any;
}
declare const _default: React.NamedExoticComponent<MyThreeDotHorizontalProps>;

export { _default$3 as AddCircle, _default$6 as BigDownArrow, _default$8 as BigLeftArrow, _default$7 as BigRightArrow, _default$5 as BigUpArrow, _default$9 as DeleteCircle, _default$g as Dialog, _default$4 as DynamicBigRowArrow, _default$a as ErrorCircle, _default$f as Loading, _default$e as Overlay, _default$2 as SubCircle, _default$i as Table, _default$h as Table1, _default$1 as ThreeDotHorizontal, _default as ThreeDotVertical, _default$c as TickSymbol, _default$d as ToastMessage, _default$b as WarnTriangle };

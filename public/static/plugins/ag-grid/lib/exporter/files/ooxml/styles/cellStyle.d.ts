// ag-grid-enterprise v21.2.1
import {ExcelOOXMLTemplate} from 'ag-grid-community';

declare const borderFactory: ExcelOOXMLTemplate;
export default borderFactory;
export interface CellStyle {
    builtinId: number;
    name: string;
    xfId: number;
}

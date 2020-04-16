declare module "yvanui/YvanUIAjax" {
    export function invokeApi<T>(apiId: string, args: IArguments, entity: T): Promise<T>;
    export namespace Ajax {
        interface CreateAjaxOption {
            baseUrl: string;
        }
        type MethodType = 'POST' | 'GET' | 'POST-JSON' | 'UPLOADEXCEL' | 'DOWNLOAD' | 'POST-FILE';
        /**
         * 请求参数
         */
        interface Option {
            /**
             * url 地址
             */
            url: string;
            /**
             * 下载文件名
             */
            fileName?: string;
            /**
             * 请求方法
             */
            method: MethodType;
            /**
             * 上传文件（如果需要的话）
             */
            file?: any;
            /**
             * 请求参数
             */
            data?: any;
            /**
             * 请求头
             */
            headers?: any;
            /**
             * 是否只传送 responseData
             */
            disableResponseData?: boolean;
        }
        /**
         * 数据响应
         */
        interface Response {
            success: boolean;
            msg: string;
            data: any;
        }
        type Function = (option: Option) => Promise<Ajax.Response>;
    }
    export function downLoad(downLoadUrl: string, filename: string): void;
    /**
     * 创建一个 Ajax 客户端
     */
    export function createAjax(createOption: Ajax.CreateAjaxOption): Ajax.Function;
}
declare module "yvanui/YvanRender" {
    export function render(selector: string): void;
}
declare module "yvanui/index" {
    export * from "yvanui/YvanUIAjax";
    export * from "yvanui/YvanRender";
}
declare module "main" { }

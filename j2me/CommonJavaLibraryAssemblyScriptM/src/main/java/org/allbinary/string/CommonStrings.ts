/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
 * 
 * By agreeing to this license you and any business entity you represent are
 * legally bound to the AllBinary Open License Version 1 legal agreement.
 * 
 * You may obtain the AllBinary Open License Version 1 legal agreement from
 * AllBinary or the root directory of AllBinary's AllBinary Platform repository.
 * 
 * Created By: Travis Berthelot
 *  
 */
// Generated Code Do Not Modify
// package org.allbinary.string
// import jsinterop.annotations.JsType
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsProperty

@global export class CommonStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.string.CommonStrings";
    }
    @lazy static jv_instance: CommonStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CommonStrings | null {
        if (!CommonStrings.js_instance) {
            CommonStrings.js_instance = true;
            CommonStrings.jv_instance = new CommonStrings().jinit_CommonStrings_0();
        }
        return CommonStrings.jv_instance;
    }
    static set instance(value: CommonStrings | null) {
        CommonStrings.js_instance = true;
        CommonStrings.jv_instance = value;
    }
    EMPTY: string | null = null;
    CREATE_IMAGE: string | null = null;
    PLEASE_WAIT: string | null = null;
    PLEASE_WAIT_FOR_SERVER: string | null = null;
    PERIODS: string | null = null;
    LOADING: string | null = null;
    CONSTRUCTOR: string | null = null;
    START: string | null = null;
    END: string | null = null;
    EXCEPTION: string | null = null;
    EXCEPTION_LABEL: string | null = null;
    CLEANUP: string | null = null;
    INIT: string | null = null;
    CLOSE: string | null = null;
    UP: string | null = null;
    DOWN: string | null = null;
    LEFT: string | null = null;
    RIGHT: string | null = null;
    DIRECTION_NAME: StaticArray<string | null> | null = null;
    CREATE: string | null = null;
    REMOVE: string | null = null;
    UPDATE: string | null = null;
    DELETE: string | null = null;
    delete_: string | null = null;
    LOAD: string | null = null;
    SAVE: string | null = null;
    ADD: string | null = null;
    DROP: string | null = null;
    INSERT: string | null = null;
    VISIT: string | null = null;
    START_METHOD_NAME: string | null = null;
    END_METHOD_NAME: string | null = null;
    GET: string | null = null;
    PROCESS: string | null = null;
    GET_INSTANCE: string | null = null;
    GET_LIST: string | null = null;
    RUN: string | null = null;
    START_RUNNABLE: string | null = null;
    RUNNING: string | null = null;
    END_RUNNABLE: string | null = null;
    DISABLE: string | null = null;
    ENABLE: string | null = null;
    SUCCESS: string | null = null;
    FAILURE: string | null = null;
    NOT_IMPLEMENTED: string | null = null;
    UNKNOWN: string | null = null;
    ON_EVENT: string | null = null;
    IS_VALID: string | null = null;
    TOSTRING: string | null = null;
    ADD_LISTENER: string | null = null;
    REMOVE_LISTENER: string | null = null;
    SIZE: string | null = null;

    jfields_CommonStrings(): void {
    this.EMPTY = "Empty";
    this.CREATE_IMAGE = "createImage";
    this.PLEASE_WAIT = "Please Wait";
    this.PLEASE_WAIT_FOR_SERVER = "Please Wait Getting Data From Server...";
    this.PERIODS = "...";
    this.LOADING = "Loading...";
    this.CONSTRUCTOR = "Constructor";
    this.START = "Start";
    this.END = "End";
    this.EXCEPTION = "Exception";
    this.EXCEPTION_LABEL = "Exception: ";
    this.CLEANUP = "cleanup";
    this.INIT = "init";
    this.CLOSE = "close";
    this.UP = "up";
    this.DOWN = "down";
    this.LEFT = "left";
    this.RIGHT = "right";
    this.DIRECTION_NAME = StaticArray.fromArray<string | null>([this.DOWN, this.LEFT, this.RIGHT, this.UP]);
    this.CREATE = "Create";
    this.REMOVE = "Remove";
    this.UPDATE = "Update";
    this.DELETE = "Delete";
    this.delete_ = "delete";
    this.LOAD = "load";
    this.SAVE = "save";
    this.ADD = "Add";
    this.DROP = "Drop";
    this.INSERT = "Insert";
    this.VISIT = "visit";
    this.START_METHOD_NAME = this.START;
    this.END_METHOD_NAME = "end";
    this.GET = "get";
    this.PROCESS = "process";
    this.GET_INSTANCE = "getInstance";
    this.GET_LIST = "getList";
    this.RUN = "run";
    this.START_RUNNABLE = "Start Runnable";
    this.RUNNING = "Running";
    this.END_RUNNABLE = "End Runnable";
    this.DISABLE = "disable";
    this.ENABLE = "enable";
    this.SUCCESS = "Command Success";
    this.FAILURE = "Command Failed";
    this.NOT_IMPLEMENTED = "Not Implemented";
    this.UNKNOWN = "Unknown";
    this.ON_EVENT = "onEvent";
    this.IS_VALID = "isValid";
    this.TOSTRING = "toString";
    this.ADD_LISTENER = "addListener";
    this.REMOVE_LISTENER = "removeListener";
    this.SIZE = "size";
    }

    jinit_CommonStrings_0(): CommonStrings {
        super.jinit_JObject_0();
        this.jfields_CommonStrings();
        return this;
    }
    

    static getInstance(): CommonStrings | null {
        return CommonStrings.instance;
    }
}


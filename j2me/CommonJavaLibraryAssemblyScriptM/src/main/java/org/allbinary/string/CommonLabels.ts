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

@global export class CommonLabels extends JObject {

    jclassName(): string {
        return "org.allbinary.string.CommonLabels";
    }
    @lazy static jv_instance: CommonLabels | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CommonLabels | null {
        if (!CommonLabels.js_instance) {
            CommonLabels.js_instance = true;
            CommonLabels.jv_instance = new CommonLabels().jinit_CommonLabels_0();
        }
        return CommonLabels.jv_instance;
    }
    static set instance(value: CommonLabels | null) {
        CommonLabels.js_instance = true;
        CommonLabels.jv_instance = value;
    }
    WIDTH_LABEL: string | null = null;
    HEIGHT_LABEL: string | null = null;
    END_LABEL: string | null = null;
    TOTAL_LABEL: string | null = null;
    INDEX_LABEL: string | null = null;
    START_LABEL: string | null = null;
    COMMAND_LABEL: string | null = null;
    NAME_LABEL: string | null = null;
    START: string | null = null;
    ELAPSED: string | null = null;
    CURRENT: string | null = null;
    NEXT: string | null = null;
    ITEM_LABEL: string | null = null;
    RESULT_: string | null = null;
    COLON_SEP: string | null = null;

    jfields_CommonLabels(): void {
    this.WIDTH_LABEL = " Width: ";
    this.HEIGHT_LABEL = " Height: ";
    this.END_LABEL = "End: ";
    this.TOTAL_LABEL = "Total: ";
    this.INDEX_LABEL = "index: ";
    this.START_LABEL = "Start: ";
    this.COMMAND_LABEL = "Command: ";
    this.NAME_LABEL = "Name: ";
    this.START = this.START_LABEL;
    this.ELAPSED = " Elapsed: ";
    this.CURRENT = " Current: ";
    this.NEXT = "Next";
    this.ITEM_LABEL = "Item: ";
    this.RESULT_ = "Result: ";
    this.COLON_SEP = ": ";
    }

    jinit_CommonLabels_0(): CommonLabels {
        super.jinit_JObject_0();
        this.jfields_CommonLabels();
        return this;
    }
    

    static getInstance(): CommonLabels | null {
        return CommonLabels.instance;
    }
}


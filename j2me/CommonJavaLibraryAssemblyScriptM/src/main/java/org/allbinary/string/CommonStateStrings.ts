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

@global export class CommonStateStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.string.CommonStateStrings";
    }
    @lazy static jv_instance: CommonStateStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CommonStateStrings | null {
        if (!CommonStateStrings.js_instance) {
            CommonStateStrings.js_instance = true;
            CommonStateStrings.jv_instance = new CommonStateStrings().jinit_CommonStateStrings_0();
        }
        return CommonStateStrings.jv_instance;
    }
    static set instance(value: CommonStateStrings | null) {
        CommonStateStrings.js_instance = true;
        CommonStateStrings.jv_instance = value;
    }
    CONTEXT: string | null = null;
    FINISH: string | null = null;
    CREATE: string | null = null;
    START: string | null = null;
    RESTART: string | null = null;
    RESUME: string | null = null;
    PAUSE: string | null = null;
    STOP: string | null = null;
    DESTROY: string | null = null;
    BIND: string | null = null;
    ON_SAVE_INSTANCE_STATE: string | null = null;
    ON_START_COMMAND: string | null = null;

    jfields_CommonStateStrings(): void {
    this.CONTEXT = "Context: ";
    this.FINISH = "finish";
    this.CREATE = "onCreate";
    this.START = "onStart";
    this.RESTART = "onRestart";
    this.RESUME = "onResume";
    this.PAUSE = "onPause";
    this.STOP = "onStop";
    this.DESTROY = "onDestroy";
    this.BIND = "onBind";
    this.ON_SAVE_INSTANCE_STATE = "onSaveInstanceState";
    this.ON_START_COMMAND = "onStartCommand";
    }

    jinit_CommonStateStrings_0(): CommonStateStrings {
        super.jinit_JObject_0();
        this.jfields_CommonStateStrings();
        return this;
    }
    

    static getInstance(): CommonStateStrings | null {
        return CommonStateStrings.instance;
    }
}


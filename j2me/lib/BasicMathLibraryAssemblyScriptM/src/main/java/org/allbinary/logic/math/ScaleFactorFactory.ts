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
// package org.allbinary.logic.math

@global export class ScaleFactorFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.math.ScaleFactorFactory";
    }
    @lazy static jv_instance: ScaleFactorFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ScaleFactorFactory | null {
        if (!ScaleFactorFactory.js_instance) {
            ScaleFactorFactory.js_instance = true;
            ScaleFactorFactory.jv_instance = new ScaleFactorFactory().jinit_ScaleFactorFactory_0();
        }
        return ScaleFactorFactory.jv_instance;
    }
    static set instance(value: ScaleFactorFactory | null) {
        ScaleFactorFactory.js_instance = true;
        ScaleFactorFactory.jv_instance = value;
    }
    DEFAULT_SCALE_FACTOR: i32 = 0;
    DEFAULT_SCALE_VALUE: i32 = 0;

    jfields_ScaleFactorFactory(): void {
    this.DEFAULT_SCALE_FACTOR = 10;
    this.DEFAULT_SCALE_VALUE = 1024;
    }

    jinit_ScaleFactorFactory_0(): ScaleFactorFactory {
        super.jinit_JObject_0();
        this.jfields_ScaleFactorFactory();
        return this;
    }
    

    static getInstance(): ScaleFactorFactory | null {
        return ScaleFactorFactory.instance;
    }
}


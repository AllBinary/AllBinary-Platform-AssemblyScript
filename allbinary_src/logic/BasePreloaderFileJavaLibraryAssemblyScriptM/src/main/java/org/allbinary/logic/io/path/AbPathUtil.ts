/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.logic.io.path

@global export class AbPathUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.path.AbPathUtil";
    }
    @lazy static jv_instance: AbPathUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AbPathUtil | null {
        if (!AbPathUtil.js_instance) {
            AbPathUtil.js_instance = true;
            AbPathUtil.jv_instance = new AbPathUtil().jinit_AbPathUtil_0();
        }
        return AbPathUtil.jv_instance;
    }
    static set instance(value: AbPathUtil | null) {
        AbPathUtil.js_instance = true;
        AbPathUtil.jv_instance = value;
    }
    NO_ABPATH: AbPath | null = null;

    jfields_AbPathUtil(): void {
    this.NO_ABPATH = AbPath.createAbPath();
    }

    jinit_AbPathUtil_0(): AbPathUtil {
        super.jinit_JObject_0();
        this.jfields_AbPathUtil();
        return this;
    }
    

    static getInstance(): AbPathUtil | null {
        return AbPathUtil.instance;
    }
}


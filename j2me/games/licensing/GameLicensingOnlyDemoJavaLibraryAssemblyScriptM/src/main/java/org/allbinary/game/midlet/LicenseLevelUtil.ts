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
// package org.allbinary.game.midlet

@global export class LicenseLevelUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.midlet.LicenseLevelUtil";
    }
    @lazy static jv_instance: LicenseLevelUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LicenseLevelUtil | null {
        if (!LicenseLevelUtil.js_instance) {
            LicenseLevelUtil.js_instance = true;
            LicenseLevelUtil.jv_instance = new LicenseLevelUtil().jinit_LicenseLevelUtil_0();
        }
        return LicenseLevelUtil.jv_instance;
    }
    static set instance(value: LicenseLevelUtil | null) {
        LicenseLevelUtil.js_instance = true;
        LicenseLevelUtil.jv_instance = value;
    }

    jinit_LicenseLevelUtil_0(): LicenseLevelUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): LicenseLevelUtil | null {
        return LicenseLevelUtil.instance;
    }
    

    getMaxLevel(maxLevel: i32, demoLevel: i32): i32 {
        return demoLevel;
    }
}


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
// package org.allbinary.graphics.color
// import javax.microedition.lcdui.Graphics

@global export class BasicColorSetUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.color.BasicColorSetUtil";
    }
    @lazy static jv_instance: BasicColorSetUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BasicColorSetUtil | null {
        if (!BasicColorSetUtil.js_instance) {
            BasicColorSetUtil.js_instance = true;
            BasicColorSetUtil.jv_instance = new BasicColorSetUtil().jinit_BasicColorSetUtil_0();
        }
        return BasicColorSetUtil.jv_instance;
    }
    static set instance(value: BasicColorSetUtil | null) {
        BasicColorSetUtil.js_instance = true;
        BasicColorSetUtil.jv_instance = value;
    }
    

    static getInstance(): BasicColorSetUtil | null {
        return BasicColorSetUtil.instance;
    }
    

    jinit_BasicColorSetUtil_0(): BasicColorSetUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    setBasicColorP(graphics: Graphics | null, basicColor: BasicColor | null): void {
        graphics!.setColor(basicColor!.intValue()); if (JThrowable.pending !== null) return;
    }
    

    setBasicColorP3(graphics: Graphics | null, basicColor: BasicColor | null, value: i32): void {
        graphics!.setColor(value); if (JThrowable.pending !== null) return;
    }
}


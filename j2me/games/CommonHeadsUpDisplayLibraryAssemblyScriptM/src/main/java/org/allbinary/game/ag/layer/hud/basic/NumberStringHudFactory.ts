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
// package org.allbinary.game.ag.layer.hud.basic
// import org.allbinary.game.graphics.hud.BasicHudFactory
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings

@global export class NumberStringHudFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.hud.basic.NumberStringHudFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!NumberStringHudFactory.js_instance) {
            NumberStringHudFactory.js_instance = true;
            NumberStringHudFactory.jv_instance = NullUtil.getInstance();
        }
        return NumberStringHudFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        NumberStringHudFactory.js_instance = true;
        NumberStringHudFactory.jv_instance = value;
    }
    NULL_NUMBER_STRING_HUD: NumberStringHud | null = null;

    jfields_NumberStringHudFactory(): void {
    this.NULL_NUMBER_STRING_HUD = this.createHud();
    }

    jinit_NumberStringHudFactory_0(): NumberStringHudFactory {
        super.jinit_JObject_0();
        this.jfields_NumberStringHudFactory();
        return this;
    }
    

    static getInstance(): NumberStringHudFactory | null {
        if (NumberStringHudFactory.instance == changetype<Object | null>(NullUtil.getInstance())) {
            NumberStringHudFactory.instance = new NumberStringHudFactory().jinit_NumberStringHudFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<NumberStringHudFactory | null>(NumberStringHudFactory.instance);
    }
    

    createHud(): NumberStringHud | null {
        do {
            return new NumberStringHud().jinit_NumberStringHud_6(StringUtil.getInstance()!.EMPTY_STRING, 9, BasicHudFactory.getInstance()!.ABSOLUTE, 1, 0, BasicColorFactory.getInstance()!.NULL_COLOR);
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return null;
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
            logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e); if (JThrowable.pending !== null) return null;
            { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}


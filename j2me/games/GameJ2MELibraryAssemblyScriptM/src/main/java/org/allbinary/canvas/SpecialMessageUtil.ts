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
// package org.allbinary.canvas
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.graphics.opengles.OpenGLFeatureFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonSeps
// import org.allbinary.system.Memory

@global export class SpecialMessageUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.canvas.SpecialMessageUtil";
    }
    @lazy static jv_SINGLETON: SpecialMessageUtil | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): SpecialMessageUtil | null {
        if (!SpecialMessageUtil.js_SINGLETON) {
            SpecialMessageUtil.js_SINGLETON = true;
            SpecialMessageUtil.jv_SINGLETON = new SpecialMessageUtil().jinit_SpecialMessageUtil_0();
        }
        return SpecialMessageUtil.jv_SINGLETON;
    }
    static set SINGLETON(value: SpecialMessageUtil | null) {
        SpecialMessageUtil.js_SINGLETON = true;
        SpecialMessageUtil.jv_SINGLETON = value;
    }

    jinit_SpecialMessageUtil_0(): SpecialMessageUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): SpecialMessageUtil | null {
        return SpecialMessageUtil.SINGLETON;
    }
    

    get(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(Memory.getInfo()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(JObject.jtoString(GameStatisticsFactory.getInstance())); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Option: "); if (JThrowable.pending !== null) return null;
        if (Features.getInstance()!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL_AUTO_SELECT)) {
            stringBuffer!.append(OpenGLFeatureFactory.getInstance()!.OPENGL_AUTO_SELECT!.getName()); if (JThrowable.pending !== null) return null;
        } else {
            stringBuffer!.append(OpenGLFeatureFactory.getInstance()!.OPENGL_MINIMUM!.getName()); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}


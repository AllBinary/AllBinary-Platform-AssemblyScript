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
// import javax.microedition.lcdui.Canvas
// import javax.microedition.lcdui.CommandListener
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.MainFeatureFactory

@global export class FullScreenUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.canvas.FullScreenUtil";
    }
    @lazy static jv_instance: FullScreenUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FullScreenUtil | null {
        if (!FullScreenUtil.js_instance) {
            FullScreenUtil.js_instance = true;
            FullScreenUtil.jv_instance = new FullScreenUtil().jinit_FullScreenUtil_0();
        }
        return FullScreenUtil.jv_instance;
    }
    static set instance(value: FullScreenUtil | null) {
        FullScreenUtil.js_instance = true;
        FullScreenUtil.jv_instance = value;
    }

    jinit_FullScreenUtil_0(): FullScreenUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): FullScreenUtil | null {
        return FullScreenUtil.instance;
    }
    

    initOnRun(fullScreenInterface: Canvas | null, commandListener: CommandListener | null): void {
        if (commandListener != null) {
            this.init(fullScreenInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    init(fullScreenInterface: Canvas | null): void {
    }
    

    isScreenChange(isFullScreen: bool): bool {
        let mainFeatureFactory: MainFeatureFactory | null = MainFeatureFactory.getInstance(); if (JThrowable.pending !== null) return false;
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return false;
        if (features!.isFeature(mainFeatureFactory!.FULL_SCREEN) != isFullScreen) {
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    isScreenChangeCanvas(fullScreenInterface: Canvas | null): bool {
        return this.isScreenChange(false);
    }
}


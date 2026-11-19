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
// package org.allbinary.game.displayable.canvas
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.graphics.PointFactory
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.RectangleFactory
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.opengles.OpenGLFeatureFactory
// import org.allbinary.graphics.threed.SWTJOGLProcessor
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class MyFormUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.MyFormUtil";
    }
    @lazy static jv_instance: MyFormUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): MyFormUtil | null {
        if (!MyFormUtil.js_instance) {
            MyFormUtil.js_instance = true;
            MyFormUtil.jv_instance = new MyFormUtil().jinit_MyFormUtil_0();
        }
        return MyFormUtil.jv_instance;
    }
    static set instance(value: MyFormUtil | null) {
        MyFormUtil.js_instance = true;
        MyFormUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    popupMenuRectangle: Rectangle | null = null;

    jfields_MyFormUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.popupMenuRectangle = RectangleFactory.SINGLETON;
    }

    jinit_MyFormUtil_0(): MyFormUtil {
        super.jinit_JObject_0();
        this.jfields_MyFormUtil();
        return this;
    }
    

    static getInstance(): MyFormUtil | null {
        return MyFormUtil.instance;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        let displayInfo: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return;
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        let isOpenGL: bool = features!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL); if (JThrowable.pending !== null) return;
        let TOTAL_CHAR_WIDTH: i32 = (SWTJOGLProcessor.getInstance()!.isJOGL() && isOpenGL ? 2 : 3); if (JThrowable.pending !== null) return;
        let width: i32 = MyFontProcessor.defaultStringWidth(font, TOTAL_CHAR_WIDTH); if (JThrowable.pending !== null) return;
        let pointFactory: PointFactory | null = PointFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (displayInfo!.getLastHeight() < 320) {
            this.popupMenuRectangle = new Rectangle().jinit_Rectangle_3(pointFactory!.createXY(0, 25), width, (font!.getHeight() * 4) + 2); if (JThrowable.pending !== null) return;
        } else {
            this.popupMenuRectangle = new Rectangle().jinit_Rectangle_3(pointFactory!.createXY(0, displayInfo!.getLastHalfHeight() - 70), width, (font!.getHeight() * 5)); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getPopupMenuRectangle(): Rectangle | null {
        return this.popupMenuRectangle;
    }
}


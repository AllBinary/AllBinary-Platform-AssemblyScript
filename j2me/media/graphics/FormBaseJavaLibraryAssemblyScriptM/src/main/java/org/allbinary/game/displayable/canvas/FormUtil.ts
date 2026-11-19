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
// import org.allbinary.graphics.PointFactory
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.logic.communication.log.LogUtil

@global export class FormUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.FormUtil";
    }
    @lazy static jv_instance: FormUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FormUtil | null {
        if (!FormUtil.js_instance) {
            FormUtil.js_instance = true;
            FormUtil.jv_instance = new FormUtil().jinit_FormUtil_0();
        }
        return FormUtil.jv_instance;
    }
    static set instance(value: FormUtil | null) {
        FormUtil.js_instance = true;
        FormUtil.jv_instance = value;
    }

    jinit_FormUtil_0(): FormUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): FormUtil | null {
        return FormUtil.instance;
    }
    

    createFormRectangle(): Rectangle | null {
        let displayInfo: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return null;
        let pointFactory: PointFactory | null = PointFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let rectangle: Rectangle | null = new Rectangle().jinit_Rectangle_3(pointFactory!.createXY(30, 10), displayInfo!.getLastWidth() - 30, displayInfo!.getLastHeight() - 35); if (JThrowable.pending !== null) return null;
        return rectangle;
    }
}


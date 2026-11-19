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
// package org.allbinary.graphics.canvas.transition.progress
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.paint.NullPaintable
// import org.allbinary.graphics.paint.PaintableInterface
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.string.StringUtil

@global export class ProgressCanvasFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory";
    }
    @lazy static jv_PROGRESS_FORM_SCREEN: Object | null = null;
    @lazy static js_PROGRESS_FORM_SCREEN: bool = false;
    static get PROGRESS_FORM_SCREEN(): Object | null {
        if (!ProgressCanvasFactory.js_PROGRESS_FORM_SCREEN) {
            ProgressCanvasFactory.js_PROGRESS_FORM_SCREEN = true;
            ProgressCanvasFactory.jv_PROGRESS_FORM_SCREEN = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return ProgressCanvasFactory.jv_PROGRESS_FORM_SCREEN;
    }
    static set PROGRESS_FORM_SCREEN(value: Object | null) {
        ProgressCanvasFactory.js_PROGRESS_FORM_SCREEN = true;
        ProgressCanvasFactory.jv_PROGRESS_FORM_SCREEN = value;
    }

    jinit_ProgressCanvasFactory_0(): ProgressCanvasFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ProgressCanvas | null {
        if (ProgressCanvasFactory.PROGRESS_FORM_SCREEN == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            ProgressCanvasFactory.PROGRESS_FORM_SCREEN = new ProgressCanvas().jinit_ProgressCanvas_3(StringUtil.getInstance()!.EMPTY_STRING, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<ProgressCanvas | null>(ProgressCanvasFactory.PROGRESS_FORM_SCREEN);
    }
    

    static getLazyInstance(): PaintableInterface | null {
        return NullPaintable.getInstance();
    }
}


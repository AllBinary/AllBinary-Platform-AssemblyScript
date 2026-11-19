/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.game.canvas
// import javax.microedition.lcdui.Canvas
// import javax.microedition.lcdui.NullCanvas
// import org.allbinary.game.layer.AllBinaryGameLayerManager

@global export class ABToGBUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.canvas.ABToGBUtil";
    }
    @lazy static jv_instance: ABToGBUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ABToGBUtil | null {
        if (!ABToGBUtil.js_instance) {
            ABToGBUtil.js_instance = true;
            ABToGBUtil.jv_instance = new ABToGBUtil().jinit_ABToGBUtil_0();
        }
        return ABToGBUtil.jv_instance;
    }
    static set instance(value: ABToGBUtil | null) {
        ABToGBUtil.js_instance = true;
        ABToGBUtil.jv_instance = value;
    }
    abCanvas: Canvas | null = null;
    allBinaryGameLayerManager: AllBinaryGameLayerManager | null = null;

    jfields_ABToGBUtil(): void {
    this.abCanvas = NullCanvas.NULL_CANVAS;
    this.allBinaryGameLayerManager = AllBinaryGameLayerManager.getNullInstance();
    }

    jinit_ABToGBUtil_0(): ABToGBUtil {
        super.jinit_JObject_0();
        this.jfields_ABToGBUtil();
        return this;
    }
    

    static getInstance(): ABToGBUtil | null {
        return ABToGBUtil.instance;
    }
}


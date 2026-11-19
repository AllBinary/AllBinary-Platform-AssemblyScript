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
// package org.allbinary.graphics.displayable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListUtil

@global export class CanvasStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.displayable.CanvasStrings";
    }
    @lazy static jv_instance: CanvasStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CanvasStrings | null {
        if (!CanvasStrings.js_instance) {
            CanvasStrings.js_instance = true;
            CanvasStrings.jv_instance = new CanvasStrings().jinit_CanvasStrings_0();
        }
        return CanvasStrings.jv_instance;
    }
    static set instance(value: CanvasStrings | null) {
        CanvasStrings.js_instance = true;
        CanvasStrings.jv_instance = value;
    }
    CONSTRUCTOR: string | null = null;
    PAUSE: string | null = null;
    UN_PAUSE: string | null = null;
    SET_FULL_SCREEN_MODE: string | null = null;
    SIZE_CHANGED: string | null = null;
    SCALED_IMAGES: string | null = null;
    PAINT: string | null = null;
    ON_DISPLAY_CHANGE_EVENT: string | null = null;
    UPDATE_MEASUREMENT: string | null = null;
    FD_WIDTH: string | null = null;
    FD_HEIGHT: string | null = null;
    EMPTY_CHILD_NAME_LIST: BasicArrayList | null = null;
    ABOUT: string | null = null;
    OPTIONS: string | null = null;
    FONT_ATLAS: string | null = null;
    OBJ_MODEL: string | null = null;
    MD2_MODEL: string | null = null;
    _PNG: string | null = null;

    jfields_CanvasStrings(): void {
    this.CONSTRUCTOR = "MyCanvas::MyCanvas";
    this.PAUSE = "MyCanvas::pause";
    this.UN_PAUSE = "MyCanvas::unPause";
    this.SET_FULL_SCREEN_MODE = "setFullScreenMode";
    this.SIZE_CHANGED = "sizeChanged";
    this.SCALED_IMAGES = "scaledImages";
    this.PAINT = "paint";
    this.ON_DISPLAY_CHANGE_EVENT = "onDisplayChangeEvent";
    this.UPDATE_MEASUREMENT = "updateMeasurement";
    this.FD_WIDTH = " font/display width: ";
    this.FD_HEIGHT = " font/display height: ";
    this.EMPTY_CHILD_NAME_LIST = BasicArrayListUtil.getInstance()!.getImmutableInstance();
    this.ABOUT = "About";
    this.OPTIONS = "Options";
    this.FONT_ATLAS = "/font.png";
    this.OBJ_MODEL = "_obj";
    this.MD2_MODEL = "_md2";
    this._PNG = ".png";
    }

    jinit_CanvasStrings_0(): CanvasStrings {
        super.jinit_JObject_0();
        this.jfields_CanvasStrings();
        return this;
    }
    

    static getInstance(): CanvasStrings | null {
        return CanvasStrings.instance;
    }
}


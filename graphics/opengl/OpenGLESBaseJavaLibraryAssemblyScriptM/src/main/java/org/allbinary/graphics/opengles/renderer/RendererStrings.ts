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
// package org.allbinary.graphics.opengles.renderer

@global export class RendererStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.renderer.RendererStrings";
    }
    @lazy static jv_instance: RendererStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): RendererStrings | null {
        if (!RendererStrings.js_instance) {
            RendererStrings.js_instance = true;
            RendererStrings.jv_instance = new RendererStrings().jinit_RendererStrings_0();
        }
        return RendererStrings.jv_instance;
    }
    static set instance(value: RendererStrings | null) {
        RendererStrings.js_instance = true;
        RendererStrings.jv_instance = value;
    }
    ON_SURFACE_CREATED: string | null = null;
    ON_SURFACE_CHANGED: string | null = null;
    ON_DRAW_FRAME: string | null = null;
    ON_DRAW_FRAME_THREED: string | null = null;
    ON_DRAW_FRAME_2D: string | null = null;

    jfields_RendererStrings(): void {
    this.ON_SURFACE_CREATED = "onSurfaceCreated";
    this.ON_SURFACE_CHANGED = "onSurfaceChanged";
    this.ON_DRAW_FRAME = "onDrawFrame";
    this.ON_DRAW_FRAME_THREED = "onDrawFrameThreed";
    this.ON_DRAW_FRAME_2D = "onDrawFrame2d";
    }

    jinit_RendererStrings_0(): RendererStrings {
        super.jinit_JObject_0();
        this.jfields_RendererStrings();
        return this;
    }
    

    static getInstance(): RendererStrings | null {
        return RendererStrings.instance;
    }
}


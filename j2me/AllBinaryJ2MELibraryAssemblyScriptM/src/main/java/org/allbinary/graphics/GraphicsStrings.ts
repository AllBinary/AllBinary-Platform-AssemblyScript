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
// package org.allbinary.graphics

@global export class GraphicsStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.GraphicsStrings";
    }
    @lazy static jv_instance: GraphicsStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GraphicsStrings | null {
        if (!GraphicsStrings.js_instance) {
            GraphicsStrings.js_instance = true;
            GraphicsStrings.jv_instance = new GraphicsStrings().jinit_GraphicsStrings_0();
        }
        return GraphicsStrings.jv_instance;
    }
    static set instance(value: GraphicsStrings | null) {
        GraphicsStrings.js_instance = true;
        GraphicsStrings.jv_instance = value;
    }
    ANIMATION: string | null = null;
    ANGLE: string | null = null;
    MOVEMENT_ANGLE: string | null = null;
    ROTATION: string | null = null;
    OPACITY: string | null = null;
    HTML: string | null = null;
    WIDTH: string | null = null;
    HEIGHT: string | null = null;

    jfields_GraphicsStrings(): void {
    this.ANIMATION = "animation";
    this.ANGLE = "angle";
    this.MOVEMENT_ANGLE = "movement_angle";
    this.ROTATION = "rotation";
    this.OPACITY = "opacity";
    this.HTML = "HTML";
    this.WIDTH = "width";
    this.HEIGHT = "height";
    }

    jinit_GraphicsStrings_0(): GraphicsStrings {
        super.jinit_JObject_0();
        this.jfields_GraphicsStrings();
        return this;
    }
    

    static getInstance(): GraphicsStrings | null {
        return GraphicsStrings.instance;
    }
}


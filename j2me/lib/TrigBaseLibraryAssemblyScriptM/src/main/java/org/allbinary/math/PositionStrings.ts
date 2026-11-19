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
// package org.allbinary.math
// import jsinterop.annotations.JsType
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsProperty

@global export class PositionStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.math.PositionStrings";
    }
    @lazy static jv_instance: PositionStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PositionStrings | null {
        if (!PositionStrings.js_instance) {
            PositionStrings.js_instance = true;
            PositionStrings.jv_instance = new PositionStrings().jinit_PositionStrings_0();
        }
        return PositionStrings.jv_instance;
    }
    static set instance(value: PositionStrings | null) {
        PositionStrings.js_instance = true;
        PositionStrings.jv_instance = value;
    }
    X: string | null = null;
    Y: string | null = null;
    X_LABEL: string | null = null;
    Y_LABEL: string | null = null;
    Z_LABEL: string | null = null;
    DX_LABEL: string | null = null;
    DY_LABEL: string | null = null;
    DZ_LABEL: string | null = null;

    jfields_PositionStrings(): void {
    this.X = "x";
    this.Y = "y";
    this.X_LABEL = "x: ";
    this.Y_LABEL = "y: ";
    this.Z_LABEL = "z: ";
    this.DX_LABEL = "dx: ";
    this.DY_LABEL = "dy: ";
    this.DZ_LABEL = "dz: ";
    }

    jinit_PositionStrings_0(): PositionStrings {
        super.jinit_JObject_0();
        this.jfields_PositionStrings();
        return this;
    }
    

    static getInstance(): PositionStrings | null {
        return PositionStrings.instance;
    }
}


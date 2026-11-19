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
// package org.allbinary.graphics
// import jsinterop.annotations.JsType
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor
// import jsinterop.annotations.JsProperty

@global export class PointFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.PointFactory";
    }
    @lazy static jv_instance: PointFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PointFactory | null {
        if (!PointFactory.js_instance) {
            PointFactory.js_instance = true;
            PointFactory.jv_instance = new PointFactory().jinit_PointFactory_0();
        }
        return PointFactory.jv_instance;
    }
    static set instance(value: PointFactory | null) {
        PointFactory.js_instance = true;
        PointFactory.jv_instance = value;
    }
    ZERO_ZERO: GPoint | null = null;

    jfields_PointFactory(): void {
    this.ZERO_ZERO = this.createXYZ(0, 0, 0);
    }
    

    static getInstance(): PointFactory | null {
        return PointFactory.instance;
    }
    

    init(): void {
    }
    

    jinit_PointFactory_0(): PointFactory {
        super.jinit_JObject_0();
        this.jfields_PointFactory();
        return this;
    }
    

    createXY(x: i32, y: i32): GPoint | null {
        return new GPoint().jinit_GPoint_3(x, y, 0);
    }
    

    createXYZ(x: i32, y: i32, z: i32): GPoint | null {
        return new GPoint().jinit_GPoint_3(x, y, z);
    }
}


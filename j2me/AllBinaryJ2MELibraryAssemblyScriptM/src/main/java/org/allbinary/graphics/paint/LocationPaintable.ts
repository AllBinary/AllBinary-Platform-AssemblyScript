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
// package org.allbinary.graphics.paint
// import javax.microedition.lcdui.Graphics

@global export class LocationPaintable extends JObject implements LocationPaintableInterface {

    jclassName(): string {
        return "org.allbinary.graphics.paint.LocationPaintable";
    }
    @lazy static jv_instance: LocationPaintable | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LocationPaintable | null {
        if (!LocationPaintable.js_instance) {
            LocationPaintable.js_instance = true;
            LocationPaintable.jv_instance = new LocationPaintable().jinit_LocationPaintable_0();
        }
        return LocationPaintable.jv_instance;
    }
    static set instance(value: LocationPaintable | null) {
        LocationPaintable.js_instance = true;
        LocationPaintable.jv_instance = value;
    }

    jinit_LocationPaintable_0(): LocationPaintable {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): LocationPaintable | null {
        return LocationPaintable.instance;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
    }
}


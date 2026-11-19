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

@global export class RectangleFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.RectangleFactory";
    }
    @lazy static jv_SINGLETON: Rectangle | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): Rectangle | null {
        if (!RectangleFactory.js_SINGLETON) {
            RectangleFactory.js_SINGLETON = true;
            RectangleFactory.jv_SINGLETON = new Rectangle().jinit_Rectangle_3(PointFactory.getInstance()!.ZERO_ZERO, 0, 0);
        }
        return RectangleFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: Rectangle | null) {
        RectangleFactory.js_SINGLETON = true;
        RectangleFactory.jv_SINGLETON = value;
    }
    @lazy static jv_ARRAY_OF_ARRAYS: StaticArray<StaticArray<Rectangle | null> | null> | null = null;
    @lazy static js_ARRAY_OF_ARRAYS: bool = false;
    static get ARRAY_OF_ARRAYS(): StaticArray<StaticArray<Rectangle | null> | null> | null {
        if (!RectangleFactory.js_ARRAY_OF_ARRAYS) {
            RectangleFactory.js_ARRAY_OF_ARRAYS = true;
            RectangleFactory.jv_ARRAY_OF_ARRAYS = JArrays.new2<Rectangle | null>(0, 0);
        }
        return RectangleFactory.jv_ARRAY_OF_ARRAYS;
    }
    static set ARRAY_OF_ARRAYS(value: StaticArray<StaticArray<Rectangle | null> | null> | null) {
        RectangleFactory.js_ARRAY_OF_ARRAYS = true;
        RectangleFactory.jv_ARRAY_OF_ARRAYS = value;
    }

    jinit_RectangleFactory_0(): RectangleFactory {
        super.jinit_JObject_0();
        return this;
    }
}


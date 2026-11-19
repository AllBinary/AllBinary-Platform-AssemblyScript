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
// import jsinterop.annotations.JsConstructor

@global export class RectangleCollisionUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.math.RectangleCollisionUtil";
    }
    @lazy static jv_instance: RectangleCollisionUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): RectangleCollisionUtil | null {
        if (!RectangleCollisionUtil.js_instance) {
            RectangleCollisionUtil.js_instance = true;
            RectangleCollisionUtil.jv_instance = new RectangleCollisionUtil().jinit_RectangleCollisionUtil_0();
        }
        return RectangleCollisionUtil.jv_instance;
    }
    static set instance(value: RectangleCollisionUtil | null) {
        RectangleCollisionUtil.js_instance = true;
        RectangleCollisionUtil.jv_instance = value;
    }
    

    static getInstance(): RectangleCollisionUtil | null {
        return RectangleCollisionUtil.instance;
    }
    

    jinit_RectangleCollisionUtil_0(): RectangleCollisionUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    isCollision(rectX1: i32, rectY1: i32, rectX2: i32, rectY2: i32, rect2X1: i32, rect2Y1: i32, rect2X2: i32, rect2Y2: i32): bool {
        if (rect2X1 >= rectX2 || rect2Y1 >= rectY2 || rect2X2 <= rectX1 || rect2Y2 <= rectY1) {
            return false;
        } else {
            return true;
        }
        return false;
    }
    

    isInside(rectX1: i32, rectY1: i32, rectX2: i32, rectY2: i32, x: i32, y: i32): bool {
        if (x >= rectX2 || y >= rectY2 || x <= rectX1 || y <= rectY1) {
            return false;
        } else {
            return true;
        }
        return false;
    }
}


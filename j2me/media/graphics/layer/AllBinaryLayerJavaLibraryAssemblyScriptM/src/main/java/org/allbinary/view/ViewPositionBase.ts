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
// package org.allbinary.view
// import org.allbinary.graphics.GPoint

@global export class ViewPositionBase extends GPoint {

    jclassName(): string {
        return "org.allbinary.view.ViewPositionBase";
    }
    @lazy static jv_NULL_VIEW_POSITION: ViewPositionBase | null = null;
    @lazy static js_NULL_VIEW_POSITION: bool = false;
    static get NULL_VIEW_POSITION(): ViewPositionBase | null {
        if (!ViewPositionBase.js_NULL_VIEW_POSITION) {
            ViewPositionBase.js_NULL_VIEW_POSITION = true;
            ViewPositionBase.jv_NULL_VIEW_POSITION = new ViewPositionBase().jinit_ViewPositionBase_3(0, 0, 0);
        }
        return ViewPositionBase.jv_NULL_VIEW_POSITION;
    }
    static set NULL_VIEW_POSITION(value: ViewPositionBase | null) {
        ViewPositionBase.js_NULL_VIEW_POSITION = true;
        ViewPositionBase.jv_NULL_VIEW_POSITION = value;
    }
    

    jinit_ViewPositionBase_3(x: i32, y: i32, z: i32): ViewPositionBase {
        super.jinit_GPoint_3(x, y, z);
        return this;
    }
    

    getX2(): i32 {
        return this.getX();
    }
    

    getY2(): i32 {
        return this.getY();
    }
    

    getZ2(): i32 {
        return this.getZ();
    }
    

    setAllbinaryLayer(allbinaryLayer: Object | null): void {
    }
}


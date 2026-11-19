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
// package org.allbinary.graphics.displayable

@global export class BaseScalable extends JObject implements ScalableListener {

    jclassName(): string {
        return "org.allbinary.graphics.displayable.BaseScalable";
    }

    jinit_BaseScalable_0(): BaseScalable {
        super.jinit_JObject_0();
        return this;
    }
    

    getRatio(ratio: f32): f32 {
        return (<f32>1.0);
    }
    

    getLeft(xOffset: i32): i32 {
        return -1;
    }
    

    getTop(yOffset: i32): i32 {
        return -1;
    }
    

    scale(ratio: f32): void {
    }
}


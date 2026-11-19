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

@global export class StaticViewPosition extends ViewPosition {

    jclassName(): string {
        return "org.allbinary.view.StaticViewPosition";
    }
    

    jinit_StaticViewPosition_3(x: i32, y: i32, z: i32): StaticViewPosition {
        super.jinit_ViewPosition_3(x, y, z);
        return this;
    }
    

    getX(): i32 {
        return this.getRawX();
    }
    

    getY(): i32 {
        return this.getRawY();
    }
    

    getZ(): i32 {
        return this.getRawZ();
    }
}


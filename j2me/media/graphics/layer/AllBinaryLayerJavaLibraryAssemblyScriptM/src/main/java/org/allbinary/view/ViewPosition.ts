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
// package org.allbinary.view
// import org.allbinary.layer.AllBinaryLayer

@global export class ViewPosition extends ViewPositionBase {

    jclassName(): string {
        return "org.allbinary.view.ViewPosition";
    }
    allbinaryLayer: AllBinaryLayer | null = null;

    jfields_ViewPosition(): void {
    this.allbinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;
    }
    

    static getInstanceD(): ViewPosition | null {
        return new ViewPosition().jinit_ViewPosition_3(0, 0, 0);
    }
    

    jinit_ViewPosition_3(x: i32, y: i32, z: i32): ViewPosition {
        super.jinit_ViewPositionBase_3(x, y, z);
        this.jfields_ViewPosition();
        return this;
    }
    

    getX(): i32 {
        return this.allbinaryLayer!.getXP();
    }
    

    getY(): i32 {
        return this.allbinaryLayer!.getYP();
    }
    

    getZ(): i32 {
        return this.allbinaryLayer!.getZP();
    }
    

    getX2(): i32 {
        return this.getX() + this.allbinaryLayer!.getWidth();
    }
    

    getY2(): i32 {
        return this.getY() + this.allbinaryLayer!.getHeight();
    }
    

    getZ2(): i32 {
        return (<i32>(((<i64>(this.getZ())) + this.allbinaryLayer!.getDepth())));
    }
    

    setAllbinaryLayer(allbinaryLayer: Object | null): void {
        this.allbinaryLayer = changetype<AllBinaryLayer | null>(allbinaryLayer);
    }
}


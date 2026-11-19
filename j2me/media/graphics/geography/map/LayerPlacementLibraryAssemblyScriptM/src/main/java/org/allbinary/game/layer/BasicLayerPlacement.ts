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
// package org.allbinary.game.layer

@global export class BasicLayerPlacement extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.BasicLayerPlacement";
    }
    layerType: LayerPlacementType | null = null;
    width: i32 = 0;
    height: i32 = 0;

    jfields_BasicLayerPlacement(): void {
    
    
    
    }
    

    jinit_BasicLayerPlacement_3(layerType: LayerPlacementType | null, width: i32, height: i32): BasicLayerPlacement {
        super.jinit_JObject_0();
        this.jfields_BasicLayerPlacement();
        this.layerType = layerType;
        this.width = width;
        this.height = height;
        return this;
    }
    

    getWidth(): i32 {
        return this.width;
    }
    

    getHeight(): i32 {
        return this.height;
    }
    

    getLayerType(): LayerPlacementType | null {
        return this.layerType;
    }
    

    setLayerType(layerType: LayerPlacementType | null): void {
        this.layerType = layerType;
    }
}


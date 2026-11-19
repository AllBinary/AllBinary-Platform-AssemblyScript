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

@global export class LayerPlacementType extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.LayerPlacementType";
    }
    type: i32 = 0;

    jfields_LayerPlacementType(): void {
    
    }
    

    jinit_LayerPlacementType_1(type: i32): LayerPlacementType {
        super.jinit_JObject_0();
        this.jfields_LayerPlacementType();
        this.type = type;
        return this;
    }
    

    getType(): i32 {
        return this.type;
    }
    

    setType(type: i32): void {
        this.type = type;
    }
}


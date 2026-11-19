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
// package org.allbinary.game.layer.pickup

@global export class PickedUpLayerType extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.pickup.PickedUpLayerType";
    }
    name: string | null = null;

    jfields_PickedUpLayerType(): void {
    
    }
    

    jinit_PickedUpLayerType_1(name: string | null): PickedUpLayerType {
        super.jinit_JObject_0();
        this.jfields_PickedUpLayerType();
        this.name = name;
        return this;
    }
    

    toString(): string | null {
        return this.name;
    }
}


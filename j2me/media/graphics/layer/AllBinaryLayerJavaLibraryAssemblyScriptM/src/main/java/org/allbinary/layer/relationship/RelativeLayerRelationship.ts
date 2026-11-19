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
// package org.allbinary.layer.relationship
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.RelativeRelationship
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.util.BasicArrayList

@global export class RelativeLayerRelationship extends RelativeRelationship {

    jclassName(): string {
        return "org.allbinary.layer.relationship.RelativeLayerRelationship";
    }
    layer: AllBinaryLayer | null = null;

    jfields_RelativeLayerRelationship(): void {
    this.layer = AllBinaryLayer.NULL_ALLBINARY_LAYER;
    }
    

    jinit_RelativeLayerRelationship_3(layer: AllBinaryLayer | null, point: GPoint | null, typesAllowedList: BasicArrayList | null): RelativeLayerRelationship {
        super.jinit_RelativeRelationship_2(point, typesAllowedList);
        this.jfields_RelativeLayerRelationship();
        this.layer = layer;
        return this;
    }
    

    getX(): i32 {
        return this.layer!.getXP() + super.getX();
    }
    

    getY(): i32 {
        return this.layer!.getYP() + super.getY();
    }
    

    getZ(): i32 {
        return this.layer!.getZP() + super.getZ();
    }
}


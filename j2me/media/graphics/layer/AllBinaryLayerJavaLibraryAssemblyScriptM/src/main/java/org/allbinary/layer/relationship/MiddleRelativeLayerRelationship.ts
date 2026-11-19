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
// import org.allbinary.graphics.PointFactory
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.util.BasicArrayListUtil

@global export class MiddleRelativeLayerRelationship extends RelativeLayerRelationship {

    jclassName(): string {
        return "org.allbinary.layer.relationship.MiddleRelativeLayerRelationship";
    }
    

    jinit_MiddleRelativeLayerRelationship_1(layer: AllBinaryLayer | null): MiddleRelativeLayerRelationship {
        super.jinit_RelativeLayerRelationship_3(layer, PointFactory.getInstance()!.createXY(layer!.getHalfWidth(), layer!.getHalfHeight()), BasicArrayListUtil.getInstance()!.getImmutableInstance());
        return this;
    }
}


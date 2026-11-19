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
// package org.allbinary.game.collision
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.GameFeatureFactory
// import org.allbinary.layer.AllBinaryLayer

@global export class CollidableHelperFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.collision.CollidableHelperFactory";
    }

    jinit_CollidableHelperFactory_0(): CollidableHelperFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): CollisionHelper | null {
        if (Features.getInstance()!.isFeature(GameFeatureFactory.getInstance()!.COLLISIONS_WITH_SOURCE)) {
            return new CollisionHelper().jinit_CollisionHelper_1(AllBinaryLayer.NULL_ALLBINARY_LAYER);
        } else {
            return new SourceCollisionHelper().jinit_SourceCollisionHelper_1(AllBinaryLayer.NULL_ALLBINARY_LAYER);
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}


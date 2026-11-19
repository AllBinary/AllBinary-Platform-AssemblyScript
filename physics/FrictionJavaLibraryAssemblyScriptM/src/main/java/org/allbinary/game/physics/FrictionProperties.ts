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
// package org.allbinary.game.physics
// import org.allbinary.game.physics.friction.FrictionData
// import org.allbinary.game.physics.velocity.DragVelocityBehavior
// import org.allbinary.game.physics.velocity.VelocityProperties

@global export class FrictionProperties extends JObject {

    jclassName(): string {
        return "org.allbinary.game.physics.FrictionProperties";
    }
    

    jinit_FrictionProperties_0(): FrictionProperties {
        super.jinit_JObject_0();
        return this;
    }
    

    friction(velocityProperties: VelocityProperties | null, nominator: i32): void {
        DragVelocityBehavior.instance!.reduce(velocityProperties, nominator, FrictionData.getFrictionDenominator()); if (JThrowable.pending !== null) return;
    }
}


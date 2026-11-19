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
// package org.allbinary.game.physics.friction

@global export class FrictionData extends JObject {

    jclassName(): string {
        return "org.allbinary.game.physics.friction.FrictionData";
    }
    static readonly FRICTION_DENOMINATOR: i32 = 100;
    

    jinit_FrictionData_0(): FrictionData {
        super.jinit_JObject_0();
        return this;
    }
    

    static getFrictionDenominator(): i32 {
        return FrictionData.FRICTION_DENOMINATOR;
    }
}


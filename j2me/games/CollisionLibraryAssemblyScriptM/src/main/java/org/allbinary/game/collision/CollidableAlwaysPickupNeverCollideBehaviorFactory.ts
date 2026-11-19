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

@global export class CollidableAlwaysPickupNeverCollideBehaviorFactory extends CollidableBaseBehaviorFactory {

    jclassName(): string {
        return "org.allbinary.game.collision.CollidableAlwaysPickupNeverCollideBehaviorFactory";
    }
    @lazy static jv_instanceC: CollidableAlwaysPickupNeverCollideBehaviorFactory | null = null;
    @lazy static js_instanceC: bool = false;
    static get instanceC(): CollidableAlwaysPickupNeverCollideBehaviorFactory | null {
        if (!CollidableAlwaysPickupNeverCollideBehaviorFactory.js_instanceC) {
            CollidableAlwaysPickupNeverCollideBehaviorFactory.js_instanceC = true;
            CollidableAlwaysPickupNeverCollideBehaviorFactory.jv_instanceC = new CollidableAlwaysPickupNeverCollideBehaviorFactory().jinit_CollidableAlwaysPickupNeverCollideBehaviorFactory_0();
        }
        return CollidableAlwaysPickupNeverCollideBehaviorFactory.jv_instanceC;
    }
    static set instanceC(value: CollidableAlwaysPickupNeverCollideBehaviorFactory | null) {
        CollidableAlwaysPickupNeverCollideBehaviorFactory.js_instanceC = true;
        CollidableAlwaysPickupNeverCollideBehaviorFactory.jv_instanceC = value;
    }
    instance: CollidableAlwaysPickupNeverCollideBehavior | null = null;

    jfields_CollidableAlwaysPickupNeverCollideBehaviorFactory(): void {
    this.instance = new CollidableAlwaysPickupNeverCollideBehavior().jinit_CollidableAlwaysPickupNeverCollideBehavior_0();
    }

    jinit_CollidableAlwaysPickupNeverCollideBehaviorFactory_0(): CollidableAlwaysPickupNeverCollideBehaviorFactory {
        super.jinit_CollidableBaseBehaviorFactory_0();
        this.jfields_CollidableAlwaysPickupNeverCollideBehaviorFactory();
        return this;
    }
    

    static getInstance(): CollidableAlwaysPickupNeverCollideBehaviorFactory | null {
        return CollidableAlwaysPickupNeverCollideBehaviorFactory.instanceC;
    }
    

    createBehavior(): CollidableBaseBehavior | null {
        return this.instance;
    }
}


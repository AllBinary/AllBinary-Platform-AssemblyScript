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

@global export class CollidableNeverCollideBehaviorFactory extends CollidableBaseBehaviorFactory {

    jclassName(): string {
        return "org.allbinary.game.collision.CollidableNeverCollideBehaviorFactory";
    }
    @lazy static jv_instanceC: CollidableNeverCollideBehaviorFactory | null = null;
    @lazy static js_instanceC: bool = false;
    static get instanceC(): CollidableNeverCollideBehaviorFactory | null {
        if (!CollidableNeverCollideBehaviorFactory.js_instanceC) {
            CollidableNeverCollideBehaviorFactory.js_instanceC = true;
            CollidableNeverCollideBehaviorFactory.jv_instanceC = new CollidableNeverCollideBehaviorFactory().jinit_CollidableNeverCollideBehaviorFactory_0();
        }
        return CollidableNeverCollideBehaviorFactory.jv_instanceC;
    }
    static set instanceC(value: CollidableNeverCollideBehaviorFactory | null) {
        CollidableNeverCollideBehaviorFactory.js_instanceC = true;
        CollidableNeverCollideBehaviorFactory.jv_instanceC = value;
    }
    instance: CollidableNeverCollideBehavior | null = null;

    jfields_CollidableNeverCollideBehaviorFactory(): void {
    this.instance = new CollidableNeverCollideBehavior().jinit_CollidableNeverCollideBehavior_1(false);
    }

    jinit_CollidableNeverCollideBehaviorFactory_0(): CollidableNeverCollideBehaviorFactory {
        super.jinit_CollidableBaseBehaviorFactory_0();
        this.jfields_CollidableNeverCollideBehaviorFactory();
        return this;
    }
    

    static getInstance(): CollidableNeverCollideBehaviorFactory | null {
        return CollidableNeverCollideBehaviorFactory.instanceC;
    }
    

    createBehavior(): CollidableBaseBehavior | null {
        return this.instance;
    }
}


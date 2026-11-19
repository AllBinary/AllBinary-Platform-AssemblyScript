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

@global export class CollisionTypeFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.collision.CollisionTypeFactory";
    }
    @lazy static jv_SINGLETON: CollisionTypeFactory | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): CollisionTypeFactory | null {
        if (!CollisionTypeFactory.js_SINGLETON) {
            CollisionTypeFactory.js_SINGLETON = true;
            CollisionTypeFactory.jv_SINGLETON = new CollisionTypeFactory().jinit_CollisionTypeFactory_0();
        }
        return CollisionTypeFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: CollisionTypeFactory | null) {
        CollisionTypeFactory.js_SINGLETON = true;
        CollisionTypeFactory.jv_SINGLETON = value;
    }
    NONE: CollisionType | null = null;
    DAMAGE: CollisionType | null = null;
    PICKUP: CollisionType | null = null;
    COLLISION: CollisionType | null = null;

    jfields_CollisionTypeFactory(): void {
    this.NONE = new CollisionType().jinit_CollisionType_1("None");
    this.DAMAGE = new CollisionType().jinit_CollisionType_1("Damage");
    this.PICKUP = new CollisionType().jinit_CollisionType_1("Pickup");
    this.COLLISION = new CollisionType().jinit_CollisionType_1("Collision");
    }

    jinit_CollisionTypeFactory_0(): CollisionTypeFactory {
        super.jinit_JObject_0();
        this.jfields_CollisionTypeFactory();
        return this;
    }
    

    static getInstance(): CollisionTypeFactory | null {
        return CollisionTypeFactory.SINGLETON;
    }
}


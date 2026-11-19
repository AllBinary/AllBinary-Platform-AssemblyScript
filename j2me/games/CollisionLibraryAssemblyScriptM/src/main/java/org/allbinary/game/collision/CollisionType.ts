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

@global export class CollisionType extends JObject {

    jclassName(): string {
        return "org.allbinary.game.collision.CollisionType";
    }
    name: string | null = null;

    jfields_CollisionType(): void {
    
    }
    

    jinit_CollisionType_1(name: string | null): CollisionType {
        super.jinit_JObject_0();
        this.jfields_CollisionType();
        this.name = name;
        return this;
    }
    

    toString(): string | null {
        return this.name;
    }
}


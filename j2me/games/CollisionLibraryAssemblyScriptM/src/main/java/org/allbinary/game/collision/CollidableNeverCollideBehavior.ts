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
// import org.allbinary.game.layer.CollidableCompositeLayer

@global export class CollidableNeverCollideBehavior extends CollidableBaseBehavior {

    jclassName(): string {
        return "org.allbinary.game.collision.CollidableNeverCollideBehavior";
    }
    

    jinit_CollidableNeverCollideBehavior_1(isCollidable: bool): CollidableNeverCollideBehavior {
        super.jinit_CollidableBaseBehavior_1(isCollidable);
        return this;
    }
    

    isCollision(ownerLayer: CollidableCompositeLayer | null, allbinaryCollidableLayer: CollidableCompositeLayer | null): bool {
        return false;
    }
    

    collide(ownerLayer: CollidableCompositeLayer | null, allbinaryCollidableLayer: CollidableCompositeLayer | null): void {
    }
    

    collideInterface(ownerLayer: CollidableCompositeLayer | null, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface | null): void {
    }
    

    isCollisionInterface(ownerLayer: CollidableCompositeLayer | null, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface | null): bool {
        return false;
    }
}


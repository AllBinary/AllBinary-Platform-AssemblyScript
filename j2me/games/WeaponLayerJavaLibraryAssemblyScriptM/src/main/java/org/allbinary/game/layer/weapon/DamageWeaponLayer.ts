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
// package org.allbinary.game.layer.weapon
// import org.allbinary.animation.Animation
// import org.allbinary.game.multiplayer.layer.RemoteInfo
// import org.allbinary.graphics.Rectangle
// import org.allbinary.physics.movement.Movement
// import org.allbinary.view.ViewPositionBase

@global export class DamageWeaponLayer extends WeaponLayer {

    jclassName(): string {
        return "org.allbinary.game.layer.weapon.DamageWeaponLayer";
    }
    

    jinit_DamageWeaponLayer_11(name: string | null, remoteInfo: RemoteInfo | null, movement: Movement | null, animationInterface: Animation | null, destroyedAnimationInterface: Animation | null, rectangle: Rectangle | null, viewPosition: ViewPositionBase | null, username: string | null, actorSessionId: i32, id: i32, multiPlayerType: i32): DamageWeaponLayer {
        super.jinit_WeaponLayer_8(name, remoteInfo, multiPlayerType, movement, animationInterface, destroyedAnimationInterface, rectangle, viewPosition);
        this.setCollidableInferface(new CollidableDamageWeaponBehavior().jinit_CollidableDamageWeaponBehavior_1(true)); if (JThrowable.pending !== null) return this;
        return this;
    }
}


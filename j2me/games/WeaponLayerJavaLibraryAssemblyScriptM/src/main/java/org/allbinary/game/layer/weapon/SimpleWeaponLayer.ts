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
// import org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory
// import org.allbinary.animation.NullIndexedAnimationFactory
// import org.allbinary.game.combat.damage.ExplosionResources
// import org.allbinary.game.multiplayer.layer.RemoteInfo
// import org.allbinary.graphics.Rectangle
// import org.allbinary.physics.movement.Movement
// import org.allbinary.view.ViewPositionBase

@global export class SimpleWeaponLayer extends WeaponLayer {

    jclassName(): string {
        return "org.allbinary.game.layer.weapon.SimpleWeaponLayer";
    }
    

    static createDestroyed(): Animation | null {
        return FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.getProcedural(ExplosionResources.getInstance()!.THIRD_EXPLOSION_RESOURCE)!.getInstanceAnimation(NullIndexedAnimationFactory.getFactoryInstance()!.getInstance1(0));
    }
    

    jinit_SimpleWeaponLayer_8(name: string | null, remoteInfo: RemoteInfo | null, multiPlayerType: i32, movement: Movement | null, animationInterface: Animation | null, destroyedAnimationInterface: Animation | null, rectangle: Rectangle | null, viewPosition: ViewPositionBase | null): SimpleWeaponLayer {
        super.jinit_WeaponLayer_8(name, remoteInfo, multiPlayerType, movement, animationInterface, destroyedAnimationInterface, rectangle, viewPosition);
        this.setCollidableInferface(new CollidableWeaponBehavior().jinit_CollidableWeaponBehavior_1(true)); if (JThrowable.pending !== null) return this;
        return this;
    }
}


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
// package org.allbinary.game.layer.pickup
// import javax.microedition.khronos.opengles.GL
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.Animation
// import org.allbinary.animation.NullAnimationFactory
// import org.allbinary.game.collision.CollidableAlwaysPickupNeverCollideBehaviorFactory
// import org.allbinary.game.combat.destroy.DestroyedLayerProcessor
// import org.allbinary.game.identification.BasicGroupFactory
// import org.allbinary.game.multiplayer.layer.MultiPlayerGameLayer
// import org.allbinary.game.multiplayer.layer.RemoteInfo
// import org.allbinary.graphics.Rectangle
// import org.allbinary.image.opengles.OpenGLSurfaceChangedInterface
// import org.allbinary.view.ViewPositionBase

@global export class PickupLayer extends MultiPlayerGameLayer implements PickedUpLayerInterface, PickupableInterface {

    jclassName(): string {
        return "org.allbinary.game.layer.pickup.PickupLayer";
    }
    pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface | null = null;
    destroyed: bool = false;
    animationInterface: Animation | null = null;

    jfields_PickupLayer(): void {
    this.pickedUpLayerInterfaceFactoryInterface = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;
    this.destroyed = false;
    this.animationInterface = NullAnimationFactory.getFactoryInstance()!.getInstance1(0);
    }
    

    jinit_PickupLayer_7(name: string | null, remoteInfo: RemoteInfo | null, total: i32, pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface | null, animationInterface: Animation | null, rectangle: Rectangle | null, viewPosition: ViewPositionBase | null): PickupLayer {
        super.jinit_MultiPlayerGameLayer_5(remoteInfo, BasicGroupFactory.getInstance()!.NONE_ARRAY, name, rectangle, viewPosition);
        this.jfields_PickupLayer();
        this.setCollidableInferface(CollidableAlwaysPickupNeverCollideBehaviorFactory.getInstance()!.createBehavior()); if (JThrowable.pending !== null) return this;
        this.setLayerWidth(10); if (JThrowable.pending !== null) return this;
        this.setLayerHeight(10); if (JThrowable.pending !== null) return this;
        this.init(pickedUpLayerInterfaceFactoryInterface, animationInterface); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface | null, animationInterface: Animation | null): void {
        this.pickedUpLayerInterfaceFactoryInterface = pickedUpLayerInterfaceFactoryInterface;
        this.animationInterface = animationInterface;
        this.setDestroyed(false); if (JThrowable.pending !== null) return;
    }
    

    initXYZ(x: i32, y: i32, z: i32): void {
        this.setPosition(x, y, z); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        let viewPosition: ViewPositionBase | null = this.getViewPosition(); if (JThrowable.pending !== null) return;
        let viewX: i32 = viewPosition!.getX(); if (JThrowable.pending !== null) return;
        let viewY: i32 = viewPosition!.getY(); if (JThrowable.pending !== null) return;
        this.animationInterface!.paintXY(graphics, viewX, viewY); if (JThrowable.pending !== null) return;
    }
    

    paintThreed(graphics: Graphics | null): void {
        let viewPosition: ViewPositionBase | null = this.getViewPosition(); if (JThrowable.pending !== null) return;
        let viewX: i32 = viewPosition!.getX(); if (JThrowable.pending !== null) return;
        let viewY: i32 = viewPosition!.getY(); if (JThrowable.pending !== null) return;
        this.animationInterface!.paintThreedXYZ(graphics, viewX, viewY, 3); if (JThrowable.pending !== null) return;
    }
    

    getPickedUpLayerInterfaceFactoryInterface(): PickedUpLayerInterfaceFactoryInterface | null {
        return this.pickedUpLayerInterfaceFactoryInterface;
    }
    

    setPickedUp(): void {
        this.setDestroyed(true); if (JThrowable.pending !== null) return;
    }
    

    isDestroyed(): bool {
        return this.destroyed;
    }
    

    setDestroyed(destroyed: bool): void {
        this.destroyed = destroyed;
        if (this.isDestroyed()) {
            DestroyedLayerProcessor.getInstance()!.add(this); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    damage(damage: i32, damageType: i32): void {
    }
    

    getDamage(damageType: i32): i32 {
        return 0;
    }
    

    set(gl: GL | null): void {
        let openGLSurfaceChangedInterface: OpenGLSurfaceChangedInterface | null = changetype<OpenGLSurfaceChangedInterface | null>(this.animationInterface);
        openGLSurfaceChangedInterface!.set(gl); if (JThrowable.pending !== null) return;
    }
}


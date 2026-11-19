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
// package org.allbinary.game.ag.layer.weapon.mine
// import org.allbinary.ag.weapon.media.audio.DropWeaponSound
// import org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory
// import org.allbinary.game.layer.weapon.SimpleWeaponLayer
// import org.allbinary.game.multiplayer.layer.RemoteInfo
// import org.allbinary.graphics.PointFactory
// import org.allbinary.graphics.Rectangle
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.media.audio.SecondaryPlayerQueueFactory
// import org.allbinary.physics.movement.NoMovementFactory
// import org.allbinary.view.ViewPositionBase
// import org.allbinary.view.event.ViewPositionEventHandler

@global export class MineLayer extends SimpleWeaponLayer {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.weapon.mine.MineLayer";
    }
    @lazy static readonly NAME: string | null = "MineLayer";
    viewPositionEventHandler: ViewPositionEventHandler | null = null;

    jfields_MineLayer(): void {
    this.viewPositionEventHandler = ViewPositionEventHandler.getInstance();
    }
    

    jinit_MineLayer_1(viewPosition: ViewPositionBase | null): MineLayer {
        super.jinit_SimpleWeaponLayer_8(MineLayer.NAME, RemoteInfo.REMOTE_INFO, -1, NoMovementFactory.getInstance()!.getMovmentInstance(), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(MineWeaponResources.getInstance()!.RESOURCE)!.getInstance1(0), SimpleWeaponLayer.createDestroyed(), new Rectangle().jinit_Rectangle_3(PointFactory.getInstance()!.ZERO_ZERO, 10, 10), viewPosition);
        this.jfields_MineLayer();
        return this;
    }
    

    initXYZ(x: i32, y: i32, z: i32): void {
        this.setPosition(x + 5, y + 5, z); if (JThrowable.pending !== null) return;
        this.viewPositionEventHandler!.addListener(changetype<AllBinaryLayer | null>(this)); if (JThrowable.pending !== null) return;
        SecondaryPlayerQueueFactory.getInstance()!.add(DropWeaponSound.getInstance()); if (JThrowable.pending !== null) return;
    }
    

    damage(damage: i32, damageType: i32): void {
        this.totalDamage = this.getInitDamage() + 1; if (JThrowable.pending !== null) return;
    }
    

    getDamage(damageType: i32): i32 {
        super.getDamage(damageType); if (JThrowable.pending !== null) return 0;
        return this.getInitDamage();
    }
    

    setDestroyed(destroyed: bool): void {
        super.setDestroyed(destroyed); if (JThrowable.pending !== null) return;
        if (this.isDestroyed()) {
            this.viewPositionEventHandler!.removeListener(this); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}


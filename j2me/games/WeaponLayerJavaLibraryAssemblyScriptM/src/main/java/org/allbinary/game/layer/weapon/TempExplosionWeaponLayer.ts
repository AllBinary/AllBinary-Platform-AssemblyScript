// Generated Code Do Not Modify
// package org.allbinary.game.layer.weapon
// import org.allbinary.animation.Animation
// import org.allbinary.game.combat.weapon.WeaponProperties
// import org.allbinary.game.multiplayer.layer.RemoteInfo
// import org.allbinary.graphics.Rectangle
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.physics.movement.Movement
// import org.allbinary.time.GameTickTimeDelayHelperFactory
// import org.allbinary.time.TimeDelayHelper
// import org.allbinary.view.ViewPositionBase

@global export class TempExplosionWeaponLayer extends SimpleWeaponLayer {

    jclassName(): string {
        return "org.allbinary.game.layer.weapon.TempExplosionWeaponLayer";
    }
    weaponProperties: WeaponProperties | null = null;
    timeDelayHelper: TimeDelayHelper | null = null;

    jfields_TempExplosionWeaponLayer(): void {
    this.weaponProperties = new WeaponProperties().jinit_WeaponProperties_5(-(<i64>1), -(<i64>1), 0, 1000, (<i16>(0)));
    this.timeDelayHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(0);
    }
    

    jinit_TempExplosionWeaponLayer_6(name: string | null, movement: Movement | null, animationInterface: Animation | null, rectangle: Rectangle | null, viewPosition: ViewPositionBase | null, timeDelay: i32): TempExplosionWeaponLayer {
        super.jinit_SimpleWeaponLayer_8(name, RemoteInfo.REMOTE_INFO, -1, movement, animationInterface, SimpleWeaponLayer.createDestroyed(), rectangle, viewPosition);
        this.jfields_TempExplosionWeaponLayer();
        this.timeDelayHelper!.delay = timeDelay;
        return this;
    }
    

    processTick(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        if (this.timeDelayHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime)) {
            this.getCollidableInferface()!.collide(this, this); if (JThrowable.pending !== null) return;
            this.totalDamage = this.getInitDamage() + 1; if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        super.processTick(allBinaryLayerManager); if (JThrowable.pending !== null) return;
    }
}


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
// import javax.microedition.khronos.opengles.GL
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.Animation
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.animation.NullAnimationFactory
// import org.allbinary.game.collision.CollidableBaseBehavior
// import org.allbinary.game.combat.destroy.DestroyedLayerProcessor
// import org.allbinary.game.combat.weapon.WeaponProperties
// import org.allbinary.game.configuration.GameConfigurationUtil
// import org.allbinary.game.identification.BasicGroupFactory
// import org.allbinary.game.multiplayer.layer.MultiPlayerGameLayer
// import org.allbinary.game.multiplayer.layer.RemoteInfo
// import org.allbinary.game.score.NoScoreable
// import org.allbinary.game.score.ScoreableInterface
// import org.allbinary.game.tick.TickableInterface
// import org.allbinary.graphics.Rectangle
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.physics.movement.Movement
// import org.allbinary.view.ViewPosition
// import org.allbinary.view.ViewPositionBase

@global export class WeaponLayer extends MultiPlayerGameLayer implements TickableInterface {

    jclassName(): string {
        return "org.allbinary.game.layer.weapon.WeaponLayer";
    }
    animationInterface: Animation | null = null;
    initAnimationInterface: Animation | null = null;
    destroyedAnimationInterface: Animation | null = null;
    sourceLayerInterface: AllBinaryLayer | null = null;
    totalDamage: i32 = 0;
    initDamage: i32 = 0;
    destroyed: bool = false;
    scoreableInterface: ScoreableInterface | null = null;
    movement: Movement | null = null;
    weaponProperties: WeaponProperties | null = null;
    multiPlayerType: i32 = 0;
    collidableWeaponBehavior: CollidableWeaponBehavior | null = null;

    jfields_WeaponLayer(): void {
    this.animationInterface = NullAnimationFactory.getFactoryInstance()!.getInstance1(0);
    
    
    this.sourceLayerInterface = AllBinaryLayer.NULL_ALLBINARY_LAYER;
    this.totalDamage = 0;
    this.initDamage = 0;
    this.destroyed = true;
    this.scoreableInterface = NoScoreable.getInstance();
    
    this.weaponProperties = WeaponProperties.NULL_WEAPON_PROPERTIES;
    
    this.collidableWeaponBehavior = CollidableWeaponBehavior.getNullInstance();
    }
    

    jinit_WeaponLayer_8(name: string | null, remoteInfo: RemoteInfo | null, multiPlayerType: i32, movement: Movement | null, animationInterface: Animation | null, destroyedAnimationInterface: Animation | null, rectangle: Rectangle | null, viewPosition: ViewPositionBase | null): WeaponLayer {
        super.jinit_MultiPlayerGameLayer_5(remoteInfo, BasicGroupFactory.getInstance()!.NONE_ARRAY, name, rectangle, viewPosition);
        this.jfields_WeaponLayer();
        this.initAnimationInterface = animationInterface;
        this.setAnimationInterface(animationInterface); if (JThrowable.pending !== null) return this;
        this.destroyedAnimationInterface = destroyedAnimationInterface;
        this.movement = movement;
        this.multiPlayerType = multiPlayerType;
        return this;
    }
    

    setCollidableInferface(collidableInferface: CollidableBaseBehavior | null): void {
        super.setCollidableInferface(collidableInferface); if (JThrowable.pending !== null) return;
        this.collidableWeaponBehavior = changetype<CollidableWeaponBehavior | null>(this.getCollidableInferface()); if (JThrowable.pending !== null) return;
    }
    

    initXYZ(x: i32, y: i32, z: i32): void {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    

    init(sourceLayerInterface: AllBinaryLayer | null, angle: i32, otherAngle: i32, weaponProperties: WeaponProperties | null, scoreable: ScoreableInterface | null): void {
        this.setWeaponPropertiesP(weaponProperties); if (JThrowable.pending !== null) return;
        this.setReadyForExplosion(false); if (JThrowable.pending !== null) return;
        this.setAnimationInterface(this.getInitAnimationInterfaceP()); if (JThrowable.pending !== null) return;
        this.setOwnerLayerInterface(sourceLayerInterface); if (JThrowable.pending !== null) return;
        this.collidableWeaponBehavior!.init(sourceLayerInterface); if (JThrowable.pending !== null) return;
        this.setGroupInterfaces(); if (JThrowable.pending !== null) return;
        if (scoreable != null) {
            this.scoreableInterface = scoreable;
        }
        this.totalDamage = 0;
        this.initDamage = weaponProperties!.getDamage(); if (JThrowable.pending !== null) return;
        this.setDestroyed(false); if (JThrowable.pending !== null) return;
        this.movement!.init(weaponProperties!.getSpeed(), angle, otherAngle); if (JThrowable.pending !== null) return;
    }
    

    setGroupInterfaces(): void {
        let basicGroupFactory: BasicGroupFactory | null = BasicGroupFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (this.sourceLayerInterface!.getGroupInterface()![0] == basicGroupFactory!.ENEMY) {
            this.setGroupInterface(basicGroupFactory!.ENEMY_ARRAY); if (JThrowable.pending !== null) return;
        } else {
            this.setGroupInterface(this.sourceLayerInterface!.getGroupInterface()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    processTick(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        if (this.isExhausted() && !this.isDestroyed()) {
            if (this.isReadyForExplosion()) {
                let indexedAnimationInterface: IndexedAnimation | null = changetype<IndexedAnimation | null>(this.getAnimationInterface()); if (JThrowable.pending !== null) return;
                let currentFrame: i32 = indexedAnimationInterface!.getFrame(); if (JThrowable.pending !== null) return;
                if (currentFrame < indexedAnimationInterface!.getAnimationSize() - 1) {
                    indexedAnimationInterface!.nextFrame(); if (JThrowable.pending !== null) return;
                } else {
                    this.setDestroyed(true); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } else {
                let collidableWeaponBehavior: CollidableWeaponBehavior | null = changetype<CollidableWeaponBehavior | null>(this.getCollidableInferface()); if (JThrowable.pending !== null) return;
                if (collidableWeaponBehavior!.isCollided()) {
                    this.setAnimationInterface(this.destroyedAnimationInterface); if (JThrowable.pending !== null) return;
                    this.getMovement()!.stop(); if (JThrowable.pending !== null) return;
                    this.setReadyForExplosion(true); if (JThrowable.pending !== null) return;
                } else {
                    this.setDestroyed(true); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.movement!.process(this); if (JThrowable.pending !== null) return;
        this.totalDamage += (<i32>(this.weaponProperties!.getDissipation())); if (JThrowable.pending !== null) return;
    }
    

    isDestroyed(): bool {
        return this.destroyed;
    }
    

    damage(damage: i32, damageType: i32): void {
        this.totalDamage += damage * damage;
    }
    

    givePoints(total: i32): void {
        this.scoreableInterface!.addPoints(GameConfigurationUtil.getInstance()!.getCompetitionValue() * total); if (JThrowable.pending !== null) return;
    }
    

    isExhausted(): bool {
        if (this.totalDamage > this.getInitDamage() || this.totalDamage < 0) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    getDamage(damageType: i32): i32 {
        if (!this.isExhausted()) {
            let total: i32 = this.getInitDamage() - this.totalDamage; if (JThrowable.pending !== null) return 0;
            this.givePoints(total); if (JThrowable.pending !== null) return 0;
            return total;
        } if (JThrowable.pending !== null) return 0;
        return 0;
    }
    

    setDestroyed(destroyed: bool): void {
        this.destroyed = destroyed;
        if (this.isDestroyed()) {
            this.scoreableInterface = NoScoreable.getInstance(); if (JThrowable.pending !== null) return;
            DestroyedLayerProcessor.getInstance()!.add(this); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getInitDamage(): i32 {
        return this.initDamage;
    }
    

    setAnimationInterface(animationInterface: Animation | null): void {
        this.animationInterface = animationInterface;
    }
    

    getAnimationInterface(): Animation | null {
        return this.animationInterface;
    }
    

    getInitAnimationInterfaceP(): Animation | null {
        return this.initAnimationInterface;
    }
    

    setInitAnimationInterfaceP(initAnimationInterface: Animation | null): void {
        this.initAnimationInterface = initAnimationInterface;
    }
    

    getDestroyedAnimationInterface(): Animation | null {
        return this.destroyedAnimationInterface;
    }
    

    getOwnerLayerInterface(): AllBinaryLayer | null {
        return this.sourceLayerInterface;
    }
    

    setOwnerLayerInterface(sourceLayerInterface: AllBinaryLayer | null): void {
        this.sourceLayerInterface = sourceLayerInterface;
    }
    

    paint(graphics: Graphics | null): void {
        let viewPosition: ViewPositionBase | null = this.getViewPosition(); if (JThrowable.pending !== null) return;
        this.animationInterface!.paintXY(graphics, viewPosition!.getX() - this.getHalfWidth(), viewPosition!.getY() - this.getHalfHeight()); if (JThrowable.pending !== null) return;
    }
    

    paintThreed(graphics: Graphics | null): void {
        let viewPosition: ViewPositionBase | null = this.getViewPosition(); if (JThrowable.pending !== null) return;
        this.animationInterface!.paintThreedXYZ(graphics, viewPosition!.getX() - this.getHalfWidth(), viewPosition!.getY() - this.getHalfHeight(), viewPosition!.getZ() - this.getHalfDepth()); if (JThrowable.pending !== null) return;
    }
    

    getMovement(): Movement | null {
        return this.movement;
    }
    

    setMovement(movement: Movement | null): void {
        this.movement = movement;
    }
    

    getType(): i32 {
        return WeaponLayer.getStaticType();
    }
    

    static getStaticType(): i32 {
        return 0;
    }
    

    getMultiPlayerType(): i32 {
        return this.multiPlayerType;
    }
    

    setWeaponPropertiesP(weaponProperties: WeaponProperties | null): void {
        this.weaponProperties = weaponProperties;
    }
    

    getWeaponPropertiesP(): WeaponProperties | null {
        return this.weaponProperties;
    }
    

    implmentsTickableInterface(): bool {
        return true;
    }
    

    set(gl: GL | null): void {
        this.initAnimationInterface!.set(gl); if (JThrowable.pending !== null) return;
    }
}


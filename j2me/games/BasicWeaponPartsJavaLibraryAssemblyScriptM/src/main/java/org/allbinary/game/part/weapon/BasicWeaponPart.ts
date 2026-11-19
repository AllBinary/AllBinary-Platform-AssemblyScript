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
// package org.allbinary.game.part.weapon
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.Animation
// import org.allbinary.animation.NullAnimationFactory
// import org.allbinary.game.combat.weapon.WeaponProperties
// import org.allbinary.game.part.PartInterface
// import org.allbinary.game.score.NoScoreable
// import org.allbinary.game.score.ScoreableInterface
// import org.allbinary.graphics.RelativeRelationship
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.string.CommonStrings
// import org.allbinary.view.ViewPositionBase

@global export class BasicWeaponPart extends JObject implements PartInterface, SalvoInterface {

    jclassName(): string {
        return "org.allbinary.game.part.weapon.BasicWeaponPart";
    }
    @lazy static jv_NULL_BASIC_WEAPON_PART: BasicWeaponPart | null = null;
    @lazy static js_NULL_BASIC_WEAPON_PART: bool = false;
    static get NULL_BASIC_WEAPON_PART(): BasicWeaponPart | null {
        if (!BasicWeaponPart.js_NULL_BASIC_WEAPON_PART) {
            BasicWeaponPart.js_NULL_BASIC_WEAPON_PART = true;
            BasicWeaponPart.jv_NULL_BASIC_WEAPON_PART = BasicWeaponPart.createBasicWeaponPart(NullAnimationFactory.getFactoryInstance()!.getInstance1(0));
        }
        return BasicWeaponPart.jv_NULL_BASIC_WEAPON_PART;
    }
    static set NULL_BASIC_WEAPON_PART(value: BasicWeaponPart | null) {
        BasicWeaponPart.js_NULL_BASIC_WEAPON_PART = true;
        BasicWeaponPart.jv_NULL_BASIC_WEAPON_PART = value;
    }
    animationInterface: Animation | null = null;
    ownerLayerInterface: AllBinaryLayer | null = null;
    weaponProperties: WeaponProperties | null = null;
    scoreableInterface: ScoreableInterface | null = null;
    relativeRelationship: RelativeRelationship | null = null;

    jfields_BasicWeaponPart(): void {
    this.animationInterface = NullAnimationFactory.getFactoryInstance()!.getInstance1(0);
    this.ownerLayerInterface = AllBinaryLayer.NULL_ALLBINARY_LAYER;
    this.weaponProperties = WeaponProperties.NULL_WEAPON_PROPERTIES;
    this.scoreableInterface = NoScoreable.getInstance();
    this.relativeRelationship = RelativeRelationship.NULL_RELATIVE_RELATIONSHIP;
    }
    

    static createBasicWeaponPart(animationInterface: Animation | null): BasicWeaponPart | null {
        return new BasicWeaponPart().jinit_BasicWeaponPart_5(animationInterface, AllBinaryLayer.NULL_ALLBINARY_LAYER, WeaponProperties.NULL_WEAPON_PROPERTIES, NoScoreable.getInstance(), RelativeRelationship.NULL_RELATIVE_RELATIONSHIP);
    }
    

    jinit_BasicWeaponPart_5(animationInterface: Animation | null, sourceLayerInterface: AllBinaryLayer | null, weaponProperties: WeaponProperties | null, scoreableInterface: ScoreableInterface | null, relativeRelationship: RelativeRelationship | null): BasicWeaponPart {
        super.jinit_JObject_0();
        this.jfields_BasicWeaponPart();
        this.init(sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship); if (JThrowable.pending !== null) return this;
        this.setAnimationInterface(animationInterface); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(sourceLayerInterface: AllBinaryLayer | null, weaponProperties: WeaponProperties | null, scoreableInterface: ScoreableInterface | null, relativeRelationship: RelativeRelationship | null): void {
        this.setOwnerLayerInterface(sourceLayerInterface); if (JThrowable.pending !== null) return;
        this.setWeaponProperties(weaponProperties); if (JThrowable.pending !== null) return;
        this.scoreableInterface = scoreableInterface;
        this.relativeRelationship = relativeRelationship;
    }
    

    process(allbinaryLayerManager: AllBinaryLayerManager | null, angle: i16, otherAngle: i16): void {
        this.processScore(allbinaryLayerManager, angle, otherAngle, this.getWeaponProperties(), this.scoreableInterface); if (JThrowable.pending !== null) return;
    }
    

    processScore(allbinaryLayerManager: AllBinaryLayerManager | null, angle: i16, otherAngle: i16, weaponProperties: WeaponProperties | null, scoreableInterface: ScoreableInterface | null): void {
        { JThrowable.raise(new JException().jinit_JException_1(CommonStrings.getInstance()!.NOT_IMPLEMENTED)); return; }
    }
    

    getOwnerLayerInterface(): AllBinaryLayer | null {
        return this.ownerLayerInterface;
    }
    

    setOwnerLayerInterface(ownerLayerInterface: AllBinaryLayer | null): void {
        this.ownerLayerInterface = ownerLayerInterface;
    }
    

    getAnimationInterface(): Animation | null {
        return this.animationInterface;
    }
    

    setAnimationInterface(animationInterface: Animation | null): void {
        this.animationInterface = animationInterface;
    }
    

    paint(graphics: Graphics | null): void {
        let viewPosition: ViewPositionBase | null = this.getOwnerLayerInterface()!.getViewPosition(); if (JThrowable.pending !== null) return;
        let viewX: i32 = viewPosition!.getX(); if (JThrowable.pending !== null) return;
        let viewY: i32 = viewPosition!.getY(); if (JThrowable.pending !== null) return;
        this.animationInterface!.paintXY(graphics, viewX, viewY); if (JThrowable.pending !== null) return;
    }
    

    paintThreed(graphics: Graphics | null): void {
    }
    

    getWeaponProperties(): WeaponProperties | null {
        return this.weaponProperties;
    }
    

    setWeaponProperties(weaponProperties: WeaponProperties | null): void {
        this.weaponProperties = weaponProperties;
    }
}


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
// package org.allbinary.game.layer.special
// import javax.microedition.lcdui.Graphics
// import org.allbinary.game.collision.CollidableNeverCollideBehaviorFactory
// import org.allbinary.game.combat.damage.DamageableInterface
// import org.allbinary.game.combat.destroy.DestroyableInterface
// import org.allbinary.game.combat.destroy.event.DestroyedEvent
// import org.allbinary.game.identification.BasicGroupFactory
// import org.allbinary.game.identification.Group
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.game.layer.AllBinaryGameLayerManager
// import org.allbinary.game.layer.CollidableCompositeLayer
// import org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactoryInterface
// import org.allbinary.game.layer.pickup.PickupBehavior
// import org.allbinary.game.layer.pickup.PickupCompositeInterface
// import org.allbinary.game.part.PartInterface
// import org.allbinary.game.part.PartInterfaceUtil
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.RectangleFactory
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.math.PositionStrings
// import org.allbinary.string.CommonSeps
// import org.allbinary.view.ViewPositionBase

@global export class CollidableDestroyableDamageableLayer extends CollidableCompositeLayer implements DestroyableInterface, DamageableInterface, PickupCompositeInterface, SpecialGameInputInterface {

    jclassName(): string {
        return "org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer";
    }
    @lazy static jv_NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER: Object | null = null;
    @lazy static js_NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER: bool = false;
    static get NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER(): Object | null {
        if (!CollidableDestroyableDamageableLayer.js_NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER) {
            CollidableDestroyableDamageableLayer.js_NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER = true;
            CollidableDestroyableDamageableLayer.jv_NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return CollidableDestroyableDamageableLayer.jv_NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER;
    }
    static set NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER(value: Object | null) {
        CollidableDestroyableDamageableLayer.js_NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER = true;
        CollidableDestroyableDamageableLayer.jv_NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER = value;
    }
    @lazy static readonly READYFOREXPLOSION: string | null = "ReadyForExplosion: ";
    groupInterface: StaticArray<Group | null> | null = null;
    readyForExplosion: bool = false;
    initWidth: i32 = 0;
    initHeight: i32 = 0;
    initX: i32 = 0;
    initY: i32 = 0;
    initZ: i32 = 0;
    partInterfaceArrayP: StaticArray<PartInterface | null> | null = null;
    pickupBehavior: PickupBehavior | null = null;
    allBinaryGameLayerManagerP: AllBinaryGameLayerManager | null = null;
    isDraggable: bool = false;
    isDragged: bool = false;
    isDropped: bool = false;

    jfields_CollidableDestroyableDamageableLayer(): void {
    
    this.readyForExplosion = false;
    
    
    this.initX = 0;
    this.initY = 0;
    this.initZ = 0;
    this.partInterfaceArrayP = PartInterfaceUtil.getZeroArray();
    
    this.allBinaryGameLayerManagerP = AllBinaryGameLayerManager.getNullInstance();
    this.isDraggable = false;
    this.isDragged = false;
    this.isDropped = false;
    }
    

    static getNullInstance(): CollidableDestroyableDamageableLayer | null {
        if (CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER = new CollidableDestroyableDamageableLayer().jinit_CollidableDestroyableDamageableLayer_4(BasicGroupFactory.getInstance()!.NONE_ARRAY, StringUtil.getInstance()!.EMPTY_STRING, RectangleFactory.SINGLETON, ViewPositionBase.NULL_VIEW_POSITION); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<CollidableDestroyableDamageableLayer | null>(CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER);
    }
    

    jinit_CollidableDestroyableDamageableLayer_4(groupInterface: StaticArray<Group | null> | null, name: string | null, layerInfo: Rectangle | null, viewPosition: ViewPositionBase | null): CollidableDestroyableDamageableLayer {
        super.jinit_CollidableCompositeLayer_4(name, layerInfo, viewPosition, CollidableNeverCollideBehaviorFactory.getInstance());
        this.jfields_CollidableDestroyableDamageableLayer();
        this.initWidth = layerInfo!.getWidth(); if (JThrowable.pending !== null) return this;
        this.initHeight = layerInfo!.getHeight(); if (JThrowable.pending !== null) return this;
        this.groupInterface = groupInterface;
        this.pickupBehavior = PickupBehavior.getNullInstance(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    initPosition(): void {
        this.setPosition(this.initX, this.initY, this.initZ); if (JThrowable.pending !== null) return;
    }
    

    initPositionXYZ(x: i32, y: i32, z: i32): void {
        this.initX = x;
        this.initY = y;
        this.initZ = z;
    }
    

    paint(graphics: Graphics | null): void {
        super.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    damage(damage: i32, damageType: i32): void {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return; }
    }
    

    getDamage(damageType: i32): i32 {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return 0; }
        return 0;
    }
    

    isDestroyed(): bool {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return false; }
        return false;
    }
    

    getGroupInterface(): StaticArray<Group | null> | null {
        return this.groupInterface;
    }
    

    setGroupInterface(teamInterface: StaticArray<Group | null> | null): void {
        this.groupInterface = teamInterface;
    }
    

    setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager | null): void {
        this.allBinaryGameLayerManagerP = allBinaryGameLayerManager;
        if (this.allBinaryGameLayerManagerP == null) {
            { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    isReadyForExplosion(): bool {
        return this.readyForExplosion;
    }
    

    setReadyForExplosion(isReadyForExplosion: bool): void {
        this.readyForExplosion = isReadyForExplosion;
    }
    

    getInitWidth(): i32 {
        return this.initWidth;
    }
    

    getInitHeight(): i32 {
        return this.initHeight;
    }
    

    getInitX(): i32 {
        return this.initX;
    }
    

    getInitY(): i32 {
        return this.initY;
    }
    

    up(): void {
    }
    

    down(): void {
    }
    

    right(): void {
    }
    

    left(): void {
    }
    

    strafeLeft(): void {
    }
    

    strafeRight(): void {
    }
    

    fire(layerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void {
    }
    

    special1(layerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void {
    }
    

    special2(layerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void {
    }
    

    special3(layerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void {
    }
    

    special4(layerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void {
    }
    

    special5(layerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void {
    }
    

    upAnalog(yAnalogValue: i32): void {
    }
    

    downAnalog(yAnalogValue: i32): void {
    }
    

    rightAnalog(xAnalogValue: i32): void {
    }
    

    leftAnalog(xAnalogValue: i32): void {
    }
    

    rightTrigger(layerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null, xAnalogValue: i32): void {
    }
    

    leftTrigger(layerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null, xAnalogValue: i32): void {
    }
    

    onDestroyed(destroyedEvent: DestroyedEvent | null): void {
    }
    

    getPickupBehavior(): PickupBehavior | null {
        return this.pickupBehavior;
    }
    

    setPickupBehavior(pickupBehavior: PickupBehavior | null): void {
        this.pickupBehavior = pickupBehavior;
    }
    

    addPart(pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface | null): void {
    }
    

    setPartInterfaceArray(partInterfaceArray: StaticArray<PartInterface | null> | null): void {
        this.partInterfaceArrayP = partInterfaceArray;
    }
    

    getPartInterfaceArray(): StaticArray<PartInterface | null> | null {
        return this.partInterfaceArrayP;
    }
    

    toStringAppend(stringBuffer: StringMaker | null): void {
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return;
        let positionStrings: PositionStrings | null = PositionStrings.getInstance(); if (JThrowable.pending !== null) return;
        super.toStringAppend(stringBuffer); if (JThrowable.pending !== null) return;
        stringBuffer!.append(commonSeps!.NEW_LINE); if (JThrowable.pending !== null) return;
        let groupInterfaceArray: StaticArray<Group | null> | null = this.getGroupInterface(); if (JThrowable.pending !== null) return;
        let size: i32 = groupInterfaceArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            stringBuffer!.append(JObject.jtoString(groupInterfaceArray![index])); if (JThrowable.pending !== null) return;
            stringBuffer!.append(commonSeps!.COMMA); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let pickupBehavior: PickupBehavior | null = this.getPickupBehavior(); if (JThrowable.pending !== null) return;
        if (pickupBehavior != null) {
            stringBuffer!.append(commonSeps!.NEW_LINE); if (JThrowable.pending !== null) return;
            stringBuffer!.append(JObject.jtoString(pickupBehavior)); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        stringBuffer!.append(commonSeps!.NEW_LINE); if (JThrowable.pending !== null) return;
        stringBuffer!.append(CollidableDestroyableDamageableLayer.READYFOREXPLOSION); if (JThrowable.pending !== null) return;
        stringBuffer!.appendboolean(this.readyForExplosion); if (JThrowable.pending !== null) return;
        stringBuffer!.append(commonSeps!.NEW_LINE); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.commonStrings!.INIT); if (JThrowable.pending !== null) return;
        stringBuffer!.append(commonSeps!.SPACE); if (JThrowable.pending !== null) return;
        stringBuffer!.append(positionStrings!.X_LABEL); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(this.initX); if (JThrowable.pending !== null) return;
        stringBuffer!.append(positionStrings!.Y_LABEL); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(this.initX); if (JThrowable.pending !== null) return;
        stringBuffer!.append(positionStrings!.Z_LABEL); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(this.initZ); if (JThrowable.pending !== null) return;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        this.toStringAppend(stringBuffer); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}


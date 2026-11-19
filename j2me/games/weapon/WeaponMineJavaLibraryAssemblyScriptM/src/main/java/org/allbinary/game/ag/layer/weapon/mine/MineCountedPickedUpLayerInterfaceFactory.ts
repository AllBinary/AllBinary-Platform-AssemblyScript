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
// import org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory
// import org.allbinary.game.combat.weapon.WeaponProperties
// import org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactory
// import org.allbinary.game.layer.pickup.IconLayerFactory
// import org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactoryInterface
// import org.allbinary.game.layer.pickup.PickedUpLayerTypeFactory
// import org.allbinary.game.layer.weapon.WeaponLayerCircularPool
// import org.allbinary.game.score.ScoreableInterface
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.util.ABHashtable

@global export class MineCountedPickedUpLayerInterfaceFactory extends CountedPickedUpLayerInterfaceFactory {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.weapon.mine.MineCountedPickedUpLayerInterfaceFactory";
    }
    @lazy static jv_pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface | null = null;
    @lazy static js_pickedUpLayerInterfaceFactoryInterface: bool = false;
    static get pickedUpLayerInterfaceFactoryInterface(): PickedUpLayerInterfaceFactoryInterface | null {
        if (!MineCountedPickedUpLayerInterfaceFactory.js_pickedUpLayerInterfaceFactoryInterface) {
            MineCountedPickedUpLayerInterfaceFactory.js_pickedUpLayerInterfaceFactoryInterface = true;
            MineCountedPickedUpLayerInterfaceFactory.jv_pickedUpLayerInterfaceFactoryInterface = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;
        }
        return MineCountedPickedUpLayerInterfaceFactory.jv_pickedUpLayerInterfaceFactoryInterface;
    }
    static set pickedUpLayerInterfaceFactoryInterface(value: PickedUpLayerInterfaceFactoryInterface | null) {
        MineCountedPickedUpLayerInterfaceFactory.js_pickedUpLayerInterfaceFactoryInterface = true;
        MineCountedPickedUpLayerInterfaceFactory.jv_pickedUpLayerInterfaceFactoryInterface = value;
    }
    weaponLayerCircularStaticPool: WeaponLayerCircularPool | null = null;
    weaponProperties: WeaponProperties | null = null;
    smallIntegerSingletonFactory: SmallIntegerSingletonFactory | null = null;

    jfields_MineCountedPickedUpLayerInterfaceFactory(): void {
    this.weaponLayerCircularStaticPool = MineLayerCircularStaticPool.getInstance();
    this.weaponProperties = new WeaponProperties().jinit_WeaponProperties_5(-(<i64>1), -(<i64>1), 0, 8000, (<i16>(10)));
    this.smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
    }
    

    static init(): void {
        MineCountedPickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface = new MineCountedPickedUpLayerInterfaceFactory().jinit_MineCountedPickedUpLayerInterfaceFactory_0(); if (JThrowable.pending !== null) return;
    }
    

    jinit_MineCountedPickedUpLayerInterfaceFactory_0(): MineCountedPickedUpLayerInterfaceFactory {
        super.jinit_CountedPickedUpLayerInterfaceFactory_3(PickedUpLayerTypeFactory.getInstance()!.MINE, IconLayerFactory.getInstance3(FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(MineWeaponResources.getInstance()!.DROP_ICON_RESOURCE)!.getInstance1(0), 10, 10), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(MineWeaponResources.getInstance()!.DROP_RESOURCE)!.getInstance1(0));
        this.jfields_MineCountedPickedUpLayerInterfaceFactory();
        return this;
    }
    

    static getInstance(): PickedUpLayerInterfaceFactoryInterface | null {
        return MineCountedPickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface;
    }
    

    getTotal(): i32 {
        return 3;
    }
    

    getNextInstance(hashtable: ABHashtable | null, x: i32, y: i32, z: i32): AllBinaryLayer | null {
        let sourceLayerInterface: AllBinaryLayer | null = changetype<AllBinaryLayer | null>(hashtable!.get(changetype<Object | null>(this.smallIntegerSingletonFactory!.getAt(0)))); if (JThrowable.pending !== null) return null;
        let angle: JInteger | null = changetype<JInteger | null>(hashtable!.get(changetype<Object | null>(this.smallIntegerSingletonFactory!.getAt(1)))); if (JThrowable.pending !== null) return null;
        let scoreableInterface: ScoreableInterface | null = changetype<ScoreableInterface | null>(sourceLayerInterface);
        return this.weaponLayerCircularStaticPool!.getInstanceWeaponLayer(sourceLayerInterface, x, y, z, angle!.intValue(), 0, this.weaponProperties, scoreableInterface);
    }
}


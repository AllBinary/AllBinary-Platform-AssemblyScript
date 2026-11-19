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
// import org.allbinary.game.layer.weapon.WeaponLayerCircularPool
// import org.allbinary.view.ViewPositionFactoryInterface

@global export class MineLayerCircularStaticPool extends JObject {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.weapon.mine.MineLayerCircularStaticPool";
    }
    @lazy static jv_WEAPON_LAYER_CIRCULAR_STATIC_POOL: WeaponLayerCircularPool | null = null;
    @lazy static js_WEAPON_LAYER_CIRCULAR_STATIC_POOL: bool = false;
    static get WEAPON_LAYER_CIRCULAR_STATIC_POOL(): WeaponLayerCircularPool | null {
        if (!MineLayerCircularStaticPool.js_WEAPON_LAYER_CIRCULAR_STATIC_POOL) {
            MineLayerCircularStaticPool.js_WEAPON_LAYER_CIRCULAR_STATIC_POOL = true;
            MineLayerCircularStaticPool.jv_WEAPON_LAYER_CIRCULAR_STATIC_POOL = new WeaponLayerCircularPool().jinit_WeaponLayerCircularPool_0();
        }
        return MineLayerCircularStaticPool.jv_WEAPON_LAYER_CIRCULAR_STATIC_POOL;
    }
    static set WEAPON_LAYER_CIRCULAR_STATIC_POOL(value: WeaponLayerCircularPool | null) {
        MineLayerCircularStaticPool.js_WEAPON_LAYER_CIRCULAR_STATIC_POOL = true;
        MineLayerCircularStaticPool.jv_WEAPON_LAYER_CIRCULAR_STATIC_POOL = value;
    }

    jinit_MineLayerCircularStaticPool_0(): MineLayerCircularStaticPool {
        super.jinit_JObject_0();
        return this;
    }
    

    static init(viewPositionFactoryInterface: ViewPositionFactoryInterface | null): void {
        MineCountedPickedUpLayerInterfaceFactory.init(); if (JThrowable.pending !== null) return;
        MineLayerCircularStaticPool.WEAPON_LAYER_CIRCULAR_STATIC_POOL!.initAllBinaryLayerCircularPool(new MineLayerFactory().jinit_MineLayerFactory_1(viewPositionFactoryInterface), 20); if (JThrowable.pending !== null) return;
    }
    

    static getInstance(): WeaponLayerCircularPool | null {
        return MineLayerCircularStaticPool.WEAPON_LAYER_CIRCULAR_STATIC_POOL;
    }
}


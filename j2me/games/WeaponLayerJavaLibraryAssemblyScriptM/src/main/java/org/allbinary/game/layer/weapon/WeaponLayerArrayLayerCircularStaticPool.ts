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
// import org.allbinary.util.CircularIndexUtil

@global export class WeaponLayerArrayLayerCircularStaticPool extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.weapon.WeaponLayerArrayLayerCircularStaticPool";
    }
    @lazy static jv_instance: WeaponLayerArrayLayerCircularStaticPool | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): WeaponLayerArrayLayerCircularStaticPool | null {
        if (!WeaponLayerArrayLayerCircularStaticPool.js_instance) {
            WeaponLayerArrayLayerCircularStaticPool.js_instance = true;
            WeaponLayerArrayLayerCircularStaticPool.jv_instance = new WeaponLayerArrayLayerCircularStaticPool().jinit_WeaponLayerArrayLayerCircularStaticPool_0();
        }
        return WeaponLayerArrayLayerCircularStaticPool.jv_instance;
    }
    static set instance(value: WeaponLayerArrayLayerCircularStaticPool | null) {
        WeaponLayerArrayLayerCircularStaticPool.js_instance = true;
        WeaponLayerArrayLayerCircularStaticPool.jv_instance = value;
    }
    MAX: i32 = 0;
    circularIndexUtil: CircularIndexUtil | null = null;
    WEAPONLAYER_ARRAY: StaticArray<StaticArray<WeaponLayer | null> | null> | null = null;
    TWO_WEAPONLAYER_ARRAY: StaticArray<StaticArray<WeaponLayer | null> | null> | null = null;
    THREE_WEAPONLAYER_ARRAY: StaticArray<StaticArray<WeaponLayer | null> | null> | null = null;

    jfields_WeaponLayerArrayLayerCircularStaticPool(): void {
    this.MAX = 5;
    this.circularIndexUtil = CircularIndexUtil.createInstance(this.MAX);
    this.WEAPONLAYER_ARRAY = new StaticArray<StaticArray<WeaponLayer | null> | null>(this.MAX * 2);
    this.TWO_WEAPONLAYER_ARRAY = new StaticArray<StaticArray<WeaponLayer | null> | null>(this.MAX);
    this.THREE_WEAPONLAYER_ARRAY = new StaticArray<StaticArray<WeaponLayer | null> | null>(this.MAX);
    }

    jinit_WeaponLayerArrayLayerCircularStaticPool_0(): WeaponLayerArrayLayerCircularStaticPool {
        super.jinit_JObject_0();
        this.jfields_WeaponLayerArrayLayerCircularStaticPool();
        return this;
    }
    

    static getInstance(): WeaponLayerArrayLayerCircularStaticPool | null {
        return WeaponLayerArrayLayerCircularStaticPool.instance;
    }
    

    init(): void {
        for (let index: i32 = 0; index < this.MAX; index++) {
            this.WEAPONLAYER_ARRAY![index] = new StaticArray<WeaponLayer | null>(1);
            this.TWO_WEAPONLAYER_ARRAY![index] = new StaticArray<WeaponLayer | null>(2);
            this.THREE_WEAPONLAYER_ARRAY![index] = new StaticArray<WeaponLayer | null>(3);
        }
        this.WEAPONLAYER_ARRAY = this.WEAPONLAYER_ARRAY;
        this.TWO_WEAPONLAYER_ARRAY = this.TWO_WEAPONLAYER_ARRAY;
        this.THREE_WEAPONLAYER_ARRAY = this.THREE_WEAPONLAYER_ARRAY;
    }
    

    getWeaponLayerArrays(size: i32): StaticArray<StaticArray<WeaponLayer | null> | null> | null {
        if (size == 1) {
            return this.WEAPONLAYER_ARRAY;
        } else if (size == 2) {
            return this.TWO_WEAPONLAYER_ARRAY;
        } else if (size == 3) {
            return this.THREE_WEAPONLAYER_ARRAY;
        }
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getInstanceArray(size: i32): StaticArray<WeaponLayer | null> | null {
        let weaponLayerArray: StaticArray<WeaponLayer | null> | null = this.getWeaponLayerArrays(size)![this.circularIndexUtil!.getIndex()]; if (JThrowable.pending !== null) return null;
        this.circularIndexUtil!.next(); if (JThrowable.pending !== null) return null;
        return weaponLayerArray;
    }
}


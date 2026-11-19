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
// package org.allbinary.input.motion.button
// import org.allbinary.game.input.InputFactory
// import org.allbinary.logic.NullUtil

@global export class CancelTouchButtonInputFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.CancelTouchButtonInputFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!CancelTouchButtonInputFactory.js_instance) {
            CancelTouchButtonInputFactory.js_instance = true;
            CancelTouchButtonInputFactory.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return CancelTouchButtonInputFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        CancelTouchButtonInputFactory.js_instance = true;
        CancelTouchButtonInputFactory.jv_instance = value;
    }
    cancelInputArray: StaticArray<TouchButtonInput | null> | null = null;

    jfields_CancelTouchButtonInputFactory(): void {
    this.cancelInputArray = new StaticArray<TouchButtonInput | null>(InputFactory.getInstance()!.MAX);
    }
    

    static getInstance(): CancelTouchButtonInputFactory | null {
        if (CancelTouchButtonInputFactory.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            CancelTouchButtonInputFactory.instance = new CancelTouchButtonInputFactory().jinit_CancelTouchButtonInputFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<CancelTouchButtonInputFactory | null>(CancelTouchButtonInputFactory.instance);
    }
    

    jinit_CancelTouchButtonInputFactory_0(): CancelTouchButtonInputFactory {
        super.jinit_JObject_0();
        this.jfields_CancelTouchButtonInputFactory();
        let basicTouchInputFactory: BasicTouchInputFactory | null = BasicTouchInputFactory.getInstance(); if (JThrowable.pending !== null) return this;
        for (let index: i32 = this.cancelInputArray!.length - 1; index >= 0; index--) {
            this.cancelInputArray![index] = basicTouchInputFactory!.NONE;
        }
        this.cancelInputArray![basicTouchInputFactory!.UP!.getId()] = basicTouchInputFactory!.DOWN; if (JThrowable.pending !== null) return this;
        this.cancelInputArray![basicTouchInputFactory!.DOWN!.getId()] = basicTouchInputFactory!.UP; if (JThrowable.pending !== null) return this;
        this.cancelInputArray![basicTouchInputFactory!.LEFT!.getId()] = basicTouchInputFactory!.RIGHT; if (JThrowable.pending !== null) return this;
        this.cancelInputArray![basicTouchInputFactory!.RIGHT!.getId()] = basicTouchInputFactory!.LEFT; if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getCancel(touchButtonInput: TouchButtonInput | null): TouchButtonInput | null {
        return this.cancelInputArray![touchButtonInput!.getId()];
    }
}


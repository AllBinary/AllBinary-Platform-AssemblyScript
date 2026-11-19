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
// package org.allbinary.media.audio

@global export class EarlySoundsFactory extends BaseSoundsFactory {

    jclassName(): string {
        return "org.allbinary.media.audio.EarlySoundsFactory";
    }
    @lazy static jv_instance: EarlySoundsFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): EarlySoundsFactory | null {
        if (!EarlySoundsFactory.js_instance) {
            EarlySoundsFactory.js_instance = true;
            EarlySoundsFactory.jv_instance = new EarlySoundsFactory().jinit_EarlySoundsFactory_0();
        }
        return EarlySoundsFactory.jv_instance;
    }
    static set instance(value: EarlySoundsFactory | null) {
        EarlySoundsFactory.js_instance = true;
        EarlySoundsFactory.jv_instance = value;
    }

    jinit_EarlySoundsFactory_0(): EarlySoundsFactory {
        super.jinit_BaseSoundsFactory_0();
        return this;
    }
    

    getSoundInterfaceArray(): StaticArray<Sound | null> | null {
        let soundInterfaceArray: StaticArray<Sound | null> | null = new StaticArray<Sound | null>(2);
        let index: i32 = 0;
        soundInterfaceArray![index++] = SelectSound.getInstance(); if (JThrowable.pending !== null) return null;
        soundInterfaceArray![index++] = ErrorSound.getInstance(); if (JThrowable.pending !== null) return null;
        return soundInterfaceArray;
    }
    

    static getInstance(): EarlySoundsFactory | null {
        return EarlySoundsFactory.instance;
    }
}


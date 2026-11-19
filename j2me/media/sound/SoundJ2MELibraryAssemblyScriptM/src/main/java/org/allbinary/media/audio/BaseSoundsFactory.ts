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

@global export class BaseSoundsFactory extends JObject implements SoundsFactoryInterface {

    jclassName(): string {
        return "org.allbinary.media.audio.BaseSoundsFactory";
    }
    initialized: bool = false;

    jfields_BaseSoundsFactory(): void {
    this.initialized = false;
    }

    jinit_BaseSoundsFactory_0(): BaseSoundsFactory {
        super.jinit_JObject_0();
        this.jfields_BaseSoundsFactory();
        return this;
    }
    

    init(): void {
    }
    

    getSoundInterfaceArray(): StaticArray<Sound | null> | null {
        return changetype<StaticArray<Sound | null> | null>(new StaticArray<Sound | null>(0));
    }
    

    setInitialized(initialized: bool): void {
        this.initialized = initialized;
    }
    

    isInitialized(): bool {
        return this.initialized;
    }
}


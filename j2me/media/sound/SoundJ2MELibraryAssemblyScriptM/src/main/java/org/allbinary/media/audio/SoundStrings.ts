/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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

@global export class SoundStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.media.audio.SoundStrings";
    }
    @lazy static jv_instance: SoundStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): SoundStrings | null {
        if (!SoundStrings.js_instance) {
            SoundStrings.js_instance = true;
            SoundStrings.jv_instance = new SoundStrings().jinit_SoundStrings_0();
        }
        return SoundStrings.jv_instance;
    }
    static set instance(value: SoundStrings | null) {
        SoundStrings.js_instance = true;
        SoundStrings.jv_instance = value;
    }
    STOP_ALL: string | null = null;
    CLOSE_ALL: string | null = null;
    SOUND: string | null = null;
    INIT_SOUND: string | null = null;
    STOPPING_SOUND: string | null = null;
    CLOSING_SOUND: string | null = null;

    jfields_SoundStrings(): void {
    this.STOP_ALL = "stopAll";
    this.CLOSE_ALL = "closeAll";
    this.SOUND = " Sound: ";
    this.INIT_SOUND = "Initializing Sound: ";
    this.STOPPING_SOUND = "Stopping Sound: ";
    this.CLOSING_SOUND = "Closing Sound: ";
    }

    jinit_SoundStrings_0(): SoundStrings {
        super.jinit_JObject_0();
        this.jfields_SoundStrings();
        return this;
    }
    

    static getInstance(): SoundStrings | null {
        return SoundStrings.instance;
    }
}


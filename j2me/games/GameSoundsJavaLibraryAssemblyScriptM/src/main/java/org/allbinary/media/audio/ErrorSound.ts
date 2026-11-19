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

@global export class ErrorSound extends CompositeSound {

    jclassName(): string {
        return "org.allbinary.media.audio.ErrorSound";
    }
    @lazy static jv_soundInterface: Sound | null = null;
    @lazy static js_soundInterface: bool = false;
    static get soundInterface(): Sound | null {
        if (!ErrorSound.js_soundInterface) {
            ErrorSound.js_soundInterface = true;
            ErrorSound.jv_soundInterface = new ErrorSound().jinit_ErrorSound_0();
        }
        return ErrorSound.jv_soundInterface;
    }
    static set soundInterface(value: Sound | null) {
        ErrorSound.js_soundInterface = true;
        ErrorSound.jv_soundInterface = value;
    }
    

    jinit_ErrorSound_0(): ErrorSound {
        super.jinit_CompositeSound_1("resource:/wav/error.wav");
        return this;
    }
    

    static getInstance(): Sound | null {
        return ErrorSound.soundInterface;
    }
}


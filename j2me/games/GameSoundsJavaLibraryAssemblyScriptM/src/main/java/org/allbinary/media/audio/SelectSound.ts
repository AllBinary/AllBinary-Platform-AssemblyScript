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

//Use 8hz16bitmono for most J2ME
@global export class SelectSound extends CompositeSound {

    jclassName(): string {
        return "org.allbinary.media.audio.SelectSound";
    }
    @lazy static jv_soundInterface: Sound | null = null;
    @lazy static js_soundInterface: bool = false;
    static get soundInterface(): Sound | null {
        if (!SelectSound.js_soundInterface) {
            SelectSound.js_soundInterface = true;
            SelectSound.jv_soundInterface = new SelectSound().jinit_SelectSound_0();
        }
        return SelectSound.jv_soundInterface;
    }
    static set soundInterface(value: Sound | null) {
        SelectSound.js_soundInterface = true;
        SelectSound.jv_soundInterface = value;
    }
    

    jinit_SelectSound_0(): SelectSound {
        super.jinit_CompositeSound_1("resource:/wav/select.wav");
        return this;
    }
    

    static getInstance(): Sound | null {
        return SelectSound.soundInterface;
    }
}


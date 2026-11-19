/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// import org.allbinary.logic.string.StringUtil

@global export class NoSound extends Sound {

    jclassName(): string {
        return "org.allbinary.media.audio.NoSound";
    }
    @lazy static jv_instance: NoSound | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): NoSound | null {
        if (!NoSound.js_instance) {
            NoSound.js_instance = true;
            NoSound.jv_instance = new NoSound().jinit_NoSound_0();
        }
        return NoSound.jv_instance;
    }
    static set instance(value: NoSound | null) {
        NoSound.js_instance = true;
        NoSound.jv_instance = value;
    }
    

    static getInstance(): NoSound | null {
        return NoSound.instance;
    }
    

    jinit_NoSound_0(): NoSound {
        super.jinit_Sound_1(StringUtil.getInstance()!.EMPTY_STRING);
        this.setPlayerP(NoPlayer.NO_PLAYER); if (JThrowable.pending !== null) return this;
        return this;
    }
}


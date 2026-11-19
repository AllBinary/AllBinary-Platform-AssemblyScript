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
@global export class GameYouWinSound extends CompositeSound {

    jclassName(): string {
        return "org.allbinary.media.audio.GameYouWinSound";
    }
    @lazy static jv_soundInterface: Sound | null = null;
    @lazy static js_soundInterface: bool = false;
    static get soundInterface(): Sound | null {
        if (!GameYouWinSound.js_soundInterface) {
            GameYouWinSound.js_soundInterface = true;
            GameYouWinSound.jv_soundInterface = new GameYouWinSound().jinit_GameYouWinSound_0();
        }
        return GameYouWinSound.jv_soundInterface;
    }
    static set soundInterface(value: Sound | null) {
        GameYouWinSound.js_soundInterface = true;
        GameYouWinSound.jv_soundInterface = value;
    }
    

    jinit_GameYouWinSound_0(): GameYouWinSound {
        super.jinit_CompositeSound_1("resource:/wav/youwin.wav");
        return this;
    }
    

    static getInstance(): Sound | null {
        return GameYouWinSound.soundInterface;
    }
}


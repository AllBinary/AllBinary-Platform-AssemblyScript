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
// import javax.microedition.media.Control
// import org.allbinary.logic.string.StringUtil

@global export class NoPlayer extends BasicPlayer {

    jclassName(): string {
        return "org.allbinary.media.audio.NoPlayer";
    }
    @lazy static jv_NO_PLAYER: NoPlayer | null = null;
    @lazy static js_NO_PLAYER: bool = false;
    static get NO_PLAYER(): NoPlayer | null {
        if (!NoPlayer.js_NO_PLAYER) {
            NoPlayer.js_NO_PLAYER = true;
            NoPlayer.jv_NO_PLAYER = new NoPlayer().jinit_NoPlayer_0();
        }
        return NoPlayer.jv_NO_PLAYER;
    }
    static set NO_PLAYER(value: NoPlayer | null) {
        NoPlayer.js_NO_PLAYER = true;
        NoPlayer.jv_NO_PLAYER = value;
    }
    

    jinit_NoPlayer_0(): NoPlayer {
        super.jinit_BasicPlayer_0();
        return this;
    }
    

    close(): void {
    }
    

    getContentType(): string | null {
        return StringUtil.getInstance()!.NULL_STRING;
    }
    

    getControl(controlType: string | null): Control | null {
        return new NullControl().jinit_NullControl_0();
    }
    

    getControls(): StaticArray<Control | null> | null {
        return changetype<StaticArray<Control | null> | null>(new StaticArray<Control | null>(0));
    }
}


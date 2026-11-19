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
// import javax.microedition.media.Player
// import org.allbinary.string.CommonStrings

@global export class PlayerStateUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.media.audio.PlayerStateUtil";
    }
    @lazy static jv_instance: PlayerStateUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PlayerStateUtil | null {
        if (!PlayerStateUtil.js_instance) {
            PlayerStateUtil.js_instance = true;
            PlayerStateUtil.jv_instance = new PlayerStateUtil().jinit_PlayerStateUtil_0();
        }
        return PlayerStateUtil.jv_instance;
    }
    static set instance(value: PlayerStateUtil | null) {
        PlayerStateUtil.js_instance = true;
        PlayerStateUtil.jv_instance = value;
    }
    commonStrings: CommonStrings | null = null;
    UNREALIZED: string | null = null;
    REALIZED: string | null = null;
    PREFETCHED: string | null = null;
    STARTED: string | null = null;
    CLOSED: string | null = null;

    jfields_PlayerStateUtil(): void {
    this.commonStrings = CommonStrings.getInstance();
    this.UNREALIZED = "UNREALIZED";
    this.REALIZED = "REALIZED";
    this.PREFETCHED = "PREFETCHED";
    this.STARTED = "STARTED";
    this.CLOSED = "CLOSED";
    }

    jinit_PlayerStateUtil_0(): PlayerStateUtil {
        super.jinit_JObject_0();
        this.jfields_PlayerStateUtil();
        return this;
    }
    

    static getInstance(): PlayerStateUtil | null {
        return PlayerStateUtil.instance;
    }
    

    convert(state: i32): string | null {
        if (state == Player_JStatics.UNREALIZED) {
            return this.UNREALIZED;
        } else if (state == Player_JStatics.REALIZED) {
            return this.REALIZED;
        } else if (state == Player_JStatics.PREFETCHED) {
            return this.PREFETCHED;
        } else if (state == Player_JStatics.STARTED) {
            return this.STARTED;
        } else if (state == Player_JStatics.CLOSED) {
            return this.CLOSED;
        }
        return this.commonStrings!.UNKNOWN;
    }
}


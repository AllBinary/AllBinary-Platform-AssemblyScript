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
// import javax.microedition.media.Player
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.string.CommonStrings

@global export class Sound extends JObject implements SoundInterface, JRunnable {

    jclassName(): string {
        return "org.allbinary.media.audio.Sound";
    }
    resource: string | null = null;
    player: Player | null = null;

    jfields_Sound(): void {
    
    this.player = NoPlayer.NO_PLAYER;
    }
    

    jinit_Sound_1(resource: string | null): Sound {
        super.jinit_JObject_0();
        this.jfields_Sound();
        this.resource = resource;
        return this;
    }
    

    getResource(): string | null {
        return this.resource;
    }
    

    getPlayerP(): Player | null {
        return this.player;
    }
    

    setPlayerP(player: Player | null): void {
        this.player = player;
    }
    

    init(): void {
    }
    

    getDuration(): i32 {
        return -1;
    }
    

    run(): void {
        do {
            this.player!.start(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            PreLogUtil.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}


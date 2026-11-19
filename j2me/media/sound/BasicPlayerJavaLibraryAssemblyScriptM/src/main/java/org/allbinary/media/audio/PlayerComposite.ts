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
// import javax.microedition.media.Controllable
// import javax.microedition.media.Player
// import javax.microedition.media.PlayerListener
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.time.GameTickTimeDelayHelper
// import org.allbinary.time.GameTickTimeDelayHelperFactory
// import org.allbinary.time.TimeDelayHelper

//BasicPlayer
@global export class PlayerComposite extends JObject implements Controllable, Player {

    jclassName(): string {
        return "org.allbinary.media.audio.PlayerComposite";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    player: Player | null = null;
    timeElapsedHelper: TimeDelayHelper | null = null;
    gameTickTimeDelayHelper: GameTickTimeDelayHelper | null = null;

    jfields_PlayerComposite(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    this.timeElapsedHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(0);
    this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
    }
    

    jinit_PlayerComposite_2(player: Player | null, repeatTime: i32): PlayerComposite {
        super.jinit_JObject_0();
        this.jfields_PlayerComposite();
        this.player = player;
        this.timeElapsedHelper!.delay = repeatTime;
        return this;
    }
    

    addPlayerListener(playerListener: PlayerListener | null): void {
        this.player!.addPlayerListener(playerListener); if (JThrowable.pending !== null) return;
    }
    

    removePlayerListener(playerListener: PlayerListener | null): void {
        this.player!.removePlayerListener(playerListener); if (JThrowable.pending !== null) return;
    }
    

    close(): void {
        this.player!.close(); if (JThrowable.pending !== null) return;
    }
    

    deallocate(): void {
        this.player!.deallocate(); if (JThrowable.pending !== null) return;
    }
    

    getContentType(): string | null {
        return this.player!.getContentType();
    }
    

    getDuration(): i64 {
        return this.player!.getDuration();
    }
    

    getMediaTime(): i64 {
        return this.player!.getMediaTime();
    }
    

    prefetch(): void {
        do {
            this.player!.prefetch(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "prefetch", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    realize(): void {
        do {
            this.player!.realize(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "realize", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getState(): i32 {
        return this.player!.getState();
    }
    

    setLoopCount(count: i32): void {
        this.player!.setLoopCount(count); if (JThrowable.pending !== null) return;
    }
    

    setMediaTime(now: i64): i64 {
        do {
            return this.player!.setMediaTime(now);
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "setMediaTime", e); if (JThrowable.pending !== null) return 0;
            return (<i64>(-1));
        } if (JThrowable.pending !== null) return 0;
        return 0;
    }
    

    start(): void {
        do {
            if (this.timeElapsedHelper!.isTime(this.gameTickTimeDelayHelper!.startTime)) {
                this.player!.start(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.START_METHOD_NAME, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    stop(): void {
        do {
            this.player!.stop(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "stop", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getControl(controlType: string | null): Control | null {
        return this.player!.getControl(controlType);
    }
    

    getControls(): StaticArray<Control | null> | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    setVolume(leftVolume: i32, rightVolume: i32): void {
        let controllable2: Controllable2 | null = (changetype<Controllable2 | null>(this.player));
        controllable2!.setVolume(leftVolume, rightVolume); if (JThrowable.pending !== null) return;
    }
    

    getPlayerP(): Player | null {
        return this.player;
    }
}


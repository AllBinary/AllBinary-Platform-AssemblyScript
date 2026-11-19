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
// import javax.microedition.media.MediaException
// import javax.microedition.media.Player
// import javax.microedition.media.PlayerListener
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

//BasicPlayerJavaLibrary
@global export class BasicPlayer extends JObject implements Player, Controllable2 {

    jclassName(): string {
        return "org.allbinary.media.audio.BasicPlayer";
    }
    @lazy static CONTROL_TYPE: string | null = "ToneControl";
    commonStrings: CommonStrings | null = null;
    listenersList: BasicArrayList | null = null;
    stateP: i32 = 0;
    loopCountP: i32 = 0;

    jfields_BasicPlayer(): void {
    this.commonStrings = CommonStrings.getInstance();
    this.listenersList = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.stateP = 0;
    this.loopCountP = 0;
    }
    

    jinit_BasicPlayer_0(): BasicPlayer {
        super.jinit_JObject_0();
        this.jfields_BasicPlayer();
        this.setLoopCount(0); if (JThrowable.pending !== null) return this;
        this.setState(Player_JStatics.UNREALIZED); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getContentType(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    getControl(controlType: string | null): Control | null {
        return new NullControl().jinit_NullControl_0();
    }
    

    getControls(): StaticArray<Control | null> | null {
        return changetype<StaticArray<Control | null> | null>(new StaticArray<Control | null>(0));
    }
    

    close(): void {
    }
    

    addPlayerListener(playerListener: PlayerListener | null): void {
        if (!this.listenersList!.contains(playerListener)) {
            this.listenersList!.add(playerListener); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removePlayerListener(playerListener: PlayerListener | null): void {
        this.listenersList!.remove(playerListener); if (JThrowable.pending !== null) return;
    }
    

    getState(): i32 {
        return this.stateP;
    }
    

    setState(state: i32): void {
        this.stateP = state;
    }
    

    getDuration(): i64 {
        return (<i64>0);
    }
    

    getMediaTime(): i64 {
        return (<i64>0);
    }
    

    deallocate(): void {
    }
    

    prefetch(): void {
    }
    

    realize(): void {
    }
    

    setLoopCount(count: i32): void {
        this.loopCountP = count;
    }
    

    getLoopCount(): i32 {
        return this.loopCountP;
    }
    

    setMediaTime(now: i64): i64 {
        return (<i64>0);
    }
    

    start(): void {
        this.setState(Player_JStatics.STARTED); if (JThrowable.pending !== null) return;
    }
    

    stop(): void {
        this.setState(Player_JStatics.PREFETCHED); if (JThrowable.pending !== null) return;
    }
    

    setVolume(leftVolume: i32, rightVolume: i32): void {
    }
}


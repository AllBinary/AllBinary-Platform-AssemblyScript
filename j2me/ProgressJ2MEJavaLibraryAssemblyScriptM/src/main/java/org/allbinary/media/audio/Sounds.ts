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
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvas
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonStrings

@global export class Sounds extends JObject {

    jclassName(): string {
        return "org.allbinary.media.audio.Sounds";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    soundStrings: SoundStrings | null = null;
    soundsFactoryInterface: SoundsFactoryInterface | null = null;

    jfields_Sounds(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.soundStrings = SoundStrings.getInstance();
    
    }
    

    jinit_Sounds_1(soundsFactoryInterface: SoundsFactoryInterface | null): Sounds {
        super.jinit_JObject_0();
        this.jfields_Sounds();
        this.soundsFactoryInterface = soundsFactoryInterface;
        return this;
    }
    

    init(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.INIT); if (JThrowable.pending !== null) return;
        let commonLabels: CommonLabels | null = CommonLabels.getInstance(); if (JThrowable.pending !== null) return;
        let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) return;
        this.soundsFactoryInterface!.init(); if (JThrowable.pending !== null) return;
        let soundInterfaceArray: StaticArray<Sound | null> | null = this.soundsFactoryInterface!.getSoundInterfaceArray(); if (JThrowable.pending !== null) return;
        let smallIntegerSingletonFactory: SmallIntegerSingletonFactory | null = SmallIntegerSingletonFactory.getInstance(); if (JThrowable.pending !== null) return;
        let indexInteger: JInteger | null = null;
        let indexString: string | null = null;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        for (let i: i32 = 0; i < soundInterfaceArray!.length; i++) {
            let soundInterface: Sound | null = soundInterfaceArray![i];
            if (soundInterface != null) {
                indexInteger = smallIntegerSingletonFactory!.getAt(i); if (JThrowable.pending !== null) return;
                indexString = JObject.jtoString(indexInteger); if (JThrowable.pending !== null) return;
                stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return;
                stringBuffer!.append(commonLabels!.INDEX_LABEL); if (JThrowable.pending !== null) return;
                stringBuffer!.append(indexString); if (JThrowable.pending !== null) return;
                stringBuffer!.append(this.soundStrings!.SOUND); if (JThrowable.pending !== null) return;
                stringBuffer!.append(JObject.jclassOf(soundInterface)!.getName()); if (JThrowable.pending !== null) return;
                this.logUtil!.putF(JObject.jtoString(stringBuffer), this, this.commonStrings!.INIT); if (JThrowable.pending !== null) return;
                soundInterface!.init(); if (JThrowable.pending !== null) return;
                progressCanvas!.addNormalPortion(100, JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.soundStrings!.INIT_SOUND)!.append(indexString))); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.soundsFactoryInterface!.setInitialized(true); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(this.commonStrings!.END, this, this.commonStrings!.INIT); if (JThrowable.pending !== null) return;
    }
    

    stopAll(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.soundStrings!.STOP_ALL); if (JThrowable.pending !== null) return;
        let soundInterfaceArray: StaticArray<Sound | null> | null = this.soundsFactoryInterface!.getSoundInterfaceArray(); if (JThrowable.pending !== null) return;
        let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) return;
        let player: Player | null = null;
        for (let index: i32 = 0; index < soundInterfaceArray!.length; index++) {
            if (soundInterfaceArray![index] != null) {
                player = soundInterfaceArray![index]!.getPlayerP(); if (JThrowable.pending !== null) return;
                if (player != null) {
                    player!.stop(); if (JThrowable.pending !== null) return;
                    progressCanvas!.addPortion(100, this.soundStrings!.STOPPING_SOUND, index); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    closeAll(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.soundStrings!.CLOSE_ALL); if (JThrowable.pending !== null) return;
        let soundInterfaceArray: StaticArray<Sound | null> | null = this.soundsFactoryInterface!.getSoundInterfaceArray(); if (JThrowable.pending !== null) return;
        let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) return;
        let player: Player | null = null;
        for (let index: i32 = 0; index < soundInterfaceArray!.length; index++) {
            if (soundInterfaceArray![index] != null) {
                player = soundInterfaceArray![index]!.getPlayerP(); if (JThrowable.pending !== null) return;
                if (player != null) {
                    player!.close(); if (JThrowable.pending !== null) return;
                    progressCanvas!.addPortion(100, this.soundStrings!.CLOSING_SOUND, index); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}


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
// import java.io.InputStream
// import javax.microedition.media.Manager
// import javax.microedition.media.MediaException
// import javax.microedition.media.Player
// import org.allbinary.MIDPUtil
// import org.allbinary.TsUtil
// import org.allbinary.audio.AudioContentTypeDataFactory
// import org.allbinary.data.resource.ResourceUtil
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.GameFeatureFactory
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

//NotDeviceSpecificMIDP2JavaLibrary
@global export class AllBinaryMediaManager extends JObject {

    jclassName(): string {
        return "org.allbinary.media.audio.AllBinaryMediaManager";
    }
    @lazy static readonly THIS: string | null = "AllBinaryMediaManagerNoMIPD2";
    

    jinit_AllBinaryMediaManager_0(): AllBinaryMediaManager {
        super.jinit_JObject_0();
        return this;
    }
    

    static isMuted(): bool {
        return false;
    }
    

    static setMuted(aMuted: bool): void {
    }
    

    static update(): bool {
        return true;
    }
    

    static init(soundsFactoryInterface: SoundsFactoryInterface | null): void {
        let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return;
        let commonString: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
        logUtil!.putF(commonString!.START, AllBinaryMediaManager.THIS, commonString!.INIT); if (JThrowable.pending !== null) return;
        ProgressCanvasFactory.getInstance()!.addNormalPortion(50, "Media Manager"); if (JThrowable.pending !== null) return;
        new Sounds().jinit_Sounds_1(soundsFactoryInterface)!.init(); if (JThrowable.pending !== null) return;
    }
    

    static shutdown(soundsFactoryInterface: SoundsFactoryInterface | null): void {
        new Sounds().jinit_Sounds_1(soundsFactoryInterface)!.stopAll(); if (JThrowable.pending !== null) return;
        new Sounds().jinit_Sounds_1(soundsFactoryInterface)!.closeAll(); if (JThrowable.pending !== null) return;
        TsUtil.getInstance()!.gc(); if (JThrowable.pending !== null) return;
    }
    

    static createPlayer(resource: string | null): Player | null {
        if (Features.getInstance()!.isFeature(GameFeatureFactory.getInstance()!.SOUND)) {
            if (TsUtil.getInstance()!.compareTo(resource, Manager.TONE_DEVICE_LOCATOR) == 0) {
                return Manager.createPlayer(resource);
            } else {
                let inputStream: JInputStream | null = ResourceUtil.getInstance()!.getResourceAsStream(resource); if (JThrowable.pending !== null) return null;
                return MIDPUtil.getInstance()!.createPlayerFromInputStream(inputStream, AudioContentTypeDataFactory.getInstance()!.MIME_AUDIO_WAV!.getName());
            } if (JThrowable.pending !== null) return null;
        } else {
            return NoPlayer.NO_PLAYER;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    static playTone(frequency: i32, time: i32, volume: i32): void {
        if (Features.getInstance()!.isFeature(GameFeatureFactory.getInstance()!.SOUND)) {
            Manager.playTone(frequency, time, volume); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}


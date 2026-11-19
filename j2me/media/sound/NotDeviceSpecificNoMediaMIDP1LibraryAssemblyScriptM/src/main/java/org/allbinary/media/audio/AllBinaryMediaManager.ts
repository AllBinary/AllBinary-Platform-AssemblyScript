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
// import javax.microedition.media.Player
// import org.allbinary.TsUtil
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings

//NotDeviceSpecificNoMediaMIDP1Library
@global export class AllBinaryMediaManager extends JObject {

    jclassName(): string {
        return "org.allbinary.media.audio.AllBinaryMediaManager";
    }
    @lazy static readonly THIS: string | null = "AllBinaryMediaManagerNoMediaMIDP1";
    

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
    

    static createPlayerFromInputStream(stream: JInputStream | null, type: string | null): Player | null {
        let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return null;
        let commonString: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
        logUtil!.putF(commonString!.START, AllBinaryMediaManager.THIS, "creatPlayer(InputStream)"); if (JThrowable.pending !== null) return null;
        return changetype<Player | null>(NoPlayer.NO_PLAYER);
    }
    

    static createPlayer(locator: string | null): Player | null {
        let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return null;
        let commonString: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
        logUtil!.putF(commonString!.START, AllBinaryMediaManager.THIS, "creatPlayer(locator)"); if (JThrowable.pending !== null) return null;
        return changetype<Player | null>(NoPlayer.NO_PLAYER);
    }
    

    static playTone(frequency: i32, time: i32, volume: i32): void {
    }
    

    static getSupportedContentTypes(protocol: string | null): StaticArray<string | null> | null {
        return StringUtil.getInstance()!.getArrayInstance();
    }
    

    static getSupportedProtocols(content_type: string | null): StaticArray<string | null> | null {
        return StringUtil.getInstance()!.getArrayInstance();
    }
}


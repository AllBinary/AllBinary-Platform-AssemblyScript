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
// package org.allbinary.audio

@global export class AudioContentTypeDataFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.audio.AudioContentTypeDataFactory";
    }
    @lazy static jv_instance: AudioContentTypeDataFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AudioContentTypeDataFactory | null {
        if (!AudioContentTypeDataFactory.js_instance) {
            AudioContentTypeDataFactory.js_instance = true;
            AudioContentTypeDataFactory.jv_instance = new AudioContentTypeDataFactory().jinit_AudioContentTypeDataFactory_0();
        }
        return AudioContentTypeDataFactory.jv_instance;
    }
    static set instance(value: AudioContentTypeDataFactory | null) {
        AudioContentTypeDataFactory.js_instance = true;
        AudioContentTypeDataFactory.jv_instance = value;
    }
    MIME_AUDIO_TONE: AudioContentTypeData | null = null;
    MIME_AUDIO_AMR: AudioContentTypeData | null = null;
    MIME_AUDIO_AMR_WB: AudioContentTypeData | null = null;
    MIME_AUDIO_WAV: AudioContentTypeData | null = null;
    MIME_AUDIO_MIDI: AudioContentTypeData | null = null;
    MIME_AUDIO_SP_MIDI: AudioContentTypeData | null = null;

    jfields_AudioContentTypeDataFactory(): void {
    this.MIME_AUDIO_TONE = new AudioContentTypeData().jinit_AudioContentTypeData_1("audio/x-tone-seq");
    this.MIME_AUDIO_AMR = new AudioContentTypeData().jinit_AudioContentTypeData_1("audio/amr");
    this.MIME_AUDIO_AMR_WB = new AudioContentTypeData().jinit_AudioContentTypeData_1("audio/amr-wb");
    this.MIME_AUDIO_WAV = new AudioContentTypeData().jinit_AudioContentTypeData_1("audio/x-wav");
    this.MIME_AUDIO_MIDI = new AudioContentTypeData().jinit_AudioContentTypeData_1("audio/midi");
    this.MIME_AUDIO_SP_MIDI = new AudioContentTypeData().jinit_AudioContentTypeData_1("audio/sp-midi");
    }
    

    static getInstance(): AudioContentTypeDataFactory | null {
        return AudioContentTypeDataFactory.instance;
    }
    

    jinit_AudioContentTypeDataFactory_0(): AudioContentTypeDataFactory {
        super.jinit_JObject_0();
        this.jfields_AudioContentTypeDataFactory();
        return this;
    }
}


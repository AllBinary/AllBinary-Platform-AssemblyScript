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
// package org.allbinary.logic.visual.media

@global export class MediaTypeData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.media.MediaTypeData";
    }
    @lazy static jv_instance: MediaTypeData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): MediaTypeData | null {
        if (!MediaTypeData.js_instance) {
            MediaTypeData.js_instance = true;
            MediaTypeData.jv_instance = new MediaTypeData().jinit_MediaTypeData_0();
        }
        return MediaTypeData.jv_instance;
    }
    static set instance(value: MediaTypeData | null) {
        MediaTypeData.js_instance = true;
        MediaTypeData.jv_instance = value;
    }
    RESIZABLE_MEDIA: string | null = null;
    NOT_RESIZABLE_MEDIA: string | null = null;

    jfields_MediaTypeData(): void {
    this.RESIZABLE_MEDIA = "RESIZABLE_MEDIA";
    this.NOT_RESIZABLE_MEDIA = "NOT_RESIZABLE_MEDIA";
    }
    

    static getInstance(): MediaTypeData | null {
        return MediaTypeData.instance;
    }
    

    jinit_MediaTypeData_0(): MediaTypeData {
        super.jinit_JObject_0();
        this.jfields_MediaTypeData();
        return this;
    }
}


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

@global export class MediaDataFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.media.MediaDataFactory";
    }
    @lazy static jv_instance: MediaDataFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): MediaDataFactory | null {
        if (!MediaDataFactory.js_instance) {
            MediaDataFactory.js_instance = true;
            MediaDataFactory.jv_instance = new MediaDataFactory().jinit_MediaDataFactory_0();
        }
        return MediaDataFactory.jv_instance;
    }
    static set instance(value: MediaDataFactory | null) {
        MediaDataFactory.js_instance = true;
        MediaDataFactory.jv_instance = value;
    }
    AVI: MediaData | null = null;
    BMP: MediaData | null = null;
    CEL: MediaData | null = null;
    FITS: MediaData | null = null;
    FLI: MediaData | null = null;
    GBR: MediaData | null = null;
    GIF: MediaData | null = null;
    GIH: MediaData | null = null;
    JPG: MediaData | null = null;
    PIX: MediaData | null = null;
    PNG: MediaData | null = null;
    PNM: MediaData | null = null;
    PSD: MediaData | null = null;
    PSP: MediaData | null = null;
    PS: MediaData | null = null;
    SGI: MediaData | null = null;
    SWF: MediaData | null = null;
    TGA: MediaData | null = null;
    TIFF: MediaData | null = null;
    WMF: MediaData | null = null;

    jfields_MediaDataFactory(): void {
    this.AVI = new MediaData().jinit_MediaData_1("avi");
    this.BMP = new MediaData().jinit_MediaData_1("bmp");
    this.CEL = new MediaData().jinit_MediaData_1("cel");
    this.FITS = new MediaData().jinit_MediaData_1("fits");
    this.FLI = new MediaData().jinit_MediaData_1("fli");
    this.GBR = new MediaData().jinit_MediaData_1("gbr");
    this.GIF = new MediaData().jinit_MediaData_1("gif");
    this.GIH = new MediaData().jinit_MediaData_1("gih");
    this.JPG = new MediaData().jinit_MediaData_1("jpg");
    this.PIX = new MediaData().jinit_MediaData_1("pix");
    this.PNG = new MediaData().jinit_MediaData_1("png");
    this.PNM = new MediaData().jinit_MediaData_1("pnm");
    this.PSD = new MediaData().jinit_MediaData_1("psd");
    this.PSP = new MediaData().jinit_MediaData_1("psp");
    this.PS = new MediaData().jinit_MediaData_1("ps");
    this.SGI = new MediaData().jinit_MediaData_1("SGI");
    this.SWF = new MediaData().jinit_MediaData_1("swf");
    this.TGA = new MediaData().jinit_MediaData_1("tga");
    this.TIFF = new MediaData().jinit_MediaData_1("tiff");
    this.WMF = new MediaData().jinit_MediaData_1("wmf");
    }

    jinit_MediaDataFactory_0(): MediaDataFactory {
        super.jinit_JObject_0();
        this.jfields_MediaDataFactory();
        return this;
    }
    

    static getInstance(): MediaDataFactory | null {
        return MediaDataFactory.instance;
    }
}


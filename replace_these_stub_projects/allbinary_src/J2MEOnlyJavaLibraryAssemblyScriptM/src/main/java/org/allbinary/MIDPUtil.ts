/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2026 AllBinary
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
// package org.allbinary
// import java.io.IOException
// import java.io.InputStream
// import javax.microedition.lcdui.Form
// import javax.microedition.lcdui.Image
// import javax.microedition.lcdui.LcduiItem
// import javax.microedition.media.Manager
// import javax.microedition.media.MediaException
// import javax.microedition.media.Player

//like microemu-playn, so the languages without overloading can be generated. J2ME uses the MIDP overloads.
@global export class MIDPUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.MIDPUtil";
    }
    @lazy static jv_instance: MIDPUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): MIDPUtil | null {
        if (!MIDPUtil.js_instance) {
            MIDPUtil.js_instance = true;
            MIDPUtil.jv_instance = new MIDPUtil().jinit_MIDPUtil_0();
        }
        return MIDPUtil.jv_instance;
    }
    static set instance(value: MIDPUtil | null) {
        MIDPUtil.js_instance = true;
        MIDPUtil.jv_instance = value;
    }

    jinit_MIDPUtil_0(): MIDPUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): MIDPUtil | null {
        return MIDPUtil.instance;
    }
    

    createImageWH(width: i32, height: i32): Image | null {
        return Image.createImageWH(width, height);
    }
    

    createImageFromByteArray(imageData: StaticArray<i8> | null, imageOffset: i32, imageLength: i32): Image | null {
        return Image.createImageFromByteArray(imageData, imageOffset, imageLength);
    }
    

    createImageFromInputStream(inputStream: JInputStream | null): Image | null {
        return Image.createImageFromInputStream(inputStream);
    }
    

    createPlayerFromInputStream(inputStream: JInputStream | null, type: string | null): Player | null {
        return Manager.createPlayerFromInputStream(inputStream, type);
    }
    

    appendItem(form: Form | null, item: LcduiItem | null): i32 {
        return form!.appendItem(item);
    }
}


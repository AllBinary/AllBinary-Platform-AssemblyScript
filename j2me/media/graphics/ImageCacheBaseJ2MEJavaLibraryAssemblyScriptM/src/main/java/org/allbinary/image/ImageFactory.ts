/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.image
// import java.io.InputStream
// import javax.microedition.lcdui.Image
// import org.allbinary.MIDPUtil

//ImageCacheBaseJavaLibrary - J2ME
@global export class ImageFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.image.ImageFactory";
    }
    @lazy static jv_instance: ImageFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ImageFactory | null {
        if (!ImageFactory.js_instance) {
            ImageFactory.js_instance = true;
            ImageFactory.jv_instance = new ImageFactory().jinit_ImageFactory_0();
        }
        return ImageFactory.jv_instance;
    }
    static set instance(value: ImageFactory | null) {
        ImageFactory.js_instance = true;
        ImageFactory.jv_instance = value;
    }

    jinit_ImageFactory_0(): ImageFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ImageFactory | null {
        return ImageFactory.instance;
    }
    

    createImageUrl(url: string | null): Image | null {
        return Image.createImage_1(url);
    }
    

    createImage(caller: string | null, width: i32, height: i32): Image | null {
        return MIDPUtil.getInstance()!.createImageWH(width, height);
    }
    

    createImageFromInputStream_2(key: Object | null, inputStream: JInputStream | null): Image | null {
        let image: Image | null = MIDPUtil.getInstance()!.createImageFromInputStream(inputStream); if (JThrowable.pending !== null) return null;
        return image;
    }
    

    createImageFromInputStream_1(inputStream: JInputStream | null): Image | null {
        return MIDPUtil.getInstance()!.createImageFromInputStream(inputStream);
    }
}


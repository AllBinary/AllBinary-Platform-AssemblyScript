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
// package javax.microedition.lcdui

@global export class NullImage extends JObject {

    jclassName(): string {
        return "javax.microedition.lcdui.NullImage";
    }
    @lazy static jv_NULL_IMAGE_ARRAY: StaticArray<Image | null> | null = null;
    @lazy static js_NULL_IMAGE_ARRAY: bool = false;
    static get NULL_IMAGE_ARRAY(): StaticArray<Image | null> | null {
        if (!NullImage.js_NULL_IMAGE_ARRAY) {
            NullImage.js_NULL_IMAGE_ARRAY = true;
            NullImage.jv_NULL_IMAGE_ARRAY = new StaticArray<Image | null>(0);
        }
        return NullImage.jv_NULL_IMAGE_ARRAY;
    }
    static set NULL_IMAGE_ARRAY(value: StaticArray<Image | null> | null) {
        NullImage.js_NULL_IMAGE_ARRAY = true;
        NullImage.jv_NULL_IMAGE_ARRAY = value;
    }
    @lazy static jv_NULL_IMAGE: Image | null = null;
    @lazy static js_NULL_IMAGE: bool = false;
    static get NULL_IMAGE(): Image | null {
        if (!NullImage.js_NULL_IMAGE) {
            NullImage.js_NULL_IMAGE = true;
            NullImage.jv_NULL_IMAGE = new Image().jinit_Image_0();
        }
        return NullImage.jv_NULL_IMAGE;
    }
    static set NULL_IMAGE(value: Image | null) {
        NullImage.js_NULL_IMAGE = true;
        NullImage.jv_NULL_IMAGE = value;
    }

    jinit_NullImage_0(): NullImage {
        super.jinit_JObject_0();
        return this;
    }
}


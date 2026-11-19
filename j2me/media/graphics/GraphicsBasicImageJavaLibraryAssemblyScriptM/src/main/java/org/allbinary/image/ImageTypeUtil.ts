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
// package org.allbinary.image
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class ImageTypeUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.image.ImageTypeUtil";
    }
    @lazy static jv_SINGLETON: ImageTypeUtil | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): ImageTypeUtil | null {
        if (!ImageTypeUtil.js_SINGLETON) {
            ImageTypeUtil.js_SINGLETON = true;
            ImageTypeUtil.jv_SINGLETON = new ImageTypeUtil().jinit_ImageTypeUtil_0();
        }
        return ImageTypeUtil.jv_SINGLETON;
    }
    static set SINGLETON(value: ImageTypeUtil | null) {
        ImageTypeUtil.js_SINGLETON = true;
        ImageTypeUtil.jv_SINGLETON = value;
    }
    PNG: string | null = null;
    JPG: string | null = null;
    GIF: string | null = null;
    list: BasicArrayList | null = null;

    jfields_ImageTypeUtil(): void {
    this.PNG = "png";
    this.JPG = "jpg";
    this.GIF = "gif";
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    jinit_ImageTypeUtil_0(): ImageTypeUtil {
        super.jinit_JObject_0();
        this.jfields_ImageTypeUtil();
        this.list!.add(this.JPG); if (JThrowable.pending !== null) return this;
        this.list!.add(this.GIF); if (JThrowable.pending !== null) return this;
        this.list!.add(this.PNG); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    isSupported(mediaFileType: string | null): bool {
        mediaFileType = JString.toLowerCase0(mediaFileType); if (JThrowable.pending !== null) return false;
        for (let index: i32 = this.list!.size() - 1; index >= 0; index--) {
            let name: string | null = changetype<string | null>(this.list!.get(index)); if (JThrowable.pending !== null) return false;
            if (JString.compareTo1(mediaFileType, name) == 0) {
                return true;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    static getInstance(): ImageTypeUtil | null {
        return ImageTypeUtil.SINGLETON;
    }
}


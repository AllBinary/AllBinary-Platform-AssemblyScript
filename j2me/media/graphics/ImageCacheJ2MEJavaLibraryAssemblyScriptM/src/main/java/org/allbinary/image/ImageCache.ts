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
// import java.io.InputStream
// import javax.microedition.lcdui.Image
// import javax.microedition.lcdui.NullImage
// import org.allbinary.J2MEUtil
// import org.allbinary.TsUtil
// import org.allbinary.data.resource.ResourceUtil
// import org.allbinary.game.gd.resource.GDResources
// import org.allbinary.logic.ABSystemWrapper
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.system.Memory

@global export class ImageCache extends ImageCacheBase {

    jclassName(): string {
        return "org.allbinary.image.ImageCache";
    }
    @lazy static jv_NULL_IMAGE_CACHE: ImageCache | null = null;
    @lazy static js_NULL_IMAGE_CACHE: bool = false;
    static get NULL_IMAGE_CACHE(): ImageCache | null {
        if (!ImageCache.js_NULL_IMAGE_CACHE) {
            ImageCache.js_NULL_IMAGE_CACHE = true;
            ImageCache.jv_NULL_IMAGE_CACHE = new ImageCache().jinit_ImageCache_0();
        }
        return ImageCache.jv_NULL_IMAGE_CACHE;
    }
    static set NULL_IMAGE_CACHE(value: ImageCache | null) {
        ImageCache.js_NULL_IMAGE_CACHE = true;
        ImageCache.jv_NULL_IMAGE_CACHE = value;
    }
    commonStrings: CommonStrings | null = null;
    tsUtil: TsUtil | null = null;

    jfields_ImageCache(): void {
    this.commonStrings = CommonStrings.getInstance();
    this.tsUtil = TsUtil.getInstance();
    }
    

    jinit_ImageCache_0(): ImageCache {
        super.jinit_ImageCacheBase_0();
        this.jfields_ImageCache();
        return this;
    }
    

    addListener(renderer: Object | null): void {
    }
    

    getIndex(key: Object | null): i32 {
        let gdResources: GDResources | null = GDResources.getInstance(); if (JThrowable.pending !== null) return 0;
        let resourceStringArray: StaticArray<string | null> | null = gdResources!.resourceStringArray;
        let size: i32 = resourceStringArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            if (changetype<Object | null>(resourceStringArray![index]) == key) {
                return index;
            }
        }
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("unable to find key: ")!.append(StringUtil.getInstance()!.toString1(key))), this, this.commonStrings!.RUN); if (JThrowable.pending !== null) return 0;
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return 0; }
        return 0;
    }
    

    get(caller: string | null, width: i32, height: i32): Image | null {
        let foundIndex: i32 = this.getIndexWH(width, height); if (JThrowable.pending !== null) return null;
        let image: Image | null = this.getFromAvailable(foundIndex, width, height); if (JThrowable.pending !== null) return null;
        if (image == NullImage.NULL_IMAGE) {
            this.volume += width * height;
            if (this.volume > 32000) {
                this.tsUtil!.gc(); if (JThrowable.pending !== null) return null;
                this.volume = 0;
            } if (JThrowable.pending !== null) return null;
            image = this.createImage(caller, width, height); if (JThrowable.pending !== null) return null;
            let widths: StaticArray<i32> | null = this.widths;
            if (this.nextIndex > widths!.length - 1) {
                if (foundIndex == -1) {
                    foundIndex = this.nextIndex;
                    widths![this.nextIndex] = width;
                    this.heights![this.nextIndex] = height;
                    this.nextIndex++;
                }
                this.listOfList![foundIndex]!.add(image); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return image;
    }
    

    getWithKey(key: Object | null): Image | null {
        let image: Image | null = this.getImage(key); if (JThrowable.pending !== null) return null;
        if (image == NullImage.NULL_IMAGE) {
            let resourceUtil: ResourceUtil | null = ResourceUtil.getInstance(); if (JThrowable.pending !== null) return null;
            let resourceInputStream: JInputStream | null = resourceUtil!.getResourceAsStream(changetype<string | null>(key)); if (JThrowable.pending !== null) return null;
            if (resourceInputStream == null) {
                { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_1(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Image resource is not available for key: ")!.append(StringUtil.getInstance()!.toString1(key))))); return null; }
            } if (JThrowable.pending !== null) return null;
            do {
                image = this.createImageFromInputStream(key, resourceInputStream); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put("Exception: Trying Again After GC", this, this.commonStrings!.GET, e); if (JThrowable.pending !== null) return null;
                this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("InputStream: ")!.append(StringUtil.getInstance()!.toString1(resourceInputStream))), this, this.commonStrings!.GET); if (JThrowable.pending !== null) return null;
                this.tsUtil!.gc(); if (JThrowable.pending !== null) return null;
                this.tsUtil!.gc(); if (JThrowable.pending !== null) return null;
                this.logUtil!.putF(Memory.getInfo(), this, this.commonStrings!.GET); if (JThrowable.pending !== null) return null;
                JThread.sleep(100); if (JThrowable.pending !== null) return null;
                image = this.createImageFromInputStream(key, resourceInputStream); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            if (J2MEUtil.isHTML()) {
            } else {
                resourceInputStream!.close(); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            this.hashtable!.put(key, image); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return image;
    }
    

    loadImageForAnimation(): void {
    }
    

    progressEnded(): void {
    }
    

    runTask(): void {
    }
    

    isLazy(): bool {
        return false;
    }
}


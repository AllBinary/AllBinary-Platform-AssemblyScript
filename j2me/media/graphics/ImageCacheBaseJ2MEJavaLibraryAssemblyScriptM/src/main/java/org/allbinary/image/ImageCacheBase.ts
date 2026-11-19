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
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonSeps
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class ImageCacheBase extends JObject {

    jclassName(): string {
        return "org.allbinary.image.ImageCacheBase";
    }
    logUtil: LogUtil | null = null;
    imageFactory: ImageFactory | null = null;
    hashtable: ABHashtable | null = null;
    SIZE: i32 = 0;
    widths: StaticArray<i32> | null = null;
    heights: StaticArray<i32> | null = null;
    listOfList: StaticArray<BasicArrayList | null> | null = null;
    availableListOfList: StaticArray<BasicArrayList | null> | null = null;
    volume: i32 = 0;
    nextIndex: i32 = 0;

    jfields_ImageCacheBase(): void {
    this.logUtil = LogUtil.getInstance();
    this.imageFactory = ImageFactory.getInstance();
    this.hashtable = StdUtil.getInstance()!.createHashtable();
    this.SIZE = 128;
    this.widths = new StaticArray<i32>(this.SIZE);
    this.heights = new StaticArray<i32>(this.SIZE);
    this.listOfList = new StaticArray<BasicArrayList | null>(this.SIZE);
    this.availableListOfList = new StaticArray<BasicArrayList | null>(this.SIZE);
    this.volume = 0;
    this.nextIndex = 0;
    }
    

    jinit_ImageCacheBase_0(): ImageCacheBase {
        super.jinit_JObject_0();
        this.jfields_ImageCacheBase();
        for (let index: i32 = this.listOfList!.length - 1; index >= 0; index--) {
            this.listOfList![index] = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        for (let index: i32 = this.availableListOfList!.length - 1; index >= 0; index--) {
            this.availableListOfList![index] = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getImage(resourceId: Object | null): Image | null {
        let imageCanBeNull: Object | null = this.hashtable!.get(resourceId); if (JThrowable.pending !== null) return null;
        if (imageCanBeNull == null) {
            return NullImage.NULL_IMAGE;
        }
        return changetype<Image | null>(imageCanBeNull);
    }
    

    releaseAll(): void {
        for (let index: i32 = this.listOfList!.length - 1; index >= 0; index--) {
            this.availableListOfList![index]!.clear(); if (JThrowable.pending !== null) return;
            this.availableListOfList![index]!.addAllList(this.listOfList![index]); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("ImageCache: ")!.append(this.toString())), this, "releaseAll"); if (JThrowable.pending !== null) return;
    }
    

    getIndexWH(width: i32, height: i32): i32 {
        let foundIndex: i32 = -1;
        let size: i32 = this.widths!.length;
        for (let index: i32 = 0; index < size; index++) {
            if (this.widths![index] == width && this.heights![index] == height) {
                foundIndex = index;
                return foundIndex;
            }
        }
        return foundIndex;
    }
    

    getFromAvailable(foundIndex: i32, width: i32, height: i32): Image | null {
        if (foundIndex != -1) {
            if (this.availableListOfList![foundIndex]!.size() > 0) {
                let list: BasicArrayList | null = this.availableListOfList![foundIndex];
                return changetype<Image | null>(list!.removeAt(list!.size() - 1));
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return NullImage.NULL_IMAGE;
    }
    

    get(caller: string | null, width: i32, height: i32): Image | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getWithKey(key: Object | null): Image | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    createImage(caller: string | null, width: i32, height: i32): Image | null {
        return this.imageFactory!.createImage(caller, width, height);
    }
    

    createImageFromInputStream(key: Object | null, inputStream: JInputStream | null): Image | null {
        return this.imageFactory!.createImageFromInputStream_2(key, inputStream);
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = this.nextIndex - 1; index >= 0; index--) {
            let width: i32 = this.widths![index];
            let height: i32 = this.heights![index];
            let total: i32 = this.listOfList![index]!.size(); if (JThrowable.pending !== null) return null;
            let totalAvailable: i32 = this.availableListOfList![index]!.size(); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(" w: "); if (JThrowable.pending !== null) return null;
            stringBuffer!.appendint(width); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(" h: "); if (JThrowable.pending !== null) return null;
            stringBuffer!.appendint(height); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(CommonLabels.getInstance()!.TOTAL_LABEL); if (JThrowable.pending !== null) return null;
            stringBuffer!.appendint(total); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(" available: "); if (JThrowable.pending !== null) return null;
            stringBuffer!.appendint(totalAvailable); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    getHashtableP(): ABHashtable | null {
        return this.hashtable;
    }
    

    init(image: Image | null): void {
    }
    

    initProgress(): void {
    }
}


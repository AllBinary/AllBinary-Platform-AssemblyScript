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
// import java.util.HashMap
// import org.allbinary.logic.StdUtil

@global export class MediaData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.media.MediaData";
    }
    @lazy static jv_hashMap: JHashMap | null = null;
    @lazy static js_hashMap: bool = false;
    static get hashMap(): JHashMap | null {
        if (!MediaData.js_hashMap) {
            MediaData.js_hashMap = true;
            MediaData.jv_hashMap = StdUtil.getInstance()!.createHashMap();
        }
        return MediaData.jv_hashMap;
    }
    static set hashMap(value: JHashMap | null) {
        MediaData.js_hashMap = true;
        MediaData.jv_hashMap = value;
    }
    name: string | null = null;
    type: string | null = null;
    extension: string | null = null;

    jfields_MediaData(): void {
    
    
    
    }
    

    jinit_MediaData_1(a_Name: string | null): MediaData {
        super.jinit_JObject_0();
        this.jfields_MediaData();
        this.name = a_Name;
        this.extension = jstr(".") + jstr(this.name);
        this.type = MediaTypeData.getInstance()!.NOT_RESIZABLE_MEDIA; if (JThrowable.pending !== null) return this;
        MediaData.hashMap!.put(a_Name, this); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    getType(): string | null {
        return this.type;
    }
    

    getExtension(): string | null {
        return this.extension;
    }
    

    isConvertableTo(mediaData: MediaData | null): bool {
        if (this == MediaDataFactory.getInstance()!.GIF && mediaData == MediaDataFactory.getInstance()!.JPG) {
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    toString(): string | null {
        return this.getName();
    }
    

    static get(a_Name: string | null): MediaData | null {
        let mediaData: MediaData | null = changetype<MediaData | null>(MediaData.hashMap!.get(a_Name)); if (JThrowable.pending !== null) return null;
        if (mediaData != null) {
            return mediaData;
        } else {
            { JThrowable.raise(new JException().jinit_JException_1("No Such MediaData")); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    static getDefault(): MediaData | null {
        return MediaDataFactory.getInstance()!.JPG;
    }
    

    static toHashMap(): JHashMap | null {
        return MediaData.hashMap;
    }
}


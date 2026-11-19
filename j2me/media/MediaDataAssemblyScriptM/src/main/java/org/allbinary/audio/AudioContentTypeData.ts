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

@global export class AudioContentTypeData extends JObject {

    jclassName(): string {
        return "org.allbinary.audio.AudioContentTypeData";
    }
    name: string | null = null;

    jfields_AudioContentTypeData(): void {
    
    }
    

    jinit_AudioContentTypeData_1(name: string | null): AudioContentTypeData {
        super.jinit_JObject_0();
        this.jfields_AudioContentTypeData();
        this.name = name;
        return this;
    }
    

    getName(): string | null {
        return this.name;
    }
}


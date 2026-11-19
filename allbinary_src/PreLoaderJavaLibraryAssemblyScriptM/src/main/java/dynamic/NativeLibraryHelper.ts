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
// package dynamic

@global export class NativeLibraryHelper extends JObject {

    jclassName(): string {
        return "dynamic.NativeLibraryHelper";
    }
    library: string | null = null;

    jfields_NativeLibraryHelper(): void {
    
    }
    

    jinit_NativeLibraryHelper_1(library: string | null): NativeLibraryHelper {
        super.jinit_JObject_0();
        this.jfields_NativeLibraryHelper();
        this.library = library;
        return this;
    }
    

    load(): void {
        JSystem.loadLibrary(this.library); if (JThrowable.pending !== null) return;
    }
}


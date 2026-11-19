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
// package org.allbinary.logic.system.loader
// import java.lang.reflect.Constructor
// import java.lang.reflect.Method
// import org.allbinary.string.CommonStrings

@global export class NativeLibraryHelperWrapper extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.loader.NativeLibraryHelperWrapper";
    }
    libraryName: string | null = null;
    loader: JClassLoader | null = null;
    anyType: Object | null = null;

    jfields_NativeLibraryHelperWrapper(): void {
    this.libraryName = null;
    this.loader = null;
    this.anyType = null;
    }
    

    jinit_NativeLibraryHelperWrapper_1(libraryName: string | null): NativeLibraryHelperWrapper {
        super.jinit_JObject_0();
        this.jfields_NativeLibraryHelperWrapper();
        this.setLibraryName(libraryName); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    load(): void {
        let params: StaticArray<Object | null> | null = new StaticArray<Object | null>(1);
        params![0] = this.getLibraryName(); if (JThrowable.pending !== null) return;
        let classes: StaticArray<JClass | null> | null = new StaticArray<JClass | null>(1);
        classes![0] = JObject.jclassOf(this.getLibraryName()); if (JThrowable.pending !== null) return;
        this.loader = new NativeLibraryClassLoader().jinit_NativeLibraryClassLoader_1(JObject.jclassOf(this)!.getClassLoader()); if (JThrowable.pending !== null) return;
        let myClass: JClass | null = this.loader!.loadClass("dynamic.NativeLibraryHelper"); if (JThrowable.pending !== null) return;
        let constructor_: JConstructor | null = myClass!.getConstructor(classes); if (JThrowable.pending !== null) return;
        this.anyType = constructor_!.newInstance(params); if (JThrowable.pending !== null) return;
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
        let method: JMethod | null = JObject.jclassOf(this.anyType)!.getMethod(commonStrings!.LOAD, null); if (JThrowable.pending !== null) return;
        method!.invoke(this.anyType, null); if (JThrowable.pending !== null) return;
    }
    

    unload(): void {
        this.anyType = null;
        this.loader = null;
        JSystem.gc(); if (JThrowable.pending !== null) return;
        JSystem.gc(); if (JThrowable.pending !== null) return;
    }
    

    toString(): string | null {
        return jstr("Library: ") + jstr(this.getLibraryName());
    }
    

    getLibraryName(): string | null {
        return this.libraryName;
    }
    

    setLibraryName(libraryName: string | null): void {
        this.libraryName = libraryName;
    }
}


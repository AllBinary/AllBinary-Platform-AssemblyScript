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

@global export class NativeLibraryClassLoader extends JClassLoader {

    jclassName(): string {
        return "org.allbinary.logic.system.loader.NativeLibraryClassLoader";
    }
    message: string | null = null;

    jfields_NativeLibraryClassLoader(): void {
    this.message = "This Class Loader Does Not Load Classes - Only For Loading and Unloading of Native Libraries";
    }
    

    jinit_NativeLibraryClassLoader_1(parent: JClassLoader | null): NativeLibraryClassLoader {
        super.jinit_JClassLoader_1(parent);
        this.jfields_NativeLibraryClassLoader();
        return this;
    }
}


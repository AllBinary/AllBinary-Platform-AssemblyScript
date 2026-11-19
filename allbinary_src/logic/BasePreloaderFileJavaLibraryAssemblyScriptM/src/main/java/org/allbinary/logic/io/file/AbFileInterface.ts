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
// package org.allbinary.logic.io.file
// import java.io.FilenameFilter
// import java.io.IOException
// import java.net.URI

@global export interface AbFileInterface {
    

    canRead(): bool;
    

    canWrite(): bool;
    

    createNewFile(): bool;
    

    delete_(): bool;
    

    deleteOnExit(): void;
    

    exists(): bool;
    

    getAbsolutePath(): string | null;
    

    getCanonicalPath(): string | null;
    

    getParent(): string | null;
    

    getPath(): string | null;
    

    isAbsolute(): bool;
    

    isDirectory(): bool;
    

    isFile(): bool;
    

    isHidden(): bool;
    

    lastModified(): i64;
    

    length(): i64;
    

    list(): StaticArray<string | null> | null;
    

    listWithFilter(filter: JFilenameFilter | null): StaticArray<string | null> | null;
    

    mkdir(): bool;
    

    mkdirs(): bool;
    

    setLastModified(time: i64): bool;
    

    setReadOnly(): bool;
    

    toString(): string | null;
    

    toURI(): JURI | null;
}


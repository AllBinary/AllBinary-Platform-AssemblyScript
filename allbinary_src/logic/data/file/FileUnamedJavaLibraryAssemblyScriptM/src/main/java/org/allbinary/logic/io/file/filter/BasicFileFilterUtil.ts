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
// package org.allbinary.logic.io.file.filter
// import java.io.FileFilter
// import org.allbinary.logic.io.file.visitor.IncludeFileExtensionsBooleanFileVisitor
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class BasicFileFilterUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.filter.BasicFileFilterUtil";
    }
    

    jinit_BasicFileFilterUtil_0(): BasicFileFilterUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance1(extension: string | null): FileFilter | null {
        let vector: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        vector!.add(extension); if (JThrowable.pending !== null) return null;
        let includeFileExtensionsBooleanFileVisitor: IncludeFileExtensionsBooleanFileVisitor | null = new IncludeFileExtensionsBooleanFileVisitor().jinit_IncludeFileExtensionsBooleanFileVisitor_1(vector); if (JThrowable.pending !== null) return null;
        return changetype<FileFilter | null>(new VisitorFileFilter().jinit_VisitorFileFilter_1(includeFileExtensionsBooleanFileVisitor));
    }
}


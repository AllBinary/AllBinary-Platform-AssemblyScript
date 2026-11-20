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
// import java.io.File
// import java.io.FileFilter
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.file.FileWrapperUtil
// import org.allbinary.logic.util.visitor.VisitorInterface

@global export class VisitorFileFilter extends JObject implements FileFilter {

    jclassName(): string {
        return "org.allbinary.logic.io.file.filter.VisitorFileFilter";
    }
    booleanVisitorInterface: VisitorInterface | null = null;

    jfields_VisitorFileFilter(): void {
    
    }
    

    jinit_VisitorFileFilter_1(booleanVisitorInterface: VisitorInterface | null): VisitorFileFilter {
        super.jinit_JObject_0();
        this.jfields_VisitorFileFilter();
        this.booleanVisitorInterface = booleanVisitorInterface;
        return this;
    }
    

    accept_1_File(file: JFile | null): bool {
        let abFile: AbFile | null = FileWrapperUtil.wrapFile(file); if (JThrowable.pending !== null) return false;
        let isFileAcceptable: bool = (changetype<JBoolean | null>(this.booleanVisitorInterface!.visit(abFile)))!.booleanValue(); if (JThrowable.pending !== null) return false;
        return isFileAcceptable || file!.isDirectory();
    }
    

    accept_1_AbFile(file: AbFile | null): bool {
        let isFileAcceptable: bool = (changetype<JBoolean | null>(this.booleanVisitorInterface!.visit(file)))!.booleanValue(); if (JThrowable.pending !== null) return false;
        return isFileAcceptable || file!.isDirectory();
    }

    accept(file: JFile | null): bool {
        return this.accept_1_File(file);
    }
}


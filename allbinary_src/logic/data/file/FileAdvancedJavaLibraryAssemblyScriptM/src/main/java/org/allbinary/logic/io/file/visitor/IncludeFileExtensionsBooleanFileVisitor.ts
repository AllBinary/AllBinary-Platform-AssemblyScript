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
// package org.allbinary.logic.io.file.visitor
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.util.BasicArrayList

@global export class IncludeFileExtensionsBooleanFileVisitor extends BooleanFileVisitor {

    jclassName(): string {
        return "org.allbinary.logic.io.file.visitor.IncludeFileExtensionsBooleanFileVisitor";
    }
    

    jinit_IncludeFileExtensionsBooleanFileVisitor_1(filterStringBasicArrayList: BasicArrayList | null): IncludeFileExtensionsBooleanFileVisitor {
        super.jinit_BooleanFileVisitor_1(filterStringBasicArrayList);
        return this;
    }
    

    visit_1_AbFile(file: AbFile | null): JBoolean | null {
        if (this.getFilterStringBasicArrayList()!.size() == 0) {
            return changetype<JBoolean | null>(jbox<bool>(false));
        } if (JThrowable.pending !== null) return null;
        return super.visit_1_AbFile(file);
    }
    

    visit_2(file: AbFile | null, fileNameString: string | null): JBoolean | null {
        let fileNameAndExtension: string | null = file!.getPath(); if (JThrowable.pending !== null) return null;
        if (JString.length0(fileNameAndExtension) > JString.length0(fileNameString)) {
            let startIndex: i32 = JString.length0(fileNameAndExtension) - JString.length0(fileNameString); if (JThrowable.pending !== null) return null;
            let fileName: string | null = JString.substring1(fileNameAndExtension, startIndex); if (JThrowable.pending !== null) return null;
            if (JString.compareTo1(fileName, fileNameString) == 0) {
                return changetype<JBoolean | null>(jbox<bool>(true));
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<JBoolean | null>(jbox<bool>(false));
    }
}


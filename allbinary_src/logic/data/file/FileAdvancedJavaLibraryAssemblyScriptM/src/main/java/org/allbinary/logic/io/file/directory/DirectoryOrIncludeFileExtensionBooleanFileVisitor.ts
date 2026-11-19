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
// package org.allbinary.logic.io.file.directory
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.file.visitor.IncludeFileExtensionsBooleanFileVisitor
// import org.allbinary.util.BasicArrayList

@global export class DirectoryOrIncludeFileExtensionBooleanFileVisitor extends IncludeFileExtensionsBooleanFileVisitor {

    jclassName(): string {
        return "org.allbinary.logic.io.file.directory.DirectoryOrIncludeFileExtensionBooleanFileVisitor";
    }
    includesString: string | null = null;

    jfields_DirectoryOrIncludeFileExtensionBooleanFileVisitor(): void {
    
    }
    

    jinit_DirectoryOrIncludeFileExtensionBooleanFileVisitor_1(filterStringBasicArrayList: BasicArrayList | null): DirectoryOrIncludeFileExtensionBooleanFileVisitor {
        super.jinit_IncludeFileExtensionsBooleanFileVisitor_1(filterStringBasicArrayList);
        this.jfields_DirectoryOrIncludeFileExtensionBooleanFileVisitor();
        this.includesString = null;
        return this;
    }
    

    jinit_DirectoryOrIncludeFileExtensionBooleanFileVisitor_2(filterStringBasicArrayList: BasicArrayList | null, includesString: string | null): DirectoryOrIncludeFileExtensionBooleanFileVisitor {
        super.jinit_IncludeFileExtensionsBooleanFileVisitor_1(filterStringBasicArrayList);
        this.jfields_DirectoryOrIncludeFileExtensionBooleanFileVisitor();
        this.includesString = includesString;
        return this;
    }
    

    visit_1_AbFile(file: AbFile | null): JBoolean | null {
        if (file!.isDirectory()) {
            return changetype<JBoolean | null>(jbox<bool>(true));
        } if (JThrowable.pending !== null) return null;
        if (this.includesString == null || JString.indexOf1(file!.getAbsolutePath(), this.includesString) >= 0) {
            return super.visit_1_AbFile(file);
        } else {
            return changetype<JBoolean | null>(jbox<bool>(false));
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}


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
// import org.allbinary.logic.util.visitor.VisitorInterface

@global export class DirectoryBooleanFileVisitor extends JObject implements VisitorInterface {

    jclassName(): string {
        return "org.allbinary.logic.io.file.directory.DirectoryBooleanFileVisitor";
    }
    

    jinit_DirectoryBooleanFileVisitor_0(): DirectoryBooleanFileVisitor {
        super.jinit_JObject_0();
        return this;
    }
    

    visit_1_Object(anyType: Object | null): Object | null {
        return changetype<Object | null>(this.visit_1_AbFile(changetype<AbFile | null>(anyType)));
    }
    

    visit_1_AbFile(file: AbFile | null): JBoolean | null {
        if (file!.isDirectory()) {
            return changetype<JBoolean | null>(jbox<bool>(true));
        } if (JThrowable.pending !== null) return null;
        return changetype<JBoolean | null>(jbox<bool>(false));
    }
}


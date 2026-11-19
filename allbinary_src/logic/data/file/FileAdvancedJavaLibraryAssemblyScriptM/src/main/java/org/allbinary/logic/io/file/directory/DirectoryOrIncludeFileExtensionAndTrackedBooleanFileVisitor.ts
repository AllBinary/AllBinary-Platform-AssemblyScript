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
// import org.allbinary.java.runtime.process.git.GitProcessHelper
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.file.CommonDataFileStrings
// import org.allbinary.logic.io.file.visitor.IncludeFileExtensionsBooleanFileVisitor
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor extends IncludeFileExtensionsBooleanFileVisitor {

    jclassName(): string {
        return "org.allbinary.logic.io.file.directory.DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor";
    }
    trackedStrings: TrackedStrings | null = null;
    gitProcessHelper: GitProcessHelper | null = null;
    includesString: string | null = null;

    jfields_DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor(): void {
    this.trackedStrings = TrackedStrings.getInstance();
    this.gitProcessHelper = GitProcessHelper.getInstance();
    
    }
    

    jinit_DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor_1(filterStringBasicArrayList: BasicArrayList | null): DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor {
        super.jinit_IncludeFileExtensionsBooleanFileVisitor_1(filterStringBasicArrayList);
        this.jfields_DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor();
        this.includesString = null;
        return this;
    }
    

    jinit_DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor_2(filterStringBasicArrayList: BasicArrayList | null, includesString: string | null): DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor {
        super.jinit_IncludeFileExtensionsBooleanFileVisitor_1(filterStringBasicArrayList);
        this.jfields_DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor();
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
    

    visit_2(file: AbFile | null, fileNameString: string | null): JBoolean | null {
        let filePath: string | null = file!.getPath(); if (JThrowable.pending !== null) return null;
        if (super.visit_2(file, fileNameString)) {
            if (!(JString.contains1(filePath, this.trackedStrings!.APPLICATION) || JString.contains1(filePath, this.trackedStrings!.APP) || JString.contains1(filePath, this.trackedStrings!.HTML_TEMP))) {
                if (!(JString.contains1(filePath, this.trackedStrings!.TARGET_PATH_WINDOWS) || JString.contains1(filePath, this.trackedStrings!.TARGET_PATH_UNIX))) {
                    if (this.gitProcessHelper!.isTracked(file)) {
                        return changetype<JBoolean | null>(jbox<bool>(true));
                    } else {
                    } if (JThrowable.pending !== null) return null;
                } else {
                } if (JThrowable.pending !== null) return null;
            } else {
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<JBoolean | null>(jbox<bool>(false));
    }
    

    static main(args: StaticArray<string | null> | null): void {
        let commonFileStrings: CommonDataFileStrings | null = CommonDataFileStrings.getInstance(); if (JThrowable.pending !== null) return;
        let list: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
        list!.add(commonFileStrings!.JAVA); if (JThrowable.pending !== null) return;
        let filePath: string | null = "G:\\mnt\\bc\\mydev\\games\\ZeptoRacer\\platform\\j2se\\ZeptoRacerStaticPathsJ2SEM\\target\\dependency\\org\\allbinary\\logic\\system\\security\\licensing\\ZeptoRacerPCClientInformation.java";
        let result: bool = (new DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor().jinit_DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor_1(list)!.visit_1_AbFile(AbFile.createAbFileFromRawPath(filePath)))!.booleanValue(); if (JThrowable.pending !== null) return;
        JSystem.println(jstr(jstr(jstr(filePath) + jstr(" is Tracked: ")) + jstr(result))); if (JThrowable.pending !== null) return;
    }
}


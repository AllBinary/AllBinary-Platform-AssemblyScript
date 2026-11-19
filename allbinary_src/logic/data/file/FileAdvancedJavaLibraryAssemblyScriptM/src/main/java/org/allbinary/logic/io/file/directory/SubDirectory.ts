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
// import java.io.FileFilter
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonSeps
// import org.allbinary.util.BasicArrayList

@global export class SubDirectory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.directory.SubDirectory";
    }
    @lazy static jv_instance: SubDirectory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): SubDirectory | null {
        if (!SubDirectory.js_instance) {
            SubDirectory.js_instance = true;
            SubDirectory.jv_instance = new SubDirectory().jinit_SubDirectory_0();
        }
        return SubDirectory.jv_instance;
    }
    static set instance(value: SubDirectory | null) {
        SubDirectory.js_instance = true;
        SubDirectory.jv_instance = value;
    }
    directory: Directory | null = null;

    jfields_SubDirectory(): void {
    this.directory = Directory.getInstance();
    }
    

    static getInstance(): SubDirectory | null {
        return SubDirectory.instance;
    }
    

    jinit_SubDirectory_0(): SubDirectory {
        super.jinit_JObject_0();
        this.jfields_SubDirectory();
        return this;
    }
    

    search_2_FileFilterAbFile(fileFilter: FileFilter | null, file: AbFile | null): BasicArrayList | null {
        return this.directory!.search_3_FileFilterAbFileboolean(fileFilter, file, true);
    }
    

    search_1(file: AbFile | null): BasicArrayList | null {
        return this.directory!.search_2_AbFileboolean(file, true);
    }
    

    search_2_StringAbFile(searchValue: string | null, file: AbFile | null): BasicArrayList | null {
        return this.directory!.search_3_StringAbFileboolean(searchValue, file, true);
    }
    

    search_2_intAbFile(level: i32, file: AbFile | null): BasicArrayList | null {
        return this.directory!.search_3_intAbFileboolean(level, file, true);
    }
    

    static toString1(files: BasicArrayList | null): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let NEW_LINE: string | null = CommonSeps.getInstance()!.NEW_LINE; if (JThrowable.pending !== null) return null;
        let size: i32 = files!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            let file: AbFile | null = changetype<AbFile | null>(files!.get(index)); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(file!.getPath()); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(NEW_LINE); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}


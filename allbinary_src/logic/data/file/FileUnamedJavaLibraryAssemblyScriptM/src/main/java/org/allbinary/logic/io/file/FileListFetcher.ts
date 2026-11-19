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
// import org.allbinary.logic.io.file.directory.DirectoryBooleanFileVisitor
// import org.allbinary.logic.io.file.directory.DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor
// import org.allbinary.logic.io.file.directory.DirectoryOrIncludeFileExtensionBooleanFileVisitor
// import org.allbinary.logic.io.file.directory.SubDirectory
// import org.allbinary.logic.io.file.filter.VisitorFileFilter
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class FileListFetcher extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.FileListFetcher";
    }
    @lazy static jv_instance: FileListFetcher | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FileListFetcher | null {
        if (!FileListFetcher.js_instance) {
            FileListFetcher.js_instance = true;
            FileListFetcher.jv_instance = new FileListFetcher().jinit_FileListFetcher_0();
        }
        return FileListFetcher.jv_instance;
    }
    static set instance(value: FileListFetcher | null) {
        FileListFetcher.js_instance = true;
        FileListFetcher.jv_instance = value;
    }
    subDirectory: SubDirectory | null = null;

    jfields_FileListFetcher(): void {
    this.subDirectory = SubDirectory.getInstance();
    }

    jinit_FileListFetcher_0(): FileListFetcher {
        super.jinit_JObject_0();
        this.jfields_FileListFetcher();
        return this;
    }
    

    static getInstance(): FileListFetcher | null {
        return FileListFetcher.instance;
    }
    

    getFiles_1(path: string | null): BasicArrayList | null {
        do {
            let files: BasicArrayList | null = this.subDirectory!.search_1(AbFile.createAbFile(path)); if (JThrowable.pending !== null) break;
            return files;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            e!.printStackTrace(); if (JThrowable.pending !== null) return null;
            JSystem.println(jstr(jstr(jstr(jstr("Error: ") + jstr(e)) + jstr("\nMsg: ")) + jstr(e!.getMessage()))); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getFiles_2_StringStringA(path: string | null, includeExtensions: StaticArray<string | null> | null): BasicArrayList | null {
        do {
            let includeExtensionBasicArrayList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            let size: i32 = includeExtensions!.length;
            for (let index: i32 = 0; index < size; index++) {
                includeExtensionBasicArrayList!.add(includeExtensions![index]); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let visitorFileFilter: VisitorFileFilter | null = new VisitorFileFilter().jinit_VisitorFileFilter_1(new DirectoryOrIncludeFileExtensionBooleanFileVisitor().jinit_DirectoryOrIncludeFileExtensionBooleanFileVisitor_1(includeExtensionBasicArrayList)); if (JThrowable.pending !== null) break;
            let files: BasicArrayList | null = this.subDirectory!.search_2_FileFilterAbFile(visitorFileFilter, AbFile.createAbFile(path)); if (JThrowable.pending !== null) break;
            return files;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            e!.printStackTrace(); if (JThrowable.pending !== null) return null;
            JSystem.println(jstr(jstr(jstr(jstr("Error: ") + jstr(e)) + jstr("\nMsg: ")) + jstr(e!.getMessage()))); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getFiles_2_StringString(path: string | null, includeExtension: string | null): BasicArrayList | null {
        do {
            let includeExtensionBasicArrayList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            includeExtensionBasicArrayList!.add(includeExtension); if (JThrowable.pending !== null) break;
            let visitorFileFilter: VisitorFileFilter | null = new VisitorFileFilter().jinit_VisitorFileFilter_1(new DirectoryOrIncludeFileExtensionBooleanFileVisitor().jinit_DirectoryOrIncludeFileExtensionBooleanFileVisitor_1(includeExtensionBasicArrayList)); if (JThrowable.pending !== null) break;
            let files: BasicArrayList | null = this.subDirectory!.search_2_FileFilterAbFile(visitorFileFilter, AbFile.createAbFile(path)); if (JThrowable.pending !== null) break;
            return files;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            e!.printStackTrace(); if (JThrowable.pending !== null) return null;
            JSystem.println(jstr(jstr(jstr(jstr("Error: ") + jstr(e)) + jstr("\nMsg: ")) + jstr(e!.getMessage()))); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getFiles_3(path: string | null, pathIncludes: string | null, includeExtension: string | null): BasicArrayList | null {
        do {
            let includeExtensionBasicArrayList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            includeExtensionBasicArrayList!.add(includeExtension); if (JThrowable.pending !== null) break;
            let visitorFileFilter: VisitorFileFilter | null = new VisitorFileFilter().jinit_VisitorFileFilter_1(new DirectoryOrIncludeFileExtensionBooleanFileVisitor().jinit_DirectoryOrIncludeFileExtensionBooleanFileVisitor_2(includeExtensionBasicArrayList, pathIncludes)); if (JThrowable.pending !== null) break;
            let files: BasicArrayList | null = this.subDirectory!.search_2_FileFilterAbFile(visitorFileFilter, AbFile.createAbFile(path)); if (JThrowable.pending !== null) break;
            return files;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            e!.printStackTrace(); if (JThrowable.pending !== null) return null;
            JSystem.println(jstr(jstr(jstr(jstr("Error: ") + jstr(e)) + jstr("\nMsg: ")) + jstr(e!.getMessage()))); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getTrackedFiles_2_StringStringA(path: string | null, includeExtensions: StaticArray<string | null> | null): BasicArrayList | null {
        do {
            let includeExtensionBasicArrayList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            let size: i32 = includeExtensions!.length;
            for (let index: i32 = 0; index < size; index++) {
                includeExtensionBasicArrayList!.add(includeExtensions![index]); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let visitorFileFilter: VisitorFileFilter | null = new VisitorFileFilter().jinit_VisitorFileFilter_1(new DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor().jinit_DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor_1(includeExtensionBasicArrayList)); if (JThrowable.pending !== null) break;
            let files: BasicArrayList | null = this.subDirectory!.search_2_FileFilterAbFile(visitorFileFilter, AbFile.createAbFile(path)); if (JThrowable.pending !== null) break;
            return files;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            e!.printStackTrace(); if (JThrowable.pending !== null) return null;
            JSystem.println(jstr(jstr(jstr(jstr("Error: ") + jstr(e)) + jstr("\nMsg: ")) + jstr(e!.getMessage()))); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getTrackedFiles_2_StringString(path: string | null, includeExtension: string | null): BasicArrayList | null {
        do {
            let includeExtensionBasicArrayList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            includeExtensionBasicArrayList!.add(includeExtension); if (JThrowable.pending !== null) break;
            let visitorFileFilter: VisitorFileFilter | null = new VisitorFileFilter().jinit_VisitorFileFilter_1(new DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor().jinit_DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor_1(includeExtensionBasicArrayList)); if (JThrowable.pending !== null) break;
            let files: BasicArrayList | null = this.subDirectory!.search_2_FileFilterAbFile(visitorFileFilter, AbFile.createAbFile(path)); if (JThrowable.pending !== null) break;
            return files;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            e!.printStackTrace(); if (JThrowable.pending !== null) return null;
            JSystem.println(jstr(jstr(jstr(jstr("Error: ") + jstr(e)) + jstr("\nMsg: ")) + jstr(e!.getMessage()))); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getDirectories(path: string | null): BasicArrayList | null {
        do {
            let visitorFileFilter: VisitorFileFilter | null = new VisitorFileFilter().jinit_VisitorFileFilter_1(new DirectoryBooleanFileVisitor().jinit_DirectoryBooleanFileVisitor_0()); if (JThrowable.pending !== null) break;
            let files: BasicArrayList | null = this.subDirectory!.search_2_FileFilterAbFile(visitorFileFilter, AbFile.createAbFile(path)); if (JThrowable.pending !== null) break;
            return files;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            e!.printStackTrace(); if (JThrowable.pending !== null) return null;
            JSystem.println(jstr(jstr(jstr(jstr("Error: ") + jstr(e)) + jstr("\nMsg: ")) + jstr(e!.getMessage()))); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}


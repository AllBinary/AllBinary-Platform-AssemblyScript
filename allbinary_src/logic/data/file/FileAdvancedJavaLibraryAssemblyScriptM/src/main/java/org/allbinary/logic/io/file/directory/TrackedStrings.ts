/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2026 AllBinary 
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

@global export class TrackedStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.directory.TrackedStrings";
    }
    @lazy static jv_instance: TrackedStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TrackedStrings | null {
        if (!TrackedStrings.js_instance) {
            TrackedStrings.js_instance = true;
            TrackedStrings.jv_instance = new TrackedStrings().jinit_TrackedStrings_0();
        }
        return TrackedStrings.jv_instance;
    }
    static set instance(value: TrackedStrings | null) {
        TrackedStrings.js_instance = true;
        TrackedStrings.jv_instance = value;
    }
    TARGET_PATH_WINDOWS: string | null = null;
    TARGET_PATH_UNIX: string | null = null;
    HTML_TEMP: string | null = null;
    APPLICATION: string | null = null;
    APP: string | null = null;
    GIT_COMMAND: string | null = null;
    CHANGE_DIRECTORY_OPTION: string | null = null;
    LIST_FILES_COMMAND: string | null = null;
    ERROR_UNMATCH_OPTION: string | null = null;
    PATHSPEC_SEPARATOR: string | null = null;
    SEP_BY_NULL_CHAR_INSTEAD_OF_NEW_LINE: string | null = null;

    jfields_TrackedStrings(): void {
    this.TARGET_PATH_WINDOWS = "\\target\\";
    this.TARGET_PATH_UNIX = "/target/";
    this.HTML_TEMP = "HTMLTemp";
    this.APPLICATION = "Application";
    this.APP = "\\app";
    this.GIT_COMMAND = "git";
    this.CHANGE_DIRECTORY_OPTION = "-C";
    this.LIST_FILES_COMMAND = "ls-files";
    this.ERROR_UNMATCH_OPTION = "--error-unmatch";
    this.PATHSPEC_SEPARATOR = "--";
    this.SEP_BY_NULL_CHAR_INSTEAD_OF_NEW_LINE = "-z";
    }

    jinit_TrackedStrings_0(): TrackedStrings {
        super.jinit_JObject_0();
        this.jfields_TrackedStrings();
        return this;
    }
    

    static getInstance(): TrackedStrings | null {
        return TrackedStrings.instance;
    }
}


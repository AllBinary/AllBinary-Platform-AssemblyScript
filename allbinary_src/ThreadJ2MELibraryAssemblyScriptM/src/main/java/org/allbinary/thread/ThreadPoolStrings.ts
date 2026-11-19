/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.thread

@global export class ThreadPoolStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.thread.ThreadPoolStrings";
    }
    @lazy static jv_instance: ThreadPoolStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ThreadPoolStrings | null {
        if (!ThreadPoolStrings.js_instance) {
            ThreadPoolStrings.js_instance = true;
            ThreadPoolStrings.jv_instance = new ThreadPoolStrings().jinit_ThreadPoolStrings_0();
        }
        return ThreadPoolStrings.jv_instance;
    }
    static set instance(value: ThreadPoolStrings | null) {
        ThreadPoolStrings.js_instance = true;
        ThreadPoolStrings.jv_instance = value;
    }
    ADD_TASK: string | null = null;
    START_TASK: string | null = null;
    COMPLETE_TASK: string | null = null;

    jfields_ThreadPoolStrings(): void {
    this.ADD_TASK = "addTask";
    this.START_TASK = "Started Task: ";
    this.COMPLETE_TASK = "Completed Task: ";
    }

    jinit_ThreadPoolStrings_0(): ThreadPoolStrings {
        super.jinit_JObject_0();
        this.jfields_ThreadPoolStrings();
        return this;
    }
    

    static getInstance(): ThreadPoolStrings | null {
        return ThreadPoolStrings.instance;
    }
}


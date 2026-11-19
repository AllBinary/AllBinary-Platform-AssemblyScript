/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// import org.allbinary.logic.string.StringUtil

@global export class NullThread extends JObject {

    jclassName(): string {
        return "org.allbinary.thread.NullThread";
    }
    @lazy static jv_NULL_THREAD: JThread | null = null;
    @lazy static js_NULL_THREAD: bool = false;
    static get NULL_THREAD(): JThread | null {
        if (!NullThread.js_NULL_THREAD) {
            NullThread.js_NULL_THREAD = true;
            NullThread.jv_NULL_THREAD = new JThread().jinit_JThread_2(NullRunnable.getInstance(), StringUtil.getInstance()!.EMPTY_STRING);
        }
        return NullThread.jv_NULL_THREAD;
    }
    static set NULL_THREAD(value: JThread | null) {
        NullThread.js_NULL_THREAD = true;
        NullThread.jv_NULL_THREAD = value;
    }

    jinit_NullThread_0(): NullThread {
        super.jinit_JObject_0();
        return this;
    }
}


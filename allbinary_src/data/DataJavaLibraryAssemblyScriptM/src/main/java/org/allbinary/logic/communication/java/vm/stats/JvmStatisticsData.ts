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
// package org.allbinary.logic.communication.java.vm.stats

@global export class JvmStatisticsData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.java.vm.stats.JvmStatisticsData";
    }
    @lazy static readonly JVM_STATISTICS: string | null = "JVM_STATISTICS_";
    @lazy static jv_NAME: string | null = null;
    @lazy static js_NAME: bool = false;
    static get NAME(): string | null {
        if (!JvmStatisticsData.js_NAME) {
            JvmStatisticsData.js_NAME = true;
            JvmStatisticsData.jv_NAME = jstr(JvmStatisticsData.JVM_STATISTICS) + jstr("NAME");
        }
        return JvmStatisticsData.jv_NAME;
    }
    static set NAME(value: string | null) {
        JvmStatisticsData.js_NAME = true;
        JvmStatisticsData.jv_NAME = value;
    }
    @lazy static jv_TOTAL_MEMORY_BYTES: string | null = null;
    @lazy static js_TOTAL_MEMORY_BYTES: bool = false;
    static get TOTAL_MEMORY_BYTES(): string | null {
        if (!JvmStatisticsData.js_TOTAL_MEMORY_BYTES) {
            JvmStatisticsData.js_TOTAL_MEMORY_BYTES = true;
            JvmStatisticsData.jv_TOTAL_MEMORY_BYTES = jstr(JvmStatisticsData.JVM_STATISTICS) + jstr("TOTAL_MEMORY_BYTES");
        }
        return JvmStatisticsData.jv_TOTAL_MEMORY_BYTES;
    }
    static set TOTAL_MEMORY_BYTES(value: string | null) {
        JvmStatisticsData.js_TOTAL_MEMORY_BYTES = true;
        JvmStatisticsData.jv_TOTAL_MEMORY_BYTES = value;
    }
    @lazy static jv_TOTAL_MEMORY_KILOBYTES: string | null = null;
    @lazy static js_TOTAL_MEMORY_KILOBYTES: bool = false;
    static get TOTAL_MEMORY_KILOBYTES(): string | null {
        if (!JvmStatisticsData.js_TOTAL_MEMORY_KILOBYTES) {
            JvmStatisticsData.js_TOTAL_MEMORY_KILOBYTES = true;
            JvmStatisticsData.jv_TOTAL_MEMORY_KILOBYTES = jstr(JvmStatisticsData.JVM_STATISTICS) + jstr("TOTAL_MEMORY_KILOBYTES");
        }
        return JvmStatisticsData.jv_TOTAL_MEMORY_KILOBYTES;
    }
    static set TOTAL_MEMORY_KILOBYTES(value: string | null) {
        JvmStatisticsData.js_TOTAL_MEMORY_KILOBYTES = true;
        JvmStatisticsData.jv_TOTAL_MEMORY_KILOBYTES = value;
    }
    @lazy static jv_TOTAL_MEMORY_MEGABYTES: string | null = null;
    @lazy static js_TOTAL_MEMORY_MEGABYTES: bool = false;
    static get TOTAL_MEMORY_MEGABYTES(): string | null {
        if (!JvmStatisticsData.js_TOTAL_MEMORY_MEGABYTES) {
            JvmStatisticsData.js_TOTAL_MEMORY_MEGABYTES = true;
            JvmStatisticsData.jv_TOTAL_MEMORY_MEGABYTES = jstr(JvmStatisticsData.JVM_STATISTICS) + jstr("TOTAL_MEMORY_MEGABYTES");
        }
        return JvmStatisticsData.jv_TOTAL_MEMORY_MEGABYTES;
    }
    static set TOTAL_MEMORY_MEGABYTES(value: string | null) {
        JvmStatisticsData.js_TOTAL_MEMORY_MEGABYTES = true;
        JvmStatisticsData.jv_TOTAL_MEMORY_MEGABYTES = value;
    }
    @lazy static jv_FREE_MEMORY_BYTES: string | null = null;
    @lazy static js_FREE_MEMORY_BYTES: bool = false;
    static get FREE_MEMORY_BYTES(): string | null {
        if (!JvmStatisticsData.js_FREE_MEMORY_BYTES) {
            JvmStatisticsData.js_FREE_MEMORY_BYTES = true;
            JvmStatisticsData.jv_FREE_MEMORY_BYTES = jstr(JvmStatisticsData.JVM_STATISTICS) + jstr("FREE_MEMORY_BYTES");
        }
        return JvmStatisticsData.jv_FREE_MEMORY_BYTES;
    }
    static set FREE_MEMORY_BYTES(value: string | null) {
        JvmStatisticsData.js_FREE_MEMORY_BYTES = true;
        JvmStatisticsData.jv_FREE_MEMORY_BYTES = value;
    }
    @lazy static jv_FREE_MEMORY_KILOBYTES: string | null = null;
    @lazy static js_FREE_MEMORY_KILOBYTES: bool = false;
    static get FREE_MEMORY_KILOBYTES(): string | null {
        if (!JvmStatisticsData.js_FREE_MEMORY_KILOBYTES) {
            JvmStatisticsData.js_FREE_MEMORY_KILOBYTES = true;
            JvmStatisticsData.jv_FREE_MEMORY_KILOBYTES = jstr(JvmStatisticsData.JVM_STATISTICS) + jstr("FREE_MEMORY_KILOBYTES");
        }
        return JvmStatisticsData.jv_FREE_MEMORY_KILOBYTES;
    }
    static set FREE_MEMORY_KILOBYTES(value: string | null) {
        JvmStatisticsData.js_FREE_MEMORY_KILOBYTES = true;
        JvmStatisticsData.jv_FREE_MEMORY_KILOBYTES = value;
    }
    @lazy static jv_FREE_MEMORY_MEGABYTES: string | null = null;
    @lazy static js_FREE_MEMORY_MEGABYTES: bool = false;
    static get FREE_MEMORY_MEGABYTES(): string | null {
        if (!JvmStatisticsData.js_FREE_MEMORY_MEGABYTES) {
            JvmStatisticsData.js_FREE_MEMORY_MEGABYTES = true;
            JvmStatisticsData.jv_FREE_MEMORY_MEGABYTES = jstr(JvmStatisticsData.JVM_STATISTICS) + jstr("FREE_MEMORY_MEGABYTES");
        }
        return JvmStatisticsData.jv_FREE_MEMORY_MEGABYTES;
    }
    static set FREE_MEMORY_MEGABYTES(value: string | null) {
        JvmStatisticsData.js_FREE_MEMORY_MEGABYTES = true;
        JvmStatisticsData.jv_FREE_MEMORY_MEGABYTES = value;
    }
    @lazy static jv_MAX_MEMORY_BYTES: string | null = null;
    @lazy static js_MAX_MEMORY_BYTES: bool = false;
    static get MAX_MEMORY_BYTES(): string | null {
        if (!JvmStatisticsData.js_MAX_MEMORY_BYTES) {
            JvmStatisticsData.js_MAX_MEMORY_BYTES = true;
            JvmStatisticsData.jv_MAX_MEMORY_BYTES = jstr(JvmStatisticsData.JVM_STATISTICS) + jstr("MAX_MEMORY_BYTES");
        }
        return JvmStatisticsData.jv_MAX_MEMORY_BYTES;
    }
    static set MAX_MEMORY_BYTES(value: string | null) {
        JvmStatisticsData.js_MAX_MEMORY_BYTES = true;
        JvmStatisticsData.jv_MAX_MEMORY_BYTES = value;
    }
    @lazy static jv_MAX_MEMORY_KILOBYTES: string | null = null;
    @lazy static js_MAX_MEMORY_KILOBYTES: bool = false;
    static get MAX_MEMORY_KILOBYTES(): string | null {
        if (!JvmStatisticsData.js_MAX_MEMORY_KILOBYTES) {
            JvmStatisticsData.js_MAX_MEMORY_KILOBYTES = true;
            JvmStatisticsData.jv_MAX_MEMORY_KILOBYTES = jstr(JvmStatisticsData.JVM_STATISTICS) + jstr("MAX_MEMORY_KILOBYTES");
        }
        return JvmStatisticsData.jv_MAX_MEMORY_KILOBYTES;
    }
    static set MAX_MEMORY_KILOBYTES(value: string | null) {
        JvmStatisticsData.js_MAX_MEMORY_KILOBYTES = true;
        JvmStatisticsData.jv_MAX_MEMORY_KILOBYTES = value;
    }
    @lazy static jv_MAX_MEMORY_MEGABYTES: string | null = null;
    @lazy static js_MAX_MEMORY_MEGABYTES: bool = false;
    static get MAX_MEMORY_MEGABYTES(): string | null {
        if (!JvmStatisticsData.js_MAX_MEMORY_MEGABYTES) {
            JvmStatisticsData.js_MAX_MEMORY_MEGABYTES = true;
            JvmStatisticsData.jv_MAX_MEMORY_MEGABYTES = jstr(JvmStatisticsData.JVM_STATISTICS) + jstr("MAX_MEMORY_MEGABYTES");
        }
        return JvmStatisticsData.jv_MAX_MEMORY_MEGABYTES;
    }
    static set MAX_MEMORY_MEGABYTES(value: string | null) {
        JvmStatisticsData.js_MAX_MEMORY_MEGABYTES = true;
        JvmStatisticsData.jv_MAX_MEMORY_MEGABYTES = value;
    }
    @lazy static jv_NUMBER_OF_THREADS: string | null = null;
    @lazy static js_NUMBER_OF_THREADS: bool = false;
    static get NUMBER_OF_THREADS(): string | null {
        if (!JvmStatisticsData.js_NUMBER_OF_THREADS) {
            JvmStatisticsData.js_NUMBER_OF_THREADS = true;
            JvmStatisticsData.jv_NUMBER_OF_THREADS = jstr(JvmStatisticsData.JVM_STATISTICS) + jstr("NUMBER_OF_THREADS");
        }
        return JvmStatisticsData.jv_NUMBER_OF_THREADS;
    }
    static set NUMBER_OF_THREADS(value: string | null) {
        JvmStatisticsData.js_NUMBER_OF_THREADS = true;
        JvmStatisticsData.jv_NUMBER_OF_THREADS = value;
    }
    

    jinit_JvmStatisticsData_0(): JvmStatisticsData {
        super.jinit_JObject_0();
        return this;
    }
}


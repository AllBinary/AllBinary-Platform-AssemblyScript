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
// package org.allbinary.logic.system.hardware.components.linux

@global export class CpuInfo extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.hardware.components.linux.CpuInfo";
    }
    @lazy static jv_PROCESSOR: CpuInfo | null = null;
    @lazy static js_PROCESSOR: bool = false;
    static get PROCESSOR(): CpuInfo | null {
        if (!CpuInfo.js_PROCESSOR) {
            CpuInfo.js_PROCESSOR = true;
            CpuInfo.jv_PROCESSOR = new CpuInfo().jinit_CpuInfo_1("processor");
        }
        return CpuInfo.jv_PROCESSOR;
    }
    static set PROCESSOR(value: CpuInfo | null) {
        CpuInfo.js_PROCESSOR = true;
        CpuInfo.jv_PROCESSOR = value;
    }
    @lazy static jv_VENDORID: CpuInfo | null = null;
    @lazy static js_VENDORID: bool = false;
    static get VENDORID(): CpuInfo | null {
        if (!CpuInfo.js_VENDORID) {
            CpuInfo.js_VENDORID = true;
            CpuInfo.jv_VENDORID = new CpuInfo().jinit_CpuInfo_1("vendor_id");
        }
        return CpuInfo.jv_VENDORID;
    }
    static set VENDORID(value: CpuInfo | null) {
        CpuInfo.js_VENDORID = true;
        CpuInfo.jv_VENDORID = value;
    }
    @lazy static jv_CPUFAMILY: CpuInfo | null = null;
    @lazy static js_CPUFAMILY: bool = false;
    static get CPUFAMILY(): CpuInfo | null {
        if (!CpuInfo.js_CPUFAMILY) {
            CpuInfo.js_CPUFAMILY = true;
            CpuInfo.jv_CPUFAMILY = new CpuInfo().jinit_CpuInfo_1("cpu family");
        }
        return CpuInfo.jv_CPUFAMILY;
    }
    static set CPUFAMILY(value: CpuInfo | null) {
        CpuInfo.js_CPUFAMILY = true;
        CpuInfo.jv_CPUFAMILY = value;
    }
    @lazy static jv_MODEL: CpuInfo | null = null;
    @lazy static js_MODEL: bool = false;
    static get MODEL(): CpuInfo | null {
        if (!CpuInfo.js_MODEL) {
            CpuInfo.js_MODEL = true;
            CpuInfo.jv_MODEL = new CpuInfo().jinit_CpuInfo_1("model");
        }
        return CpuInfo.jv_MODEL;
    }
    static set MODEL(value: CpuInfo | null) {
        CpuInfo.js_MODEL = true;
        CpuInfo.jv_MODEL = value;
    }
    @lazy static jv_MODELNAME: CpuInfo | null = null;
    @lazy static js_MODELNAME: bool = false;
    static get MODELNAME(): CpuInfo | null {
        if (!CpuInfo.js_MODELNAME) {
            CpuInfo.js_MODELNAME = true;
            CpuInfo.jv_MODELNAME = new CpuInfo().jinit_CpuInfo_1("model name");
        }
        return CpuInfo.jv_MODELNAME;
    }
    static set MODELNAME(value: CpuInfo | null) {
        CpuInfo.js_MODELNAME = true;
        CpuInfo.jv_MODELNAME = value;
    }
    @lazy static jv_STEPPING: CpuInfo | null = null;
    @lazy static js_STEPPING: bool = false;
    static get STEPPING(): CpuInfo | null {
        if (!CpuInfo.js_STEPPING) {
            CpuInfo.js_STEPPING = true;
            CpuInfo.jv_STEPPING = new CpuInfo().jinit_CpuInfo_1("stepping");
        }
        return CpuInfo.jv_STEPPING;
    }
    static set STEPPING(value: CpuInfo | null) {
        CpuInfo.js_STEPPING = true;
        CpuInfo.jv_STEPPING = value;
    }
    @lazy static jv_CPUMHZ: CpuInfo | null = null;
    @lazy static js_CPUMHZ: bool = false;
    static get CPUMHZ(): CpuInfo | null {
        if (!CpuInfo.js_CPUMHZ) {
            CpuInfo.js_CPUMHZ = true;
            CpuInfo.jv_CPUMHZ = new CpuInfo().jinit_CpuInfo_1("cpu MHz");
        }
        return CpuInfo.jv_CPUMHZ;
    }
    static set CPUMHZ(value: CpuInfo | null) {
        CpuInfo.js_CPUMHZ = true;
        CpuInfo.jv_CPUMHZ = value;
    }
    @lazy static jv_CACHESIZE: CpuInfo | null = null;
    @lazy static js_CACHESIZE: bool = false;
    static get CACHESIZE(): CpuInfo | null {
        if (!CpuInfo.js_CACHESIZE) {
            CpuInfo.js_CACHESIZE = true;
            CpuInfo.jv_CACHESIZE = new CpuInfo().jinit_CpuInfo_1("cache size");
        }
        return CpuInfo.jv_CACHESIZE;
    }
    static set CACHESIZE(value: CpuInfo | null) {
        CpuInfo.js_CACHESIZE = true;
        CpuInfo.jv_CACHESIZE = value;
    }
    @lazy static jv_FDIVBUG: CpuInfo | null = null;
    @lazy static js_FDIVBUG: bool = false;
    static get FDIVBUG(): CpuInfo | null {
        if (!CpuInfo.js_FDIVBUG) {
            CpuInfo.js_FDIVBUG = true;
            CpuInfo.jv_FDIVBUG = new CpuInfo().jinit_CpuInfo_1("fdiv_bug");
        }
        return CpuInfo.jv_FDIVBUG;
    }
    static set FDIVBUG(value: CpuInfo | null) {
        CpuInfo.js_FDIVBUG = true;
        CpuInfo.jv_FDIVBUG = value;
    }
    @lazy static jv_HLTBUG: CpuInfo | null = null;
    @lazy static js_HLTBUG: bool = false;
    static get HLTBUG(): CpuInfo | null {
        if (!CpuInfo.js_HLTBUG) {
            CpuInfo.js_HLTBUG = true;
            CpuInfo.jv_HLTBUG = new CpuInfo().jinit_CpuInfo_1("hlt_bug");
        }
        return CpuInfo.jv_HLTBUG;
    }
    static set HLTBUG(value: CpuInfo | null) {
        CpuInfo.js_HLTBUG = true;
        CpuInfo.jv_HLTBUG = value;
    }
    @lazy static jv_F00FBUG: CpuInfo | null = null;
    @lazy static js_F00FBUG: bool = false;
    static get F00FBUG(): CpuInfo | null {
        if (!CpuInfo.js_F00FBUG) {
            CpuInfo.js_F00FBUG = true;
            CpuInfo.jv_F00FBUG = new CpuInfo().jinit_CpuInfo_1("f00f_bug");
        }
        return CpuInfo.jv_F00FBUG;
    }
    static set F00FBUG(value: CpuInfo | null) {
        CpuInfo.js_F00FBUG = true;
        CpuInfo.jv_F00FBUG = value;
    }
    @lazy static jv_COMABUG: CpuInfo | null = null;
    @lazy static js_COMABUG: bool = false;
    static get COMABUG(): CpuInfo | null {
        if (!CpuInfo.js_COMABUG) {
            CpuInfo.js_COMABUG = true;
            CpuInfo.jv_COMABUG = new CpuInfo().jinit_CpuInfo_1("coma_bug");
        }
        return CpuInfo.jv_COMABUG;
    }
    static set COMABUG(value: CpuInfo | null) {
        CpuInfo.js_COMABUG = true;
        CpuInfo.jv_COMABUG = value;
    }
    @lazy static jv_FPU: CpuInfo | null = null;
    @lazy static js_FPU: bool = false;
    static get FPU(): CpuInfo | null {
        if (!CpuInfo.js_FPU) {
            CpuInfo.js_FPU = true;
            CpuInfo.jv_FPU = new CpuInfo().jinit_CpuInfo_1("fpu");
        }
        return CpuInfo.jv_FPU;
    }
    static set FPU(value: CpuInfo | null) {
        CpuInfo.js_FPU = true;
        CpuInfo.jv_FPU = value;
    }
    @lazy static jv_FPUEXCEPTION: CpuInfo | null = null;
    @lazy static js_FPUEXCEPTION: bool = false;
    static get FPUEXCEPTION(): CpuInfo | null {
        if (!CpuInfo.js_FPUEXCEPTION) {
            CpuInfo.js_FPUEXCEPTION = true;
            CpuInfo.jv_FPUEXCEPTION = new CpuInfo().jinit_CpuInfo_1("fpu_exception");
        }
        return CpuInfo.jv_FPUEXCEPTION;
    }
    static set FPUEXCEPTION(value: CpuInfo | null) {
        CpuInfo.js_FPUEXCEPTION = true;
        CpuInfo.jv_FPUEXCEPTION = value;
    }
    @lazy static jv_CPUIDLEVEL: CpuInfo | null = null;
    @lazy static js_CPUIDLEVEL: bool = false;
    static get CPUIDLEVEL(): CpuInfo | null {
        if (!CpuInfo.js_CPUIDLEVEL) {
            CpuInfo.js_CPUIDLEVEL = true;
            CpuInfo.jv_CPUIDLEVEL = new CpuInfo().jinit_CpuInfo_1("cache size");
        }
        return CpuInfo.jv_CPUIDLEVEL;
    }
    static set CPUIDLEVEL(value: CpuInfo | null) {
        CpuInfo.js_CPUIDLEVEL = true;
        CpuInfo.jv_CPUIDLEVEL = value;
    }
    @lazy static jv_WP: CpuInfo | null = null;
    @lazy static js_WP: bool = false;
    static get WP(): CpuInfo | null {
        if (!CpuInfo.js_WP) {
            CpuInfo.js_WP = true;
            CpuInfo.jv_WP = new CpuInfo().jinit_CpuInfo_1("yes");
        }
        return CpuInfo.jv_WP;
    }
    static set WP(value: CpuInfo | null) {
        CpuInfo.js_WP = true;
        CpuInfo.jv_WP = value;
    }
    @lazy static jv_FLAGS: CpuInfo | null = null;
    @lazy static js_FLAGS: bool = false;
    static get FLAGS(): CpuInfo | null {
        if (!CpuInfo.js_FLAGS) {
            CpuInfo.js_FLAGS = true;
            CpuInfo.jv_FLAGS = new CpuInfo().jinit_CpuInfo_1("flags");
        }
        return CpuInfo.jv_FLAGS;
    }
    static set FLAGS(value: CpuInfo | null) {
        CpuInfo.js_FLAGS = true;
        CpuInfo.jv_FLAGS = value;
    }
    @lazy static jv_BOGOMIPS: CpuInfo | null = null;
    @lazy static js_BOGOMIPS: bool = false;
    static get BOGOMIPS(): CpuInfo | null {
        if (!CpuInfo.js_BOGOMIPS) {
            CpuInfo.js_BOGOMIPS = true;
            CpuInfo.jv_BOGOMIPS = new CpuInfo().jinit_CpuInfo_1("bogomips");
        }
        return CpuInfo.jv_BOGOMIPS;
    }
    static set BOGOMIPS(value: CpuInfo | null) {
        CpuInfo.js_BOGOMIPS = true;
        CpuInfo.jv_BOGOMIPS = value;
    }
    name: string | null = null;

    jfields_CpuInfo(): void {
    
    }
    

    jinit_CpuInfo_1(name: string | null): CpuInfo {
        super.jinit_JObject_0();
        this.jfields_CpuInfo();
        this.name = name;
        return this;
    }
    

    toString(): string | null {
        return this.name;
    }
}


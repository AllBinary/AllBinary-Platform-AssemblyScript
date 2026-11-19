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
// import java.io.FileReader
// import java.io.LineNumberReader
// import java.util.HashMap
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.file.FilePathData
// import org.allbinary.logic.io.file.directory.SubDirectory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.system.hardware.components.interfaces.CpuInterface
// import org.allbinary.logic.system.hardware.components.interfaces.HardwareComponentInterface
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList

@global export class Cpu extends JObject implements CpuInterface, HardwareComponentInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.hardware.components.linux.Cpu";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    CPUFILE: string | null = null;
    cpuHashMap: JHashMap | null = null;

    jfields_Cpu(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.CPUFILE = "/proc/cpuinfo";
    this.cpuHashMap = null;
    }
    

    jinit_Cpu_1(filePath: string | null): Cpu {
        super.jinit_JObject_0();
        this.jfields_Cpu();
        this.init_1(filePath); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    jinit_Cpu_0(): Cpu {
        super.jinit_JObject_0();
        this.jfields_Cpu();
        this.init_1(this.CPUFILE); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init_1(filePath: string | null): void {
        let lineNumberReader: LineNumberReader | null = null;
        do {
            this.init_2(lineNumberReader, filePath); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.OS)) {
                this.logUtil!.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Cpu Data: ")!.append(this.toString())), this, this.commonStrings!.CONSTRUCTOR, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            { JThrowable.raise(e); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    init_2(lineNumberReader: LineNumberReader | null, filePath: string | null): void {
        do {
            let fileReader: JFileReader | null = new JFileReader().jinit_JFileReader_1(filePath); if (JThrowable.pending !== null) break;
            lineNumberReader = new LineNumberReader().jinit_LineNumberReader_1(fileReader); if (JThrowable.pending !== null) break;
            this.cpuHashMap = StdUtil.getInstance()!.createHashMap(); if (JThrowable.pending !== null) break;
            if (lineNumberReader == null) {
                let fileVector: BasicArrayList | null = SubDirectory.getInstance()!.search_2_StringAbFile(filePath, AbFile.createAbFile(FilePathData.getInstance()!.PATH_START)); if (JThrowable.pending !== null) break;
                if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.OS)) {
                    this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Cpu File BasicArrayList Size: ")!.appendint(fileVector!.size())), this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                if (!fileVector!.isEmpty()) {
                    let file: AbFile | null = changetype<AbFile | null>(fileVector!.get(0)); if (JThrowable.pending !== null) break;
                    lineNumberReader = new LineNumberReader().jinit_LineNumberReader_1(new JFileReader().jinit_JFileReader_1(file!.getPath())); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            if (lineNumberReader != null) {
                let nextLine: string | null = lineNumberReader!.readLine(); if (JThrowable.pending !== null) break;
                while (nextLine != null) {
                    let index: i32 = JString.indexOf1(nextLine, (<u16>0x3A)); if (JThrowable.pending !== null) break;
                    if (index >= 0) {
                        let key: string | null = JString.substring2(nextLine, 0, index); if (JThrowable.pending !== null) break;
                        let valueIndex: i32 = index + 1;
                        let value: string | null = JString.substring2(nextLine, valueIndex, JString.length0(nextLine)); if (JThrowable.pending !== null) break;
                        if (JString.indexOf1(key, JObject.jtoString(CpuInfo.PROCESSOR)) >= 0) {
                            this.cpuHashMap!.put(CpuInfo.PROCESSOR, value); if (JThrowable.pending !== null) break;
                        } if (JThrowable.pending !== null) break;
                        if (JString.indexOf1(key, JObject.jtoString(CpuInfo.VENDORID)) >= 0) {
                            this.cpuHashMap!.put(CpuInfo.VENDORID, value); if (JThrowable.pending !== null) break;
                        } if (JThrowable.pending !== null) break;
                        if (JString.indexOf1(key, JObject.jtoString(CpuInfo.CPUFAMILY)) >= 0) {
                            this.cpuHashMap!.put(CpuInfo.CPUFAMILY, value); if (JThrowable.pending !== null) break;
                        } if (JThrowable.pending !== null) break;
                        if (JString.indexOf1(key, JObject.jtoString(CpuInfo.MODEL)) >= 0) {
                            this.cpuHashMap!.put(CpuInfo.MODEL, value); if (JThrowable.pending !== null) break;
                        } if (JThrowable.pending !== null) break;
                        if (JString.indexOf1(key, JObject.jtoString(CpuInfo.MODELNAME)) >= 0) {
                            this.cpuHashMap!.put(CpuInfo.MODELNAME, value); if (JThrowable.pending !== null) break;
                        } if (JThrowable.pending !== null) break;
                        if (JString.indexOf1(key, JObject.jtoString(CpuInfo.STEPPING)) >= 0) {
                            this.cpuHashMap!.put(CpuInfo.STEPPING, value); if (JThrowable.pending !== null) break;
                        } if (JThrowable.pending !== null) break;
                        if (JString.indexOf1(key, JObject.jtoString(CpuInfo.CPUMHZ)) >= 0) {
                            this.cpuHashMap!.put(CpuInfo.CPUMHZ, value); if (JThrowable.pending !== null) break;
                        } if (JThrowable.pending !== null) break;
                        if (JString.indexOf1(key, JObject.jtoString(CpuInfo.CACHESIZE)) >= 0) {
                            this.cpuHashMap!.put(CpuInfo.CACHESIZE, value); if (JThrowable.pending !== null) break;
                        } if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                    nextLine = lineNumberReader!.readLine(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false);
        {
            if (lineNumberReader != null) {
                lineNumberReader!.close(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getProcessor(): string | null {
        return changetype<string | null>(this.cpuHashMap!.get(CpuInfo.PROCESSOR));
    }
    

    getVendorId(): string | null {
        return changetype<string | null>(this.cpuHashMap!.get(CpuInfo.VENDORID));
    }
    

    getCpuFamily(): string | null {
        return changetype<string | null>(this.cpuHashMap!.get(CpuInfo.CPUFAMILY));
    }
    

    getModel(): string | null {
        return changetype<string | null>(this.cpuHashMap!.get(CpuInfo.MODEL));
    }
    

    getModelName(): string | null {
        return changetype<string | null>(this.cpuHashMap!.get(CpuInfo.MODELNAME));
    }
    

    getStepping(): string | null {
        return changetype<string | null>(this.cpuHashMap!.get(CpuInfo.STEPPING));
    }
    

    getCpuSpeed(): string | null {
        return changetype<string | null>(this.cpuHashMap!.get(CpuInfo.CPUMHZ));
    }
    

    getCacheSize(): string | null {
        return changetype<string | null>(this.cpuHashMap!.get(CpuInfo.CACHESIZE));
    }
    

    compareTo(cpuInterface: CpuInterface | null): bool {
        return true;
    }
    

    compareTo(componentInterface: HardwareComponentInterface | null): bool {
        return true;
    }
    

    toString(): string | null {
        let commonLabels: CommonLabels | null = CommonLabels.getInstance(); if (JThrowable.pending !== null) return null;
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return null;
        let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringMaker!.append(JObject.jtoString(CpuInfo.PROCESSOR))!.append(commonLabels!.COLON_SEP)!.append(this.getProcessor()); if (JThrowable.pending !== null) return null;
        stringMaker!.append(commonSeps!.NEW_LINE); if (JThrowable.pending !== null) return null;
        stringMaker!.append(JObject.jtoString(CpuInfo.VENDORID))!.append(commonLabels!.COLON_SEP)!.append(this.getVendorId()); if (JThrowable.pending !== null) return null;
        stringMaker!.append(commonSeps!.NEW_LINE); if (JThrowable.pending !== null) return null;
        stringMaker!.append(JObject.jtoString(CpuInfo.CPUFAMILY))!.append(commonLabels!.COLON_SEP)!.append(this.getCpuFamily()); if (JThrowable.pending !== null) return null;
        stringMaker!.append(commonSeps!.NEW_LINE); if (JThrowable.pending !== null) return null;
        stringMaker!.append(JObject.jtoString(CpuInfo.MODEL))!.append(commonLabels!.COLON_SEP)!.append(this.getModel()); if (JThrowable.pending !== null) return null;
        stringMaker!.append(commonSeps!.NEW_LINE); if (JThrowable.pending !== null) return null;
        stringMaker!.append(JObject.jtoString(CpuInfo.MODELNAME))!.append(commonLabels!.COLON_SEP)!.append(this.getModelName()); if (JThrowable.pending !== null) return null;
        stringMaker!.append(commonSeps!.NEW_LINE); if (JThrowable.pending !== null) return null;
        stringMaker!.append(JObject.jtoString(CpuInfo.STEPPING))!.append(commonLabels!.COLON_SEP)!.append(this.getStepping()); if (JThrowable.pending !== null) return null;
        stringMaker!.append(commonSeps!.NEW_LINE); if (JThrowable.pending !== null) return null;
        stringMaker!.append(JObject.jtoString(CpuInfo.CPUMHZ))!.append(commonLabels!.COLON_SEP)!.append(this.getCpuSpeed()); if (JThrowable.pending !== null) return null;
        stringMaker!.append(commonSeps!.NEW_LINE); if (JThrowable.pending !== null) return null;
        stringMaker!.append(JObject.jtoString(CpuInfo.CACHESIZE))!.append(commonLabels!.COLON_SEP)!.append(this.getCacheSize()); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringMaker);
    }
}


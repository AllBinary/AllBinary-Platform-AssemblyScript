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
// package org.allbinary.logic.io
// import org.allbinary.logic.io.file.AbFile

@global export class DataOutputStreamFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.DataOutputStreamFactory";
    }
    @lazy static jv_instance: DataOutputStreamFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DataOutputStreamFactory | null {
        if (!DataOutputStreamFactory.js_instance) {
            DataOutputStreamFactory.js_instance = true;
            DataOutputStreamFactory.jv_instance = new DataOutputStreamFactory().jinit_DataOutputStreamFactory_0();
        }
        return DataOutputStreamFactory.jv_instance;
    }
    static set instance(value: DataOutputStreamFactory | null) {
        DataOutputStreamFactory.js_instance = true;
        DataOutputStreamFactory.jv_instance = value;
    }

    jinit_DataOutputStreamFactory_0(): DataOutputStreamFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): DataOutputStreamFactory | null {
        return DataOutputStreamFactory.instance;
    }
    

    getInstanceForAbFile(file: AbFile | null): AbDataOutputStream | null {
        let idFileOutputStream: AbFileOutputStream | null = AbFileOutputStream.createFromAbFile(file); if (JThrowable.pending !== null) return null;
        let idOutData: AbDataOutputStream | null = new AbDataOutputStream().jinit_AbDataOutputStream_1(idFileOutputStream); if (JThrowable.pending !== null) return null;
        return idOutData;
    }
    

    getInstance2(filePath: string | null, fileName: string | null): AbDataOutputStream | null {
        let fileStreamFactory: FileStreamFactory | null = FileStreamFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let fileOutputStream: AbFileOutputStream | null = fileStreamFactory!.getFileOutputStreamInstance(filePath, fileName); if (JThrowable.pending !== null) return null;
        let idOutData: AbDataOutputStream | null = new AbDataOutputStream().jinit_AbDataOutputStream_1(fileOutputStream); if (JThrowable.pending !== null) return null;
        return idOutData;
    }
}


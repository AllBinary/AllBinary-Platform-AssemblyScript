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
// package org.allbinary.business.init
// import java.util.HashMap
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.business.init.db.UserDbInitInfo
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes
// import org.allbinary.logic.io.path.AbPathData
// import org.allbinary.logic.string.StringMaker

@global export class InitInfoEntity extends InitSql {

    jclassName(): string {
        return "org.allbinary.business.init.InitInfoEntity";
    }
    NAME: string | null = null;
    NOTHING: string | null = null;
    tableName: string | null = null;
    tableData: string | null = null;
    NOT_IN_DB: string | null = null;
    METHOD_GET: string | null = null;
    METHOD_IS: string | null = null;
    METHOD_ADD: string | null = null;
    CREATED_SUCCESS: string | null = null;
    FAILED_TO_CREATE: string | null = null;

    jfields_InitInfoEntity(): void {
    this.NAME = "InitInfoEntity";
    this.NOTHING = "NOTHING";
    this.tableName = "initdata";
    
    this.NOT_IN_DB = "Not In DB";
    this.METHOD_GET = "get()";
    this.METHOD_IS = "is()";
    this.METHOD_ADD = "add()";
    this.CREATED_SUCCESS = " Created Successfully";
    this.FAILED_TO_CREATE = "Failed to create ";
    }
    

    jinit_InitInfoEntity_0(): InitInfoEntity {
        super.jinit_InitSql_1(new UserDbInitInfo().jinit_UserDbInitInfo_0());
        this.jfields_InitInfoEntity();
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.sqlStrings!.CREATE_TABLE); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.tableName); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.sqlStrings!.START); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.NOTHING); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(InitInfo.getInstance()!.TESTING); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(InitInfo.getInstance()!.TESTHTMLPATH); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(InitInfo.getInstance()!.MAINPATH); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.sqlStrings!.PRIMARY_KEY); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.NOTHING); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.sqlStrings!.END); if (JThrowable.pending !== null) return this;
        this.tableData = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) return this;
        this.setTable(this.tableName); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    get(): bool {
        do {
            let keyAndValue: JHashMap | null = StdUtil.getInstance()!.createHashMap(); if (JThrowable.pending !== null) break;
            keyAndValue!.put(this.NOTHING, this.NOTHING); if (JThrowable.pending !== null) break;
            let hashMap: JHashMap | null = this.getRow(keyAndValue); if (JThrowable.pending !== null) break;
            if (hashMap != null) {
                InitInfo.getInstance()!.set_1(hashMap); if (JThrowable.pending !== null) break;
                return true;
            } else {
                if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADER)) {
                    PreLogUtil.put(this.NOT_IN_DB, this.NAME, this.METHOD_GET); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                return false;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR)) {
                PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this.NAME, this.METHOD_GET, e); if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    is(): bool {
        do {
            let keyAndValue: JHashMap | null = StdUtil.getInstance()!.createHashMap(); if (JThrowable.pending !== null) break;
            keyAndValue!.put(this.NOTHING, this.NOTHING); if (JThrowable.pending !== null) break;
            let hashMap: JHashMap | null = this.getRow(keyAndValue); if (JThrowable.pending !== null) break;
            if (hashMap != null) {
                return true;
            } else {
                if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADER)) {
                    PreLogUtil.put(this.NOT_IN_DB, this.NAME, this.METHOD_IS); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                return false;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR)) {
                PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this.NAME, this.METHOD_IS, e); if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    update(): void {
        this.updateWhere(this.NOTHING, this.NOTHING, InitInfo.getInstance()!.toHashMap()); if (JThrowable.pending !== null) return;
    }
    

    add(): void {
        do {
            let values: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            values!.add(this.NOTHING); if (JThrowable.pending !== null) break;
            values!.add(InitInfo.getInstance()!.getTesting()); if (JThrowable.pending !== null) break;
            values!.add(InitInfo.getInstance()!.getTestHtmlPath()); if (JThrowable.pending !== null) break;
            values!.add(InitInfo.getInstance()!.getMainPath()); if (JThrowable.pending !== null) break;
            this.insert(values); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR)) {
                PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this.NAME, this.METHOD_ADD, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    createTable_0(): string | null {
        if (super.createTable(this.tableData)) {
            return jstr(this.tableName) + jstr(this.CREATED_SUCCESS);
        } else {
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(this.FAILED_TO_CREATE); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(this.tableData); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP); if (JThrowable.pending !== null) return null;
            return JObject.jtoString(stringBuffer);
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}


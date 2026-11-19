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
// package org.allbinary.business.installer
// import java.lang.reflect.Method
// import org.allbinary.business.init.db.DbConnectionInfo
// import org.allbinary.logic.system.security.licensing.LicensingException

//Warning you must have sql root access
@global export class InitDb extends JObject {

    jclassName(): string {
        return "org.allbinary.business.installer.InitDb";
    }
    anyType: Object | null = null;
    METHOD_CALL_GET_HOST_NAME: string | null = null;
    METHOD_CALL_ADD_USERS: string | null = null;
    METHOD_CALL_ADD_DATABASES: string | null = null;
    METHOD_CALL_ADD_TABLES: string | null = null;
    METHOD_CALL_TEMP_MAIN_PATH: string | null = null;
    METHOD_CALL_MAIN_PATH: string | null = null;

    jfields_InitDb(): void {
    this.anyType = null;
    this.METHOD_CALL_GET_HOST_NAME = "getHostName";
    this.METHOD_CALL_ADD_USERS = "addUsers";
    this.METHOD_CALL_ADD_DATABASES = "addDatabases";
    this.METHOD_CALL_ADD_TABLES = "addTables";
    this.METHOD_CALL_TEMP_MAIN_PATH = "useTemporaryMainPath";
    this.METHOD_CALL_MAIN_PATH = "useNormalMainPath";
    }
    

    jinit_InitDb_0(): InitDb {
        super.jinit_JObject_0();
        this.jfields_InitDb();
        return this;
    }
    

    jinit_InitDb_1(dbConnectionInfo: DbConnectionInfo | null): InitDb {
        super.jinit_JObject_0();
        this.jfields_InitDb();
        return this;
    }
    

    setHelper(anyType: Object | null): void {
        this.anyType = anyType;
    }
    

    getHelper(): Object | null {
        return this.anyType;
    }
    

    getHostName(): string | null {
        do {
            let dynamicClass: JClass | null = JObject.jclassOf(this.anyType); if (JThrowable.pending !== null) break;
            let method: JMethod | null = dynamicClass!.getMethod(this.METHOD_CALL_GET_HOST_NAME, null); if (JThrowable.pending !== null) break;
            let result: string | null = changetype<string | null>(method!.invoke(this.anyType, null)); if (JThrowable.pending !== null) break;
            return result;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    addUsers(): bool {
        do {
            let dynamicClass: JClass | null = JObject.jclassOf(this.anyType); if (JThrowable.pending !== null) break;
            let method: JMethod | null = dynamicClass!.getMethod(this.METHOD_CALL_ADD_USERS, null); if (JThrowable.pending !== null) break;
            let result: JBoolean | null = changetype<JBoolean | null>(method!.invoke(this.anyType, null)); if (JThrowable.pending !== null) break;
            return result!.booleanValue();
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    addDatabases(): bool {
        do {
            let dynamicClass: JClass | null = JObject.jclassOf(this.anyType); if (JThrowable.pending !== null) break;
            let method: JMethod | null = dynamicClass!.getMethod(this.METHOD_CALL_ADD_DATABASES, null); if (JThrowable.pending !== null) break;
            let result: JBoolean | null = changetype<JBoolean | null>(method!.invoke(this.anyType, null)); if (JThrowable.pending !== null) break;
            return result!.booleanValue();
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    addTables(): bool {
        do {
            let dynamicClass: JClass | null = JObject.jclassOf(this.anyType); if (JThrowable.pending !== null) break;
            let method: JMethod | null = dynamicClass!.getMethod(this.METHOD_CALL_ADD_TABLES, null); if (JThrowable.pending !== null) break;
            let result: JBoolean | null = changetype<JBoolean | null>(method!.invoke(this.anyType, null)); if (JThrowable.pending !== null) break;
            return result!.booleanValue();
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    useTemporaryMainPath(): bool {
        do {
            let dynamicClass: JClass | null = JObject.jclassOf(this.anyType); if (JThrowable.pending !== null) break;
            let method: JMethod | null = dynamicClass!.getMethod(this.METHOD_CALL_TEMP_MAIN_PATH, null); if (JThrowable.pending !== null) break;
            let result: JBoolean | null = changetype<JBoolean | null>(method!.invoke(this.anyType, null)); if (JThrowable.pending !== null) break;
            return result!.booleanValue();
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    useNormalMainPath(): bool {
        do {
            let dynamicClass: JClass | null = JObject.jclassOf(this.anyType); if (JThrowable.pending !== null) break;
            let method: JMethod | null = dynamicClass!.getMethod(this.METHOD_CALL_MAIN_PATH, null); if (JThrowable.pending !== null) break;
            let result: JBoolean | null = changetype<JBoolean | null>(method!.invoke(this.anyType, null)); if (JThrowable.pending !== null) break;
            return result!.booleanValue();
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}


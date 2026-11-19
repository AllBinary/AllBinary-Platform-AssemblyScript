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
// import java.util.HashMap
// import java.util.Map
// import java.util.Set
// import org.allbinary.business.init.db.DatabaseConnectionInfoInterface
// import org.allbinary.business.init.db.DbConnectionInfo
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.string.StringValidationUtil
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.string.CommonStrings
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes

@global export class InitializerDatabase extends JObject {

    jclassName(): string {
        return "org.allbinary.business.installer.InitializerDatabase";
    }
    static readonly MAXDB: i32 = 30;
    static readonly MAX: i32 = 16;
    static readonly MIN: i32 = 4;
    static readonly MINPASSWORD: i32 = 0;
    logUtil: LogUtil | null = null;
    adminDbUserName: string | null = null;
    adminDbPassword: string | null = null;
    adminJdbcDriver: string | null = null;
    adminSchema: string | null = null;
    adminServer: string | null = null;
    adminPort: string | null = null;
    initDb: DynamicInitDb | null = null;

    jfields_InitializerDatabase(): void {
    this.logUtil = LogUtil.getInstance();
    this.adminDbUserName = null;
    this.adminDbPassword = null;
    this.adminJdbcDriver = null;
    this.adminSchema = null;
    this.adminServer = null;
    this.adminPort = null;
    this.initDb = null;
    }
    

    jinit_InitializerDatabase_2_AbeClientInformationInterfaceMap(abeClientInformation: AbeClientInformationInterface | null, map: JMap | null): InitializerDatabase {
        super.jinit_JObject_0();
        this.jfields_InitializerDatabase();
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return this;
        let hashMap: JHashMap | null = StdUtil.getInstance()!.createHashMap(); if (JThrowable.pending !== null) return this;
        let keys: JSet | null = map!.keySet(); if (JThrowable.pending !== null) return this;
        let keyArray: StaticArray<Object | null> | null = keys!.toArray(); if (JThrowable.pending !== null) return this;
        let size: i32 = keyArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            let key: string | null = changetype<string | null>(keyArray![index]);
            let values: StaticArray<string | null> | null = changetype<StaticArray<string | null> | null>(map!.get(key)); if (JThrowable.pending !== null) return this;
            hashMap!.put(JString.new1(key), JString.new1(values![0])); if (JThrowable.pending !== null) return this;
            stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return this;
            stringBuffer!.append("key: "); if (JThrowable.pending !== null) return this;
            stringBuffer!.append(key); if (JThrowable.pending !== null) return this;
            stringBuffer!.append(" Value: "); if (JThrowable.pending !== null) return this;
            stringBuffer!.append(values![0]); if (JThrowable.pending !== null) return this;
            this.logUtil!.putF(JObject.jtoString(stringBuffer), this, "getFormData()"); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        this.getFormData(abeClientInformation, hashMap); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    jinit_InitializerDatabase_2_AbeClientInformationInterfaceHashMap(abeClientInformation: AbeClientInformationInterface | null, initHashMap: JHashMap | null): InitializerDatabase {
        super.jinit_JObject_0();
        this.jfields_InitializerDatabase();
        this.getFormData(abeClientInformation, initHashMap); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getFormData(abeClientInformation: AbeClientInformationInterface | null, hashMap: JHashMap | null): void {
        do {
            let initializerData: InitializerData | null = InitializerData.getInstance(); if (JThrowable.pending !== null) break;
            this.setAdminDbUserName(changetype<string | null>(hashMap!.get(initializerData!.DBUSER))); if (JThrowable.pending !== null) break;
            this.setAdminDbPassword(changetype<string | null>(hashMap!.get(initializerData!.DBPASSWORD))); if (JThrowable.pending !== null) break;
            this.setAdminJdbcDriver(changetype<string | null>(hashMap!.get(initializerData!.ADMINJDBCDRIVER))); if (JThrowable.pending !== null) break;
            this.setAdminSchema(changetype<string | null>(hashMap!.get(initializerData!.ADMINSCHEMA))); if (JThrowable.pending !== null) break;
            this.setAdminServer(changetype<string | null>(hashMap!.get(initializerData!.ADMINSERVER))); if (JThrowable.pending !== null) break;
            this.setAdminPort(changetype<string | null>(hashMap!.get(initializerData!.ADMINPORT))); if (JThrowable.pending !== null) break;
            let dbConnectionInfo: DbConnectionInfo | null = new DbConnectionInfo().jinit_DbConnectionInfo_0(); if (JThrowable.pending !== null) break;
            let adminDbName: string | null = StringUtil.getInstance()!.EMPTY_STRING; if (JThrowable.pending !== null) break;
            dbConnectionInfo!.setJdbcDriver(this.getAdminJdbcDriver()); if (JThrowable.pending !== null) break;
            dbConnectionInfo!.setName(adminDbName); if (JThrowable.pending !== null) break;
            dbConnectionInfo!.setUserName(this.getAdminDbUserName()); if (JThrowable.pending !== null) break;
            dbConnectionInfo!.setPassword(this.getAdminDbPassword()); if (JThrowable.pending !== null) break;
            dbConnectionInfo!.setSchema(this.getAdminSchema()); if (JThrowable.pending !== null) break;
            dbConnectionInfo!.setServer(this.getAdminServer()); if (JThrowable.pending !== null) break;
            dbConnectionInfo!.setPort(this.getAdminPort()); if (JThrowable.pending !== null) break;
            this.initDb = new DynamicInitDb().jinit_DynamicInitDb_2(abeClientInformation, changetype<DatabaseConnectionInfoInterface | null>(dbConnectionInfo)); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put("Unable to get form data", this, "getFormData()", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isJdbcDriverValid(jdbcDriverClassPathString: string | null): bool {
        do {
            JClass.forName(jdbcDriverClassPathString)!.newInstance(); if (JThrowable.pending !== null) break;
            return true;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR)) {
                let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return false;
                this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.IS_VALID, e); if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    isValid(): bool {
        let isValid: bool = true;
        if (!this.isJdbcDriverValid(this.adminJdbcDriver)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        let stringValidationUtil: StringValidationUtil | null = StringValidationUtil.getInstance(); if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isValidRequired(this.adminDbUserName, InitializerDatabase.MIN, InitializerDatabase.MAX)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isValidNotRequired(this.adminDbPassword, InitializerDatabase.MINPASSWORD, InitializerDatabase.MAX)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        return isValid;
    }
    

    getJdbcDriverValidationInfo(jdbcDriver: string | null): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("The JDBC driver ("); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(jdbcDriver); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(") you have provided is not valid.<br/>"); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    getInvalidInfo(): string | null {
        let isValid: bool = true;
        let isJdbcDriversValid: bool = true;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        if (!this.isJdbcDriverValid(this.adminJdbcDriver)) {
            isJdbcDriversValid = false;
            stringBuffer!.append(this.getJdbcDriverValidationInfo(this.getAdminJdbcDriver())); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        let stringValidationUtil: StringValidationUtil | null = StringValidationUtil.getInstance(); if (JThrowable.pending !== null) return null;
        if (!stringValidationUtil!.isValidRequired(this.adminDbUserName, InitializerDatabase.MIN, InitializerDatabase.MAX)) {
            stringBuffer!.append(jstr(jstr(jstr(jstr("Admin username should be < ") + jstr(InitializerDatabase.MAX)) + jstr(" and > ")) + jstr(InitializerDatabase.MIN)) + jstr(" characters in length.<br />")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!stringValidationUtil!.isValidNotRequired(this.adminDbPassword, InitializerDatabase.MINPASSWORD, InitializerDatabase.MAX)) {
            stringBuffer!.append(jstr(jstr(jstr(jstr("Admin password should be < ") + jstr(InitializerDatabase.MAX)) + jstr(" and > ")) + jstr(InitializerDatabase.MINPASSWORD)) + jstr(" characters in length.<br />")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!isJdbcDriversValid) {
            stringBuffer!.append(InitializerData.getInstance()!.getJdbcDriverSolutionInfo()); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    createUsers(): bool {
        do {
            this.initDb!.addUsers(); if (JThrowable.pending !== null) break;
            return true;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put("Unable to Create Users", this, "createUsers()", e); if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    createDatabases(): bool {
        do {
            this.initDb!.addDatabases(); if (JThrowable.pending !== null) break;
            return true;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put("Unable to Create Databases", this, "createDatabases()", e); if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    createTables(): bool {
        do {
            this.initDb!.addTables(); if (JThrowable.pending !== null) break;
            return true;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put("Unable to Create Tables", this, "createTables()", e); if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    getAdminDbUserName(): string | null {
        return this.adminDbUserName;
    }
    

    setAdminDbUserName(adminDbUserName: string | null): void {
        this.adminDbUserName = adminDbUserName;
    }
    

    getAdminDbPassword(): string | null {
        return this.adminDbPassword;
    }
    

    setAdminDbPassword(adminDbPassword: string | null): void {
        this.adminDbPassword = adminDbPassword;
    }
    

    getAdminJdbcDriver(): string | null {
        return this.adminJdbcDriver;
    }
    

    setAdminJdbcDriver(adminJdbcDriver: string | null): void {
        this.adminJdbcDriver = adminJdbcDriver;
    }
    

    getAdminSchema(): string | null {
        return this.adminSchema;
    }
    

    setAdminSchema(adminSchema: string | null): void {
        this.adminSchema = adminSchema;
    }
    

    getAdminServer(): string | null {
        return this.adminServer;
    }
    

    setAdminServer(adminServer: string | null): void {
        this.adminServer = adminServer;
    }
    

    getAdminPort(): string | null {
        return this.adminPort;
    }
    

    setAdminPort(adminPort: string | null): void {
        this.adminPort = adminPort;
    }
}


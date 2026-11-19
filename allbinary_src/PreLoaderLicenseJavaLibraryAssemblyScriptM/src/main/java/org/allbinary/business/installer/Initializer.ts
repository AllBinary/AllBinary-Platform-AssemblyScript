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
// import org.allbinary.business.init.db.HistoryDbInitInfo
// import org.allbinary.business.init.db.InventoryDbInitInfo
// import org.allbinary.business.init.db.LogDbInitInfo
// import org.allbinary.business.init.db.StaticPagesDbInitInfo
// import org.allbinary.business.init.db.UserDbInitInfo
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringValidationUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes

@global export class Initializer extends JObject {

    jclassName(): string {
        return "org.allbinary.business.installer.Initializer";
    }
    static readonly MAXDB: i32 = 30;
    static readonly MAX: i32 = 16;
    static readonly MIN: i32 = 4;
    static readonly MINPASSWORD: i32 = 0;
    logUtil: LogUtil | null = null;
    userJdbcDriver: string | null = null;
    userName: string | null = null;
    userUserName: string | null = null;
    userPassword: string | null = null;
    userSchema: string | null = null;
    userServer: string | null = null;
    userPort: string | null = null;
    historyJdbcDriver: string | null = null;
    historyName: string | null = null;
    historyUserName: string | null = null;
    historyPassword: string | null = null;
    historySchema: string | null = null;
    historyServer: string | null = null;
    historyPort: string | null = null;
    logJdbcDriver: string | null = null;
    logName: string | null = null;
    logUserName: string | null = null;
    logPassword: string | null = null;
    logSchema: string | null = null;
    logServer: string | null = null;
    logPort: string | null = null;
    inventoryJdbcDriver: string | null = null;
    inventoryName: string | null = null;
    inventoryUserName: string | null = null;
    inventoryPassword: string | null = null;
    inventorySchema: string | null = null;
    inventoryServer: string | null = null;
    inventoryPort: string | null = null;
    staticPagesJdbcDriver: string | null = null;
    staticPagesName: string | null = null;
    staticPagesUserName: string | null = null;
    staticPagesPassword: string | null = null;
    staticPagesSchema: string | null = null;
    staticPagesServer: string | null = null;
    staticPagesPort: string | null = null;

    jfields_Initializer(): void {
    this.logUtil = LogUtil.getInstance();
    this.userJdbcDriver = null;
    this.userName = null;
    this.userUserName = null;
    this.userPassword = null;
    this.userSchema = null;
    this.userServer = null;
    this.userPort = null;
    this.historyJdbcDriver = null;
    this.historyName = null;
    this.historyUserName = null;
    this.historyPassword = null;
    this.historySchema = null;
    this.historyServer = null;
    this.historyPort = null;
    this.logJdbcDriver = null;
    this.logName = null;
    this.logUserName = null;
    this.logPassword = null;
    this.logSchema = null;
    this.logServer = null;
    this.logPort = null;
    this.inventoryJdbcDriver = null;
    this.inventoryName = null;
    this.inventoryUserName = null;
    this.inventoryPassword = null;
    this.inventorySchema = null;
    this.inventoryServer = null;
    this.inventoryPort = null;
    this.staticPagesJdbcDriver = null;
    this.staticPagesName = null;
    this.staticPagesUserName = null;
    this.staticPagesPassword = null;
    this.staticPagesSchema = null;
    this.staticPagesServer = null;
    this.staticPagesPort = null;
    }
    

    jinit_Initializer_1_Map(map: JMap | null): Initializer {
        super.jinit_JObject_0();
        this.jfields_Initializer();
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
        this.getFormData(hashMap); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    jinit_Initializer_1_HashMap(initHashMap: JHashMap | null): Initializer {
        super.jinit_JObject_0();
        this.jfields_Initializer();
        this.getFormData(initHashMap); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getFormData(hashMap: JHashMap | null): void {
        do {
            let initializerData: InitializerData | null = InitializerData.getInstance(); if (JThrowable.pending !== null) break;
            this.userJdbcDriver = changetype<string | null>(hashMap!.get(initializerData!.CUSTOMERJDBCDRIVER)); if (JThrowable.pending !== null) break;
            this.userName = changetype<string | null>(hashMap!.get(initializerData!.CUSTOMERNAME)); if (JThrowable.pending !== null) break;
            this.userUserName = changetype<string | null>(hashMap!.get(initializerData!.CUSTOMERUSERNAME)); if (JThrowable.pending !== null) break;
            this.userPassword = changetype<string | null>(hashMap!.get(initializerData!.CUSTOMERPASSWORD)); if (JThrowable.pending !== null) break;
            this.userSchema = changetype<string | null>(hashMap!.get(initializerData!.CUSTOMERSCHEMA)); if (JThrowable.pending !== null) break;
            this.userServer = changetype<string | null>(hashMap!.get(initializerData!.CUSTOMERSERVER)); if (JThrowable.pending !== null) break;
            this.userPort = changetype<string | null>(hashMap!.get(initializerData!.CUSTOMERPORT)); if (JThrowable.pending !== null) break;
            this.historyJdbcDriver = changetype<string | null>(hashMap!.get(initializerData!.HISTORYJDBCDRIVER)); if (JThrowable.pending !== null) break;
            this.historyName = changetype<string | null>(hashMap!.get(initializerData!.HISTORYNAME)); if (JThrowable.pending !== null) break;
            this.historyUserName = changetype<string | null>(hashMap!.get(initializerData!.HISTORYUSERNAME)); if (JThrowable.pending !== null) break;
            this.historyPassword = changetype<string | null>(hashMap!.get(initializerData!.HISTORYPASSWORD)); if (JThrowable.pending !== null) break;
            this.historySchema = changetype<string | null>(hashMap!.get(initializerData!.HISTORYSCHEMA)); if (JThrowable.pending !== null) break;
            this.historyServer = changetype<string | null>(hashMap!.get(initializerData!.HISTORYSERVER)); if (JThrowable.pending !== null) break;
            this.historyPort = changetype<string | null>(hashMap!.get(initializerData!.HISTORYPORT)); if (JThrowable.pending !== null) break;
            this.logJdbcDriver = changetype<string | null>(hashMap!.get(initializerData!.LOGJDBCDRIVER)); if (JThrowable.pending !== null) break;
            this.logName = changetype<string | null>(hashMap!.get(initializerData!.LOGNAME)); if (JThrowable.pending !== null) break;
            this.logUserName = changetype<string | null>(hashMap!.get(initializerData!.LOGUSERNAME)); if (JThrowable.pending !== null) break;
            this.logPassword = changetype<string | null>(hashMap!.get(initializerData!.LOGPASSWORD)); if (JThrowable.pending !== null) break;
            this.logSchema = changetype<string | null>(hashMap!.get(initializerData!.LOGSCHEMA)); if (JThrowable.pending !== null) break;
            this.logServer = changetype<string | null>(hashMap!.get(initializerData!.LOGSERVER)); if (JThrowable.pending !== null) break;
            this.logPort = changetype<string | null>(hashMap!.get(initializerData!.LOGPORT)); if (JThrowable.pending !== null) break;
            this.inventoryJdbcDriver = changetype<string | null>(hashMap!.get(initializerData!.INVENTORYJDBCDRIVER)); if (JThrowable.pending !== null) break;
            this.inventoryName = changetype<string | null>(hashMap!.get(initializerData!.INVENTORYNAME)); if (JThrowable.pending !== null) break;
            this.inventoryUserName = changetype<string | null>(hashMap!.get(initializerData!.INVENTORYUSERNAME)); if (JThrowable.pending !== null) break;
            this.inventoryPassword = changetype<string | null>(hashMap!.get(initializerData!.INVENTORYPASSWORD)); if (JThrowable.pending !== null) break;
            this.inventorySchema = changetype<string | null>(hashMap!.get(initializerData!.INVENTORYSCHEMA)); if (JThrowable.pending !== null) break;
            this.inventoryServer = changetype<string | null>(hashMap!.get(initializerData!.INVENTORYSERVER)); if (JThrowable.pending !== null) break;
            this.inventoryPort = changetype<string | null>(hashMap!.get(initializerData!.INVENTORYPORT)); if (JThrowable.pending !== null) break;
            this.staticPagesJdbcDriver = changetype<string | null>(hashMap!.get(initializerData!.STATICPAGESJDBCDRIVER)); if (JThrowable.pending !== null) break;
            this.staticPagesName = changetype<string | null>(hashMap!.get(initializerData!.STATICPAGESNAME)); if (JThrowable.pending !== null) break;
            this.staticPagesUserName = changetype<string | null>(hashMap!.get(initializerData!.STATICPAGESUSERNAME)); if (JThrowable.pending !== null) break;
            this.staticPagesPassword = changetype<string | null>(hashMap!.get(initializerData!.STATICPAGESPASSWORD)); if (JThrowable.pending !== null) break;
            this.staticPagesSchema = changetype<string | null>(hashMap!.get(initializerData!.STATICPAGESSCHEMA)); if (JThrowable.pending !== null) break;
            this.staticPagesServer = changetype<string | null>(hashMap!.get(initializerData!.STATICPAGESSERVER)); if (JThrowable.pending !== null) break;
            this.staticPagesPort = changetype<string | null>(hashMap!.get(initializerData!.STATICPAGESPORT)); if (JThrowable.pending !== null) break;
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
        if (!this.isJdbcDriverValid(this.userJdbcDriver)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        let stringValidationUtil: StringValidationUtil | null = StringValidationUtil.getInstance(); if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isValidRequired(this.userName, Initializer.MIN, Initializer.MAXDB)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isValidRequired(this.userUserName, Initializer.MIN, Initializer.MAX)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isValidNotRequired(this.userPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!this.isJdbcDriverValid(this.historyJdbcDriver)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isValidRequired(this.historyName, Initializer.MIN, Initializer.MAXDB)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isValidRequired(this.historyUserName, Initializer.MIN, Initializer.MAX)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isValidNotRequired(this.historyPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!this.isJdbcDriverValid(this.logJdbcDriver)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isValidRequired(this.logName, Initializer.MIN, Initializer.MAXDB)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isValidRequired(this.logUserName, Initializer.MIN, Initializer.MAX)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isValidNotRequired(this.logPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!this.isJdbcDriverValid(this.inventoryJdbcDriver)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isValidRequired(this.inventoryName, Initializer.MIN, Initializer.MAXDB)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isValidRequired(this.inventoryUserName, Initializer.MIN, Initializer.MAX)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isValidNotRequired(this.inventoryPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!this.isJdbcDriverValid(this.staticPagesJdbcDriver)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isValidRequired(this.staticPagesName, Initializer.MIN, Initializer.MAXDB)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isValidRequired(this.staticPagesUserName, Initializer.MIN, Initializer.MAX)) {
            isValid = false;
        } if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isValidNotRequired(this.staticPagesPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
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
    

    getJdbcDriverSolutionInfo(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("The following describes the possible problems and solutions regarding the Jdbc Driver error(s):<p/>"); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("1. A JDBC driver you specified is not in your classpath.<br/>"); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Solution 1: Move the JDBC driver into any directory specified in the existing classpath. <br/>"); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Solution 2: Add the directory that contains the JDBC driver to the classpath.<br/>"); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Solution 3: Add the JDBC driver to the WEB-INF/lib directory where you installed this webapp.<br/>"); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("2. The JDBC driver you specified does not exit.<br/>"); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Solution: Get a JDBC driver. <br/>"); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("3. The JDBC driver you specified is not valid.<br/>"); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Solution: Use a valid JDBC driver.<p/>"); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    getInvalidInfo(): string | null {
        let isJdbcDriversValid: bool = true;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        if (!this.isJdbcDriverValid(this.userJdbcDriver)) {
            isJdbcDriversValid = false;
            stringBuffer!.append(this.getJdbcDriverValidationInfo(this.userJdbcDriver)); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        let stringValidationUtil: StringValidationUtil | null = StringValidationUtil.getInstance(); if (JThrowable.pending !== null) return null;
        if (!stringValidationUtil!.isValidRequired(this.userName, Initializer.MIN, Initializer.MAXDB)) {
            stringBuffer!.append(jstr(jstr(jstr(jstr("User db name should be < ") + jstr(Initializer.MAXDB)) + jstr(" and > ")) + jstr(Initializer.MIN)) + jstr(" characters in length.<br />")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!stringValidationUtil!.isValidRequired(this.userUserName, Initializer.MIN, Initializer.MAX)) {
            stringBuffer!.append(jstr(jstr(jstr(jstr("User db username should be < ") + jstr(Initializer.MAX)) + jstr(" and > ")) + jstr(Initializer.MIN)) + jstr(" characters in length.<br />")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!stringValidationUtil!.isValidNotRequired(this.userPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            stringBuffer!.append(jstr(jstr(jstr(jstr("User DB password should be < ") + jstr(Initializer.MAX)) + jstr(" and > ")) + jstr(Initializer.MINPASSWORD)) + jstr(" characters in length.<br />")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!this.isJdbcDriverValid(this.historyJdbcDriver)) {
            isJdbcDriversValid = false;
            stringBuffer!.append(this.getJdbcDriverValidationInfo(this.historyJdbcDriver)); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!stringValidationUtil!.isValidRequired(this.historyName, Initializer.MIN, Initializer.MAXDB)) {
            stringBuffer!.append(jstr(jstr(jstr(jstr("History db should be < ") + jstr(Initializer.MAXDB)) + jstr(" and > ")) + jstr(Initializer.MIN)) + jstr(" characters in length.<br />")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!stringValidationUtil!.isValidRequired(this.historyUserName, Initializer.MIN, Initializer.MAX)) {
            stringBuffer!.append(jstr(jstr(jstr(jstr("History db username should be < ") + jstr(Initializer.MAX)) + jstr(" and > ")) + jstr(Initializer.MIN)) + jstr(" characters in length.<br />")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!stringValidationUtil!.isValidNotRequired(this.historyPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            stringBuffer!.append(jstr(jstr(jstr(jstr("History db password should be < ") + jstr(Initializer.MAX)) + jstr(" and > ")) + jstr(Initializer.MINPASSWORD)) + jstr(" characters in length.<br />")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!this.isJdbcDriverValid(this.logJdbcDriver)) {
            isJdbcDriversValid = false;
            stringBuffer!.append(this.getJdbcDriverValidationInfo(this.logJdbcDriver)); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!stringValidationUtil!.isValidRequired(this.logName, Initializer.MIN, Initializer.MAXDB)) {
            stringBuffer!.append(jstr(jstr(jstr(jstr("Log db should be < ") + jstr(Initializer.MAXDB)) + jstr(" and > ")) + jstr(Initializer.MIN)) + jstr(" characters in length.<br />")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!stringValidationUtil!.isValidRequired(this.logUserName, Initializer.MIN, Initializer.MAX)) {
            stringBuffer!.append(jstr(jstr(jstr(jstr("Log db username should be < ") + jstr(Initializer.MAX)) + jstr(" and > ")) + jstr(Initializer.MIN)) + jstr(" characters in length.<br />")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!stringValidationUtil!.isValidNotRequired(this.logPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            stringBuffer!.append(jstr(jstr(jstr(jstr("Log db password should be < ") + jstr(Initializer.MAX)) + jstr(" and > ")) + jstr(Initializer.MINPASSWORD)) + jstr(" characters in length.<br />")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!this.isJdbcDriverValid(this.inventoryJdbcDriver)) {
            isJdbcDriversValid = false;
            stringBuffer!.append(this.getJdbcDriverValidationInfo(this.inventoryJdbcDriver)); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!stringValidationUtil!.isValidRequired(this.inventoryName, Initializer.MIN, Initializer.MAXDB)) {
            stringBuffer!.append(jstr(jstr(jstr(jstr("Inventory db should be < ") + jstr(Initializer.MAXDB)) + jstr(" and > ")) + jstr(Initializer.MIN)) + jstr(" characters in length.<br />")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!stringValidationUtil!.isValidRequired(this.inventoryUserName, Initializer.MIN, Initializer.MAX)) {
            stringBuffer!.append(jstr(jstr(jstr(jstr("Inventory db username should be < ") + jstr(Initializer.MAX)) + jstr(" and > ")) + jstr(Initializer.MIN)) + jstr(" characters in length.<br />")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!stringValidationUtil!.isValidNotRequired(this.inventoryPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            stringBuffer!.append(jstr(jstr(jstr(jstr("Inventory DB password should be < ") + jstr(Initializer.MAX)) + jstr(" and > ")) + jstr(Initializer.MINPASSWORD)) + jstr(" characters in length.<br />")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!this.isJdbcDriverValid(this.staticPagesJdbcDriver)) {
            isJdbcDriversValid = false;
            stringBuffer!.append(this.getJdbcDriverValidationInfo(this.staticPagesJdbcDriver)); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!stringValidationUtil!.isValidRequired(this.staticPagesName, Initializer.MIN, Initializer.MAXDB)) {
            stringBuffer!.append(jstr(jstr(jstr(jstr("Static Pages db should be < ") + jstr(Initializer.MAXDB)) + jstr(" and > ")) + jstr(Initializer.MIN)) + jstr(" characters in length.<br />")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!stringValidationUtil!.isValidRequired(this.staticPagesUserName, Initializer.MIN, Initializer.MAX)) {
            stringBuffer!.append(jstr(jstr(jstr(jstr("Static Pages db username should be < ") + jstr(Initializer.MAX)) + jstr(" and > ")) + jstr(Initializer.MIN)) + jstr(" characters in length.<br />")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!stringValidationUtil!.isValidNotRequired(this.staticPagesPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            stringBuffer!.append(jstr(jstr(jstr(jstr("Static Pages DB password should be < ") + jstr(Initializer.MAX)) + jstr(" and > ")) + jstr(Initializer.MINPASSWORD)) + jstr(" characters in length.<br />")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (!isJdbcDriversValid) {
            stringBuffer!.append(this.getJdbcDriverSolutionInfo()); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    set(): void {
        this.logUtil!.putF("Creating DB connection files", this, "set()"); if (JThrowable.pending !== null) return;
        let userDbInitInfo: UserDbInitInfo | null = new UserDbInitInfo().jinit_UserDbInitInfo_1(false); if (JThrowable.pending !== null) return;
        userDbInitInfo!.setJdbcDriver(this.userJdbcDriver); if (JThrowable.pending !== null) return;
        userDbInitInfo!.setName(this.userName); if (JThrowable.pending !== null) return;
        userDbInitInfo!.setUserName(this.userUserName); if (JThrowable.pending !== null) return;
        userDbInitInfo!.setPassword(this.userPassword); if (JThrowable.pending !== null) return;
        userDbInitInfo!.setSchema(this.userSchema); if (JThrowable.pending !== null) return;
        userDbInitInfo!.setServer(this.userServer); if (JThrowable.pending !== null) return;
        userDbInitInfo!.setPort(this.userPort); if (JThrowable.pending !== null) return;
        userDbInitInfo!.setHasRead(true); if (JThrowable.pending !== null) return;
        userDbInitInfo!.write(); if (JThrowable.pending !== null) return;
        let historyDbInitInfo: HistoryDbInitInfo | null = new HistoryDbInitInfo().jinit_HistoryDbInitInfo_1(false); if (JThrowable.pending !== null) return;
        historyDbInitInfo!.setJdbcDriver(this.historyJdbcDriver); if (JThrowable.pending !== null) return;
        historyDbInitInfo!.setName(this.historyName); if (JThrowable.pending !== null) return;
        historyDbInitInfo!.setUserName(this.historyUserName); if (JThrowable.pending !== null) return;
        historyDbInitInfo!.setPassword(this.historyPassword); if (JThrowable.pending !== null) return;
        historyDbInitInfo!.setSchema(this.historySchema); if (JThrowable.pending !== null) return;
        historyDbInitInfo!.setServer(this.historyServer); if (JThrowable.pending !== null) return;
        historyDbInitInfo!.setPort(this.historyPort); if (JThrowable.pending !== null) return;
        historyDbInitInfo!.setHasRead(true); if (JThrowable.pending !== null) return;
        historyDbInitInfo!.write(); if (JThrowable.pending !== null) return;
        let logDbInitInfo: LogDbInitInfo | null = new LogDbInitInfo().jinit_LogDbInitInfo_1(false); if (JThrowable.pending !== null) return;
        logDbInitInfo!.setJdbcDriver(this.logJdbcDriver); if (JThrowable.pending !== null) return;
        logDbInitInfo!.setName(this.logName); if (JThrowable.pending !== null) return;
        logDbInitInfo!.setUserName(this.logUserName); if (JThrowable.pending !== null) return;
        logDbInitInfo!.setPassword(this.logPassword); if (JThrowable.pending !== null) return;
        logDbInitInfo!.setSchema(this.logSchema); if (JThrowable.pending !== null) return;
        logDbInitInfo!.setServer(this.logServer); if (JThrowable.pending !== null) return;
        logDbInitInfo!.setPort(this.logPort); if (JThrowable.pending !== null) return;
        logDbInitInfo!.setHasRead(true); if (JThrowable.pending !== null) return;
        logDbInitInfo!.write(); if (JThrowable.pending !== null) return;
        let staticPagesDbInitInfo: StaticPagesDbInitInfo | null = new StaticPagesDbInitInfo().jinit_StaticPagesDbInitInfo_1(false); if (JThrowable.pending !== null) return;
        staticPagesDbInitInfo!.setJdbcDriver(this.staticPagesJdbcDriver); if (JThrowable.pending !== null) return;
        staticPagesDbInitInfo!.setName(this.staticPagesName); if (JThrowable.pending !== null) return;
        staticPagesDbInitInfo!.setUserName(this.staticPagesUserName); if (JThrowable.pending !== null) return;
        staticPagesDbInitInfo!.setPassword(this.staticPagesPassword); if (JThrowable.pending !== null) return;
        staticPagesDbInitInfo!.setSchema(this.staticPagesSchema); if (JThrowable.pending !== null) return;
        staticPagesDbInitInfo!.setServer(this.staticPagesServer); if (JThrowable.pending !== null) return;
        staticPagesDbInitInfo!.setPort(this.staticPagesPort); if (JThrowable.pending !== null) return;
        staticPagesDbInitInfo!.setHasRead(true); if (JThrowable.pending !== null) return;
        staticPagesDbInitInfo!.write(); if (JThrowable.pending !== null) return;
        let inventoryDbInitInfo: InventoryDbInitInfo | null = new InventoryDbInitInfo().jinit_InventoryDbInitInfo_1(false); if (JThrowable.pending !== null) return;
        inventoryDbInitInfo!.setJdbcDriver(this.inventoryJdbcDriver); if (JThrowable.pending !== null) return;
        inventoryDbInitInfo!.setName(this.inventoryName); if (JThrowable.pending !== null) return;
        inventoryDbInitInfo!.setUserName(this.inventoryUserName); if (JThrowable.pending !== null) return;
        inventoryDbInitInfo!.setPassword(this.inventoryPassword); if (JThrowable.pending !== null) return;
        inventoryDbInitInfo!.setSchema(this.inventorySchema); if (JThrowable.pending !== null) return;
        inventoryDbInitInfo!.setServer(this.inventoryServer); if (JThrowable.pending !== null) return;
        inventoryDbInitInfo!.setPort(this.inventoryPort); if (JThrowable.pending !== null) return;
        inventoryDbInitInfo!.setHasRead(true); if (JThrowable.pending !== null) return;
        inventoryDbInitInfo!.write(); if (JThrowable.pending !== null) return;
        this.logUtil!.putF("Created DB connection files", this, "set()"); if (JThrowable.pending !== null) return;
    }
}


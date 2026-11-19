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
// import org.allbinary.logic.string.StringMaker

@global export class InitializerData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.installer.InitializerData";
    }
    @lazy static jv_instance: InitializerData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): InitializerData | null {
        if (!InitializerData.js_instance) {
            InitializerData.js_instance = true;
            InitializerData.jv_instance = new InitializerData().jinit_InitializerData_0();
        }
        return InitializerData.jv_instance;
    }
    static set instance(value: InitializerData | null) {
        InitializerData.js_instance = true;
        InitializerData.jv_instance = value;
    }
    DBUSER: string | null = null;
    DBPASSWORD: string | null = null;
    ADMINJDBCDRIVER: string | null = null;
    ADMINSCHEMA: string | null = null;
    ADMINSERVER: string | null = null;
    ADMINPORT: string | null = null;
    CUSTOMERJDBCDRIVER: string | null = null;
    CUSTOMERNAME: string | null = null;
    CUSTOMERUSERNAME: string | null = null;
    CUSTOMERPASSWORD: string | null = null;
    CUSTOMERSCHEMA: string | null = null;
    CUSTOMERSERVER: string | null = null;
    CUSTOMERPORT: string | null = null;
    HISTORYJDBCDRIVER: string | null = null;
    HISTORYNAME: string | null = null;
    HISTORYUSERNAME: string | null = null;
    HISTORYPASSWORD: string | null = null;
    HISTORYSCHEMA: string | null = null;
    HISTORYSERVER: string | null = null;
    HISTORYPORT: string | null = null;
    LOGJDBCDRIVER: string | null = null;
    LOGNAME: string | null = null;
    LOGUSERNAME: string | null = null;
    LOGPASSWORD: string | null = null;
    LOGSCHEMA: string | null = null;
    LOGSERVER: string | null = null;
    LOGPORT: string | null = null;
    INVENTORYJDBCDRIVER: string | null = null;
    INVENTORYNAME: string | null = null;
    INVENTORYUSERNAME: string | null = null;
    INVENTORYPASSWORD: string | null = null;
    INVENTORYSCHEMA: string | null = null;
    INVENTORYSERVER: string | null = null;
    INVENTORYPORT: string | null = null;
    STATICPAGESJDBCDRIVER: string | null = null;
    STATICPAGESNAME: string | null = null;
    STATICPAGESUSERNAME: string | null = null;
    STATICPAGESPASSWORD: string | null = null;
    STATICPAGESSCHEMA: string | null = null;
    STATICPAGESSERVER: string | null = null;
    STATICPAGESPORT: string | null = null;

    jfields_InitializerData(): void {
    this.DBUSER = "DBUSER";
    this.DBPASSWORD = "DBPASSWORD";
    this.ADMINJDBCDRIVER = "ADMIN_JDBCDRIVER";
    this.ADMINSCHEMA = "ADMINSCHEMA";
    this.ADMINSERVER = "ADMINSERVER";
    this.ADMINPORT = "ADMINPORT";
    this.CUSTOMERJDBCDRIVER = "CUSTOMER_JDBCDRIVER";
    this.CUSTOMERNAME = "CUSTOMERNAME";
    this.CUSTOMERUSERNAME = "CUSTOMERUSERNAME";
    this.CUSTOMERPASSWORD = "CUSTOMERPASSWORD";
    this.CUSTOMERSCHEMA = "CUSTOMERSCHEMA";
    this.CUSTOMERSERVER = "CUSTOMERSERVER";
    this.CUSTOMERPORT = "CUSTOMERPORT";
    this.HISTORYJDBCDRIVER = "HISTORY_JDBCDRIVER";
    this.HISTORYNAME = "HISTORYNAME";
    this.HISTORYUSERNAME = "HISTORYUSERNAME";
    this.HISTORYPASSWORD = "HISTORYPASSWORD";
    this.HISTORYSCHEMA = "HISTORYSCHEMA";
    this.HISTORYSERVER = "HISTORYSERVER";
    this.HISTORYPORT = "HISTORYPORT";
    this.LOGJDBCDRIVER = "LOG_JDBCDRIVER";
    this.LOGNAME = "LOGNAME";
    this.LOGUSERNAME = "LOGUSERNAME";
    this.LOGPASSWORD = "LOGPASSWORD";
    this.LOGSCHEMA = "LOGSCHEMA";
    this.LOGSERVER = "LOGSERVER";
    this.LOGPORT = "LOGPORT";
    this.INVENTORYJDBCDRIVER = "INVENTORY_JDBCDRIVER";
    this.INVENTORYNAME = "INVENTORYNAME";
    this.INVENTORYUSERNAME = "INVENTORYUSERNAME";
    this.INVENTORYPASSWORD = "INVENTORYPASSWORD";
    this.INVENTORYSCHEMA = "INVENTORYSCHEMA";
    this.INVENTORYSERVER = "INVENTORYSERVER";
    this.INVENTORYPORT = "INVENTORYPORT";
    this.STATICPAGESJDBCDRIVER = "STATICPAGES_JDBCDRIVER";
    this.STATICPAGESNAME = "STATICPAGESNAME";
    this.STATICPAGESUSERNAME = "STATICPAGESUSERNAME";
    this.STATICPAGESPASSWORD = "STATICPAGESPASSWORD";
    this.STATICPAGESSCHEMA = "STATICPAGESSCHEMA";
    this.STATICPAGESSERVER = "STATICPAGESSERVER";
    this.STATICPAGESPORT = "STATICPAGESPORT";
    }

    jinit_InitializerData_0(): InitializerData {
        super.jinit_JObject_0();
        this.jfields_InitializerData();
        return this;
    }
    

    static getInstance(): InitializerData | null {
        return InitializerData.instance;
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
}


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
// package org.allbinary.business.init.db
// import org.allbinary.logic.io.path.AbPathData
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonSeps

@global export class DbConnectionInfo extends JObject implements DatabaseConnectionInfoInterface {

    jclassName(): string {
        return "org.allbinary.business.init.db.DbConnectionInfo";
    }
    jdbcDriver: string | null = null;
    name: string | null = null;
    userName: string | null = null;
    password: string | null = null;
    schema: string | null = null;
    server: string | null = null;
    port: string | null = null;
    url: string | null = null;
    host: string | null = null;
    SCHEMA_SEP: string | null = null;
    USER_NAME_KEY: string | null = null;
    PASSWORD_KEY: string | null = null;

    jfields_DbConnectionInfo(): void {
    this.jdbcDriver = null;
    this.name = null;
    this.userName = null;
    this.password = null;
    this.schema = null;
    this.server = null;
    this.port = null;
    this.url = null;
    this.host = null;
    this.SCHEMA_SEP = "://";
    this.USER_NAME_KEY = "?user=";
    this.PASSWORD_KEY = "&password=";
    }
    

    jinit_DbConnectionInfo_0(): DbConnectionInfo {
        super.jinit_JObject_0();
        this.jfields_DbConnectionInfo();
        return this;
    }
    

    updateUrl(): void {
        this.updateHost(); if (JThrowable.pending !== null) return;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.getHost()); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.getName()); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.getUserNameKey()); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.getUserName()); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.getPasswordKey()); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.getPassword()); if (JThrowable.pending !== null) return;
        this.url = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) return;
    }
    

    getUrl(): string | null {
        return this.url;
    }
    

    getJdbcDriver(): string | null {
        return this.jdbcDriver;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    getUserName(): string | null {
        return this.userName;
    }
    

    getPassword(): string | null {
        return this.password;
    }
    

    updateHost(): void {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.getSchema()); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.SCHEMA_SEP); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.getServer()); if (JThrowable.pending !== null) return;
        if (this.getPort() != null && JString.length0(this.getPort()) > 1) {
            stringBuffer!.append(CommonSeps.getInstance()!.COLON); if (JThrowable.pending !== null) return;
            stringBuffer!.append(this.getPort()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR); if (JThrowable.pending !== null) return;
        this.host = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) return;
    }
    

    getHost(): string | null {
        return this.host;
    }
    

    getSchema(): string | null {
        return this.schema;
    }
    

    getServer(): string | null {
        return this.server;
    }
    

    getPort(): string | null {
        return this.port;
    }
    

    setJdbcDriver(value: string | null): void {
        this.jdbcDriver = value;
    }
    

    setName(value: string | null): void {
        this.name = value;
        this.updateUrl(); if (JThrowable.pending !== null) return;
    }
    

    setUserName(value: string | null): void {
        this.userName = value;
        this.updateUrl(); if (JThrowable.pending !== null) return;
    }
    

    setPassword(value: string | null): void {
        this.password = value;
        this.updateUrl(); if (JThrowable.pending !== null) return;
    }
    

    setSchema(value: string | null): void {
        this.schema = value;
        this.updateUrl(); if (JThrowable.pending !== null) return;
    }
    

    setServer(value: string | null): void {
        this.server = value;
        this.updateUrl(); if (JThrowable.pending !== null) return;
    }
    

    setPort(value: string | null): void {
        this.port = value;
        this.updateUrl(); if (JThrowable.pending !== null) return;
    }
    

    getUserNameKey(): string | null {
        return this.USER_NAME_KEY;
    }
    

    getPasswordKey(): string | null {
        return this.PASSWORD_KEY;
    }
}


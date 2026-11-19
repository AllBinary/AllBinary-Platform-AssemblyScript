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

@global export interface DatabaseConnectionInfoInterface {
    

    getUrl(): string | null;
    

    getJdbcDriver(): string | null;
    

    getName(): string | null;
    

    getUserName(): string | null;
    

    getPassword(): string | null;
    

    getHost(): string | null;
    

    getSchema(): string | null;
    

    getServer(): string | null;
    

    getPort(): string | null;
    

    setJdbcDriver(value: string | null): void;
    

    setName(value: string | null): void;
    

    setUserName(value: string | null): void;
    

    setPassword(value: string | null): void;
    

    setSchema(value: string | null): void;
    

    setServer(value: string | null): void;
    

    setPort(value: string | null): void;
    

    getUserNameKey(): string | null;
    

    getPasswordKey(): string | null;
}


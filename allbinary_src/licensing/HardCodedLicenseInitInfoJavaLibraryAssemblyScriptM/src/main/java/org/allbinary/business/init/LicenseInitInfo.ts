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
// import org.allbinary.debug.DebugFactory
// import org.allbinary.debug.NoDebug
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class LicenseInitInfo extends JObject {

    jclassName(): string {
        return "org.allbinary.business.init.LicenseInitInfo";
    }
    id: string | null = null;
    serverList: BasicArrayList | null = null;

    jfields_LicenseInitInfo(): void {
    this.id = StringUtil.getInstance()!.EMPTY_STRING;
    this.serverList = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    jinit_LicenseInitInfo_0(): LicenseInitInfo {
        super.jinit_JObject_0();
        this.jfields_LicenseInitInfo();
        return this;
    }
    

    getLicenseId(): string | null {
        return this.id;
    }
    

    getServer(index: i32): string | null {
        return changetype<string | null>(this.serverList!.get(index));
    }
    

    getNumberOfServers(): i32 {
        return this.serverList!.size();
    }
    

    setLicenseId(value: string | null): void {
        this.id = value;
    }
    

    clearServers(): void {
        this.serverList!.clear(); if (JThrowable.pending !== null) return;
    }
    

    setServer(value: string | null, index: i32): void {
        this.serverList!.addAt(index, value); if (JThrowable.pending !== null) return;
    }
    

    addServer(value: string | null): void {
        this.serverList!.add(value); if (JThrowable.pending !== null) return;
    }
    

    getServerList(): BasicArrayList | null {
        return this.serverList;
    }
    

    setServerList(servers: BasicArrayList | null): void {
        if (DebugFactory.getInstance() == NoDebug.getInstance()) {
            this.serverList = servers;
        } if (JThrowable.pending !== null) return;
    }
}


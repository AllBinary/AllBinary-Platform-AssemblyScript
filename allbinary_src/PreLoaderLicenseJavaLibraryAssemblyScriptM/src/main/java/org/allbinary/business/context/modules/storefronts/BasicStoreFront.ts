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
// package org.allbinary.business.context.modules.storefronts
// import java.util.HashMap
// import org.allbinary.business.context.modules.storefront.StoreFrontData
// import org.allbinary.business.entry.EntryData
// import org.allbinary.business.user.UserData
// import org.allbinary.logic.string.tokens.Tokenizer
// import org.allbinary.string.CommonSeps
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.globals.URLGLOBALS

@global export class BasicStoreFront extends JObject implements BasicStoreFrontInterface {

    jclassName(): string {
        return "org.allbinary.business.context.modules.storefronts.BasicStoreFront";
    }
    name: string | null = null;
    userName: string | null = null;
    basketName: string | null = null;
    homeHostName: string | null = null;
    homeHostNamePath: string | null = null;
    hostName: string | null = null;
    hostNamePath: string | null = null;
    testHomeHostName: string | null = null;
    testHomeHostNamePath: string | null = null;
    testHostName: string | null = null;
    testHostNamePath: string | null = null;
    imagePath: string | null = null;
    staticPath: string | null = null;
    categoryPath: string | null = null;
    inventoryControl: string | null = null;
    subStores: string | null = null;
    tagLocation: string | null = null;
    packageLocation: string | null = null;
    ftp: string | null = null;
    ftpPath: string | null = null;
    ftpUserName: string | null = null;
    ftpPassword: string | null = null;
    testFtp: string | null = null;
    testFtpPath: string | null = null;
    testFtpUserName: string | null = null;
    testFtpPassword: string | null = null;
    timeCreated: string | null = null;
    lastModified: string | null = null;

    jfields_BasicStoreFront(): void {
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
    

    jinit_BasicStoreFront_0(): BasicStoreFront {
        super.jinit_JObject_0();
        this.jfields_BasicStoreFront();
        return this;
    }
    

    jinit_BasicStoreFront_1(storeHashMap: JHashMap | null): BasicStoreFront {
        super.jinit_JObject_0();
        this.jfields_BasicStoreFront();
        let storeFrontData: StoreFrontData | null = StoreFrontData.getInstance(); if (JThrowable.pending !== null) return this;
        this.name = changetype<string | null>(storeHashMap!.get(storeFrontData!.NAME)); if (JThrowable.pending !== null) return this;
        this.userName = changetype<string | null>(storeHashMap!.get(UserData.USERNAME)); if (JThrowable.pending !== null) return this;
        this.basketName = changetype<string | null>(storeHashMap!.get(storeFrontData!.NAME)); if (JThrowable.pending !== null) return this;
        this.homeHostName = changetype<string | null>(storeHashMap!.get(storeFrontData!.HOMEHOSTNAME)); if (JThrowable.pending !== null) return this;
        this.homeHostNamePath = changetype<string | null>(storeHashMap!.get(storeFrontData!.HOMEHOSTNAMEPATH)); if (JThrowable.pending !== null) return this;
        this.hostName = changetype<string | null>(storeHashMap!.get(storeFrontData!.HOSTNAME)); if (JThrowable.pending !== null) return this;
        this.hostNamePath = changetype<string | null>(storeHashMap!.get(storeFrontData!.HOSTNAMEPATH)); if (JThrowable.pending !== null) return this;
        this.testHomeHostName = changetype<string | null>(storeHashMap!.get(storeFrontData!.TESTHOMEHOSTNAME)); if (JThrowable.pending !== null) return this;
        this.testHomeHostNamePath = changetype<string | null>(storeHashMap!.get(storeFrontData!.TESTHOMEHOSTNAMEPATH)); if (JThrowable.pending !== null) return this;
        this.testHostName = changetype<string | null>(storeHashMap!.get(storeFrontData!.TESTHOSTNAME)); if (JThrowable.pending !== null) return this;
        this.testHostNamePath = changetype<string | null>(storeHashMap!.get(storeFrontData!.TESTHOSTNAMEPATH)); if (JThrowable.pending !== null) return this;
        this.imagePath = changetype<string | null>(storeHashMap!.get(storeFrontData!.IMAGEPATH)); if (JThrowable.pending !== null) return this;
        this.staticPath = changetype<string | null>(storeHashMap!.get(storeFrontData!.STATICPATH)); if (JThrowable.pending !== null) return this;
        this.categoryPath = changetype<string | null>(storeHashMap!.get(storeFrontData!.CATEGORYPATH)); if (JThrowable.pending !== null) return this;
        this.inventoryControl = changetype<string | null>(storeHashMap!.get(storeFrontData!.INVENTORYCONTROL)); if (JThrowable.pending !== null) return this;
        this.subStores = changetype<string | null>(storeHashMap!.get(storeFrontData!.SUBSTORES)); if (JThrowable.pending !== null) return this;
        this.tagLocation = changetype<string | null>(storeHashMap!.get(storeFrontData!.TAGLOCATION)); if (JThrowable.pending !== null) return this;
        this.packageLocation = changetype<string | null>(storeHashMap!.get(storeFrontData!.PACKAGELOCATION)); if (JThrowable.pending !== null) return this;
        this.ftp = changetype<string | null>(storeHashMap!.get(storeFrontData!.FTP)); if (JThrowable.pending !== null) return this;
        this.ftpPath = changetype<string | null>(storeHashMap!.get(storeFrontData!.FTPPATH)); if (JThrowable.pending !== null) return this;
        this.ftpUserName = changetype<string | null>(storeHashMap!.get(storeFrontData!.FTPUSERNAME)); if (JThrowable.pending !== null) return this;
        this.ftpPassword = changetype<string | null>(storeHashMap!.get(storeFrontData!.FTPPASSWORD)); if (JThrowable.pending !== null) return this;
        this.testFtp = changetype<string | null>(storeHashMap!.get(storeFrontData!.TESTFTP)); if (JThrowable.pending !== null) return this;
        this.testFtpPath = changetype<string | null>(storeHashMap!.get(storeFrontData!.TESTFTPPATH)); if (JThrowable.pending !== null) return this;
        this.testFtpUserName = changetype<string | null>(storeHashMap!.get(storeFrontData!.TESTFTPUSERNAME)); if (JThrowable.pending !== null) return this;
        this.testFtpPassword = changetype<string | null>(storeHashMap!.get(storeFrontData!.TESTFTPPASSWORD)); if (JThrowable.pending !== null) return this;
        this.timeCreated = changetype<string | null>(storeHashMap!.get(EntryData.getInstance()!.TIMECREATED)); if (JThrowable.pending !== null) return this;
        this.lastModified = changetype<string | null>(storeHashMap!.get(EntryData.getInstance()!.LASTMODIFIED)); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getTestHtmlPath(): string | null {
        return jstr(URLGLOBALS.getTestHtmlPath()) + jstr(this.getCurrentHostNamePath());
    }
    

    getCurrentHostName(): string | null {
        let location: string | null = null;
        if (URLGLOBALS.isTestingMode()) {
            location = this.getTestHostName(); if (JThrowable.pending !== null) return null;
        } else {
            location = this.getHostName(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return location;
    }
    

    getCurrentHostNamePath(): string | null {
        let location: string | null = null;
        if (URLGLOBALS.isTestingMode()) {
            location = this.getTestHostNamePath(); if (JThrowable.pending !== null) return null;
        } else {
            location = this.getHostNamePath(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return location;
    }
    

    getCurrentHomeHostName(): string | null {
        let location: string | null = null;
        if (URLGLOBALS.isTestingMode()) {
            location = this.getTestHomeHostName(); if (JThrowable.pending !== null) return null;
        } else {
            location = this.getHomeHostName(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return location;
    }
    

    getCurrentHomeHostNamePath(): string | null {
        let location: string | null = null;
        if (URLGLOBALS.isTestingMode()) {
            location = this.getTestHomeHostNamePath(); if (JThrowable.pending !== null) return null;
        } else {
            location = this.getHomeHostNamePath(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return location;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    getUserName(): string | null {
        return this.userName;
    }
    

    getBasketName(): string | null {
        return this.basketName;
    }
    

    getHomeHostName(): string | null {
        return this.homeHostName;
    }
    

    getHomeHostNamePath(): string | null {
        return this.homeHostNamePath;
    }
    

    getHostName(): string | null {
        return this.hostName;
    }
    

    getHostNamePath(): string | null {
        return this.hostNamePath;
    }
    

    getTestHomeHostName(): string | null {
        return this.testHomeHostName;
    }
    

    getTestHomeHostNamePath(): string | null {
        return this.testHomeHostNamePath;
    }
    

    getTestHostName(): string | null {
        return this.testHostName;
    }
    

    getTestHostNamePath(): string | null {
        return this.testHostNamePath;
    }
    

    getStaticPath(): string | null {
        return this.staticPath;
    }
    

    getCategoryPath(): string | null {
        return this.categoryPath;
    }
    

    getInventoryControl(): string | null {
        return this.inventoryControl;
    }
    

    getSubStores(): BasicArrayList | null {
        do {
            let tokenizer: Tokenizer | null = new Tokenizer().jinit_Tokenizer_1(CommonSeps.getInstance()!.SEMICOLON); if (JThrowable.pending !== null) break;
            let subStoreVector: BasicArrayList | null = tokenizer!.getTokensFromString(this.subStores, new BasicArrayListD().jinit_BasicArrayListD_0()); if (JThrowable.pending !== null) break;
            return subStoreVector;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getTagLocation(): string | null {
        return this.tagLocation;
    }
    

    getPackageLocation(): string | null {
        return this.packageLocation;
    }
    

    getFtp(): string | null {
        return this.ftp;
    }
    

    getFtpUserName(): string | null {
        return this.ftpUserName;
    }
    

    getFtpPassword(): string | null {
        return this.ftpPassword;
    }
    

    getTestFtp(): string | null {
        return this.testFtp;
    }
    

    getTestFtpUserName(): string | null {
        return this.testFtpUserName;
    }
    

    getTestFtpPassword(): string | null {
        return this.testFtpPassword;
    }
    

    getFtpPath(): string | null {
        return this.ftpPath;
    }
    

    getTestFtpPath(): string | null {
        return this.testFtpPath;
    }
    

    getTimeCreated(): string | null {
        return this.timeCreated;
    }
    

    getLastModified(): string | null {
        return this.lastModified;
    }
}


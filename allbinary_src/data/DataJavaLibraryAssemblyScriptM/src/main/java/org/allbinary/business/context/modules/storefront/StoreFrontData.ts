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
// package org.allbinary.business.context.modules.storefront

@global export class StoreFrontData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.context.modules.storefront.StoreFrontData";
    }
    @lazy static jv_instance: StoreFrontData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): StoreFrontData | null {
        if (!StoreFrontData.js_instance) {
            StoreFrontData.js_instance = true;
            StoreFrontData.jv_instance = new StoreFrontData().jinit_StoreFrontData_0();
        }
        return StoreFrontData.jv_instance;
    }
    static set instance(value: StoreFrontData | null) {
        StoreFrontData.js_instance = true;
        StoreFrontData.jv_instance = value;
    }
    CANCEL: string | null = null;
    SELECT: string | null = null;
    INSTALL: string | null = null;
    INSTALL_COMPLETE: string | null = null;
    NAME: string | null = null;
    CURRENTHOSTNAME: string | null = null;
    CURRENTHOSTNAMEPATH: string | null = null;
    CURRENTHOMEHOSTNAME: string | null = null;
    CURRENTHOMEHOSTNAMEPATH: string | null = null;
    HOMEHOSTNAME: string | null = null;
    HOMEHOSTNAMEPATH: string | null = null;
    HOSTNAME: string | null = null;
    HOSTNAMEPATH: string | null = null;
    TESTHOMEHOSTNAME: string | null = null;
    TESTHOMEHOSTNAMEPATH: string | null = null;
    TESTHOSTNAME: string | null = null;
    TESTHOSTNAMEPATH: string | null = null;
    IMAGEPATH: string | null = null;
    STATICPATH: string | null = null;
    CATEGORYPATH: string | null = null;
    INVENTORYCONTROL: string | null = null;
    CONFIGURATION: string | null = null;
    SUBSTORES: string | null = null;
    TAGLOCATION: string | null = null;
    PACKAGELOCATION: string | null = null;
    FTP: string | null = null;
    FTPPATH: string | null = null;
    FTPUSERNAME: string | null = null;
    FTPPASSWORD: string | null = null;
    TESTFTP: string | null = null;
    TESTFTPPATH: string | null = null;
    TESTFTPUSERNAME: string | null = null;
    TESTFTPPASSWORD: string | null = null;
    SELECTSTORENAME: string | null = null;

    jfields_StoreFrontData(): void {
    this.CANCEL = "Cancel Store Front";
    this.SELECT = "Select Store Front";
    this.INSTALL = "Install Store Front";
    this.INSTALL_COMPLETE = "Install Store Front Complete";
    this.NAME = "STOREFRONT_NAME";
    this.CURRENTHOSTNAME = "STOREFRONT_CURRENTHOSTNAME";
    this.CURRENTHOSTNAMEPATH = "STOREFRONT_CURRENTHOSTNAMEPATH";
    this.CURRENTHOMEHOSTNAME = "STOREFRONT_CURRENTHOMEHOSTNAME";
    this.CURRENTHOMEHOSTNAMEPATH = "STOREFRONT_CURRENTHOMEHOSTNAMEPATH";
    this.HOMEHOSTNAME = "STOREFRONT_HOMEHOSTNAME";
    this.HOMEHOSTNAMEPATH = "STOREFRONT_HOMEHOSTNAMEPATH";
    this.HOSTNAME = "STOREFRONT_HOSTNAME";
    this.HOSTNAMEPATH = "STOREFRONT_HOSTNAMEPATH";
    this.TESTHOMEHOSTNAME = "STOREFRONT_TESTHOMEHOSTNAME";
    this.TESTHOMEHOSTNAMEPATH = "STOREFRONT_TESTHOMEHOSTNAMEPATH";
    this.TESTHOSTNAME = "STOREFRONT_TESTHOSTNAME";
    this.TESTHOSTNAMEPATH = "STOREFRONT_TESTHOSTNAMEPATH";
    this.IMAGEPATH = "STOREFRONT_IMAGEPATH";
    this.STATICPATH = "STOREFRONT_STATICPATH";
    this.CATEGORYPATH = "STOREFRONT_CATEGORYPATH";
    this.INVENTORYCONTROL = "STOREFRONT_INVENTORYCONTROL";
    this.CONFIGURATION = "STOREFRONT_CONFIGURATION";
    this.SUBSTORES = "STOREFRONT_SUBSTORES";
    this.TAGLOCATION = "STOREFRONT_TAGLOCATION";
    this.PACKAGELOCATION = "STOREFRONT_PACKAGELOCATION";
    this.FTP = "STOREFRONT_FTP";
    this.FTPPATH = "STOREFRONT_FTPPATH";
    this.FTPUSERNAME = "STOREFRONT_FTPUSERNAME";
    this.FTPPASSWORD = "STOREFRONT_FTPPASSWORD";
    this.TESTFTP = "STOREFRONT_TESTFTP";
    this.TESTFTPPATH = "STOREFRONT_TESTFTPPATH";
    this.TESTFTPUSERNAME = "STOREFRONT_TESTFTPUSERNAME";
    this.TESTFTPPASSWORD = "STOREFRONT_TESTFTPPASSWORD";
    this.SELECTSTORENAME = "STOREFRONT_SELECTSTORENAME";
    }

    jinit_StoreFrontData_0(): StoreFrontData {
        super.jinit_JObject_0();
        this.jfields_StoreFrontData();
        return this;
    }
    

    static getInstance(): StoreFrontData | null {
        return StoreFrontData.instance;
    }
}

